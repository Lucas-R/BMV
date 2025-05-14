import "dotenv/config";
import express from "express";

function bootstrap() {
    const SERVER_PORT = Number(process.env.SERVER_PORT) || 3000;
    const SERVER_HOST = process.env.SERVER_HOST as string || "localhost";
    const app = express();

    app.use(express.json());
    app.get('/', (req, res) => {
        res.status(200).json(`Server is running on port ${SERVER_PORT}`);
    });

    app.listen(SERVER_PORT, SERVER_HOST);
}

bootstrap();