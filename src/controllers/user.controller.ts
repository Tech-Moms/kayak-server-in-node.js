import { Request, Response } from 'express';
import { UsersService } from '../services/user/user.service';

export class UserController {
  public readonly baseService = new UsersService();


  getUsers = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await this.baseService.getAllRecords();

      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  createUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const response = await this.baseService.createNewRecord(req);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  getUserById = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const response = await this.baseService.getById(id);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  updateUserById = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const response = await this.baseService.updateById(id, req);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };

  deleteUserById = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = req.params.id;
      const response = await this.baseService.deleteById(id);
      res.status(200).json(response);
    } catch (err: any) {
      res.status(400).json(`Error: ${err.toString()}`)
    }
  };
}