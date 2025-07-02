import express, { Application, Request, Response } from "express";
import { Book } from "./app/books/bookModels";

const app: Application = express();
app.use(express.json());

// all books api create read update and delete

// create api
app.post("/create-book", async (req: Request, res: Response) => {
  try {
    const body = req.body;
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
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});
export default app;
