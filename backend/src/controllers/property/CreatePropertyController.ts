import { Request, Response } from "express";
import CreatePropertyService from "@services/property/CreatePropertyService";
import { PropertySchema } from "@schemas/property";

class CreatePropertyController {
    async handle(req: Request, res: Response) {
        const payload: PropertySchema = req.body;
        const data = await new CreatePropertyService().execute(payload);
        res.status(200).json(data);
    }
}

export default CreatePropertyController;