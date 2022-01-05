import { Request } from 'express';
import { UserDatabaseService } from './database/user.database.service';
import { IUsers, IUsersSchema } from './model/user.model';

export class UsersService {
  public readonly baseDatabaseService = new UserDatabaseService();

  getAllRecords = async (): Promise<IUsersSchema[]> => {
    const response = await this.baseDatabaseService.getAllUsersRecords();

    return response;
  };

  createNewRecord = async (req: Request): Promise<IUsersSchema> => {
    const mapReq: IUsers = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      preferredContact: req.body.preferredContact,
      isVerified: req.body.isVerified
    };

    const response = await this.baseDatabaseService.createUserRecord(mapReq);

    return response;
  };

  getById = async (id: string): Promise<IUsersSchema> => {
    const response = await this.baseDatabaseService.getUserById(id);

    return response;
  };

  updateById = async (id: string, req: Request): Promise<IUsersSchema> => {
    const response = await this.baseDatabaseService.updateUserById(id, req.body);

    return response;
  };

  deleteById = async (id: string): Promise<string> => {
    const response = await this.baseDatabaseService.deleteUserById(id);

    return response._id;
  };
}