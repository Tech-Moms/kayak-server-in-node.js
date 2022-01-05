import { IAdventure, IAdventureSchema, AdventureModel } from "../model/adventure.model"

export class AdventureDatabaseService {

  getAllAdventures = async (): Promise<IAdventureSchema[]> => {
    const records = await AdventureModel.find();

    return records;
  };

  createAdventure = async (base: IAdventure): Promise<IAdventureSchema> => {
    const record = await AdventureModel.create(base);

    return record;
  };

  getAdventureById = async (id: string): Promise<IAdventureSchema> => {
    const record = await AdventureModel.findById(id);

    return record;
  };

  updateAdventureById = async (id: string, updateObj: any): Promise<IAdventureSchema> => {
    const record = await AdventureModel.findByIdAndUpdate(id, updateObj, { new: true });

    return record;
  };

  deleteAdventureById = async (id: string): Promise<IAdventureSchema> => {
    const isDeleted = await AdventureModel.findByIdAndDelete(id);

    return isDeleted
  }

  insertMany = async (adventures: IAdventure[]): Promise<any> => {
    const response = await AdventureModel.insertMany(adventures);

    return response;
  }
}