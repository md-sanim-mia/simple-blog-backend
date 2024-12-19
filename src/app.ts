import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routers";
const app: Application = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
app.get("/", async (req: Request, res: Response) => {
  res.json("blogs app server ");
});
export default app;
