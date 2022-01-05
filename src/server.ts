import dotenv from "dotenv"
import Application from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV;

Application.app.listen(PORT, async () => {
  console.log(`Node Backend Demo App listening at http://localhost:${PORT}`);
  Application.setUpMongo();
});