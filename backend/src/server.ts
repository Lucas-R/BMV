import "dotenv/config";
import "reflect-metadata"
import express from "express";
import connection from "@database/config/connection";
import properties from "@routes/properties";

function bootstrap() {
    const SERVER_PORT = Number(process.env.SERVER_PORT);
    const SERVER_HOST = process.env.SERVER_HOST as string;
    const app = express();

    app.use(express.json());
    app.get('/', (req, res) => {
        res.status(200).json({  data: `Server is running on port ${SERVER_PORT}` });
    });
    app.use("/property", properties);

    app.listen(SERVER_PORT, SERVER_HOST);
}

connection.initialize()
.then(() => bootstrap())
.catch((err) => console.log(err));