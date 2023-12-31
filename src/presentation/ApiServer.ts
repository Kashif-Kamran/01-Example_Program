import express from "express";
import { CreateLogBookController } from "./CreateLogBookController";

export class ApiServer {
  public static async run(
    port: Number,
    controller: CreateLogBookController
  ): Promise<void> {
    const app = express();

    app.use(express.json());
    app.post("/logbooks", (req, res) => controller.handle(req, res));

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  }
}
