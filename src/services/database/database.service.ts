import mongoose from 'mongoose';

export class DatabaseService {

  init = async (): Promise<boolean> => {
    try {
      const connectionString = process.env.MONGO_DB || '';
      const config = {
        useNewUrlParser: true,
        keepAlive: false,
        connectTimeoutMS: 3000,
        autoIndex: false
      };

      console.log(connectionString)

      await mongoose.connect(connectionString, config).catch(e => { console.log(e) });

      return true;
    } catch (err) {
      return false;
    }
  }
}