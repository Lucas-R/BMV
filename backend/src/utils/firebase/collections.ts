import { collection } from "firebase/firestore";
import database from "./database";

const propertyCollection = collection(database, "properties");
export default propertyCollection;