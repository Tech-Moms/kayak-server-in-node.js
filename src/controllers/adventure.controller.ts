import { Request, Response } from 'express';
import { AdventureService } from '../services/adventures/adventure.service';

export class AdventureController {
  public readonly adventureService = new AdventureService();


  getAdvenutres = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await this.adventureService.getAllRecords();

      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  createAdventure = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await this.adventureService.createNewRecord(req);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  getAdventureById = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const response = await this.adventureService.getById(id);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  updateAdventureById = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const response = await this.adventureService.updateById(id, req);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  deleteAdventureById = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const response = await this.adventureService.deleteById(id);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  seedDatabase = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await this.adventureService.seedDatabase();
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

}