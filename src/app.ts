import express from "express";
import userRoutes from "./routes/user.routes";
import adventureRoutes from "./routes/advenuture.routes";
import cors from 'cors';
import { DatabaseService } from "./services/database/database.service";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./swagger/swagger";

export class Application {
  public app: express.Application;
  public readonly databaseService = new DatabaseService();

  constructor() {
    this.app = express();
    this.config();

    this.app.use(cors());
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true
      })
    );

    this.app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.app.use('/kayak', userRoutes);
    this.app.use('/kayak', adventureRoutes);
  }

  setUpMongo = async (): Promise<boolean> => {
    let result = false;
    try {
      result = await this.databaseService.init();
    } catch (err: any) {
      console.log(`Could not set up mongo. ${err.toString()}`)
    }
    return result;
  };

}

export default new Application();


