import express, { Application, Request, Response } from "express";
import { Book } from "./app/books/bookModels";
import cors from "cors"
import { BorrowBook } from "./app/borrowBooks/borrowModels";

const app: Application = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))
// all books api create read update and delete

// create api
app.post("/create-book", async (req: Request, res: Response) => {
  try {
    const body = req.body;
    if(body.copies === 0 ){
      body.available = false;
    }
    const book = await Book.create(body);
    res.status(200).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create book",
      error: error,
    });
  }
});
//  get api
app.get("/books", async (req: Request, res: Response) => {
  const books = await Book.find();
  try {
    res.status(200).json({
      success: true,
      message: "Books retreived successfully",
      data: books,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve books",
      error: error?.message || "Unknown error",
    });
  }
});
// single get api
app.get("/books/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Book retreived successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve book",
      error: error?.message || "Unknown error",
    });
  }
});
// update api
app.put("/edit-book/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedData = req.body
    const updateBook = await Book.findByIdAndUpdate(id, updatedData,{
        new: true
    });
    if (!updateBook) {
       res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updateBook,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to updated book",
      error: error?.message || "Unknown error",
    });
  }
});
//  delete api creted
app.delete("/books/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      res.status(404).json({
        success: false,
        message: "Book Not Found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deleteBook,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete book",
      error: error?.message || "Unknown error",
    });
  }
});

//  all borrow api created
app.post("/borrow", async (req: Request, res: Response) => {
  try {
    const body = req.body;

    // Step 1: Find the book first
    const bookToUpdate = await Book.findById(body.book);

    if (!bookToUpdate) {
       res.status(404).json({
        success: false,
        message: "Book not found",
      });
      return
    }

    // Step 2: Validate quantity
    if (bookToUpdate.copies < body.quantity || body.quantity < 1) {
       res.status(400).json({
        success: false,
        message: "Invalid quantity. Not enough copies available.",
      });
      return
    }

    // Step 3: Create borrow
    const borrowBook = await BorrowBook.create(body);

    // Step 4: Update book copies & available status
    bookToUpdate.copies -= body.quantity;
    if (bookToUpdate.copies === 0) {
      bookToUpdate.available = false;
    }
    await bookToUpdate.save();

     res.status(200).json({
      success: true,
      message: "Successfully borrowed book",
      data: borrowBook,
    });
    return
  } catch (error: any) {
     res.status(500).json({
      success: false,
      message: "Failed to borrow book",
      error: error?.message || "Unknown error",
    });
    return
  }
});

//  get borrowed summary
app.get("/borrow-summary", async(req:Request, res: Response)=>{
  try{
    const borrowSummary = await BorrowBook.find().populate("book");
    res.status(200).json({
      success: true,
      message:"Borrow summary retrieved successfully",
      data: borrowSummary
    })
  }catch(error: any){
    res.status(500).json({
      success: false,
      message : "Failed to fetch borrow summary",
      error: error?.message || "Unknow error"
    })
  }
})
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});
export default app;
