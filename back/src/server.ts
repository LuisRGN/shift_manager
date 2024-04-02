import express from "express"
import cors from "cors"
import morgan from "morgan"
import { indexRouter } from "./routes/indexRouter";

export const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(indexRouter);