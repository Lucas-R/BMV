import { Request, Response } from "express";
import GetAllPropertyService from "@services/property/GetAllPropertyService";

class GetAllPropertyController {
    async handle(req: Request, res: Response) {
        const data = await new GetAllPropertyService().execute();
        res.status(200).json(data);
    }
}

export default GetAllPropertyController;