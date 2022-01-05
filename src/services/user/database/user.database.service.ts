import { IUsers, IUsersSchema, UsersModel } from "../model/user.model"

export class UserDatabaseService {

  getAllUsersRecords = async (): Promise<IUsersSchema[]> => {
    const records = await UsersModel.find();

    return records;
  };

  createUserRecord = async (base: IUsers): Promise<IUsersSchema> => {
    const record = await UsersModel.create(base);

    return record;
  };

  getUserById = async (id: string): Promise<IUsersSchema> => {
    const record = await UsersModel.findById(id);

    return record;
  };

  updateUserById = async (id: string, updateObj: any): Promise<IUsersSchema> => {
    const record = await UsersModel.findByIdAndUpdate(id, updateObj, { new: true });

    return record;
  };

  deleteUserById = async (id: string): Promise<IUsersSchema> => {
    const isDeleted = await UsersModel.findByIdAndDelete(id);

    return isDeleted
  }
}