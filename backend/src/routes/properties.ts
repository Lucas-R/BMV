import { Router } from "express";
import CreatePropertyController from "@controllers/property/CreatePropertyController";
import GetAllPropertyController from "@controllers/property/GetAllPropertyController";

const properties = Router();

properties.post("/", async(req, res) => {
    return await new CreatePropertyController().handle(req, res);
});

properties.get("/", async(req, res) => {
    return await new GetAllPropertyController().handle(req, res);
});

export default properties;