import "reflect-metadata";
import { createConnection } from "typeorm";
import dotenv from "dotenv";

dotenv.config({
    path: process.env.NODE_ENV === "test" && ".env.test"
})

if (process.env.NODE_ENV !== "test") createConnection().catch(error => console.log(error));
