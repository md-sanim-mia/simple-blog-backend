import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routers";
import gogbalerrorhandiler from "./app/middlwares/gogbalerrorhandiler";
import notFound from "./app/middlwares/notFound";
const app: Application = express();
const port = 5000;
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.get("/", async (req: Request, res: Response) => {
  res.json("blogs app server ");
});

app.use(gogbalerrorhandiler);
app.use(notFound);
export default app;
