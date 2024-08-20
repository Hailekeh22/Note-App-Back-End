import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const serverPort = process.env.SERVER_PORT;
export const MongodbURI = process.env.MONGO_DB_URI;
export const secret = process.env.JWT_SECRET;
