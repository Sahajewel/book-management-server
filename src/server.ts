import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { Server } from "http";
import app from "./app";
let server: Server;
const port = process.env.PORT || 5000;

async function main(){
    const mongoUser = process.env.MONGO_USER;
    const mongoPassword = process.env.MONGO_PASSWORD;
    if(!mongoUser || !mongoPassword){
        throw new Error("Mongodb credentials are missing in .env file!")
    }
    try{
        await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.r7awt.mongodb.net/booksManagementDB?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Connected to mongoose");
        server = app.listen(port,()=>{
            console.log(`App is running is on port: ${port}`)
        })
    }catch(error){
        console.log(error)
    }
};
main();
