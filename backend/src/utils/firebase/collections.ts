import database from "./database";
import { collection } from "firebase/firestore";

const propertyCollection = collection(database, "properties");

export {
    propertyCollection
}