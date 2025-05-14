import { getFirestore } from "firebase/firestore";
import app from "./app";

const Database = getFirestore(app);

export default Database;