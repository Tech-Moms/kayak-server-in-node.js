import { Request } from 'express';
import { AdventureDatabaseService } from './database/adventure.database.service';
import { IAdventure, IAdventureSchema } from './model/adventure.model';
import { mockAdventureData } from './_mocks/deployment-mocks';

export class AdventureService {
  public readonly baseDatabaseService = new AdventureDatabaseService();

  getAllRecords = async (): Promise<IAdventureSchema[]> => {
    const response = await this.baseDatabaseService.getAllAdventures();

    return response;
  };

  createNewRecord = async (req: Request): Promise<IAdventureSchema> => {
    const mapReq: IAdventure = {
      title: req.body.title,
      description: req.body.description,
      rating: req.body.rating,
      reviews: req.body.reviews,
      cost: req.body.cost,
      image: req.body.image
    };

    const response = await this.baseDatabaseService.createAdventure(mapReq);

    return response;
  };

  getById = async (id: string): Promise<IAdventureSchema> => {
    const response = await this.baseDatabaseService.getAdventureById(id);

    return response;
  };

  updateById = async (id: string, req: Request): Promise<IAdventureSchema> => {
    const response = await this.baseDatabaseService.updateAdventureById(id, req.body);

    return response;
  };

  deleteById = async (id: string): Promise<string> => {
    const response = await this.baseDatabaseService.deleteAdventureById(id);

    return response._id;
  };

  seedDatabase = async (): Promise<any> => {
    const response = await this.baseDatabaseService.insertMany(mockAdventureData);

    return response;
  }
}