
import express from "express";
import cors from "cors";
import db from "./config/database.js";
import User from "./models/UserModel.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

async function startServer() {
    try {
        await db.authenticate();
        console.log("Database connected successfully!");

        await db.sync();
        console.log("Tables synchronized successfully!");
        console.log("User table name:", User.getTableName());

        app.listen(5000, () => {
            console.log("Server up and running on port 5000");
        });
    } catch (error) {
        console.error("Database connection or synchronization failed:", error);
    }
}

startServer();
