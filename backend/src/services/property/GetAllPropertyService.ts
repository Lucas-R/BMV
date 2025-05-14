import { getDocs } from "firebase/firestore";
import { PropertySchema } from "@schemas/property";
import { propertyCollection } from "@utils/firebase/collections";

class GetAllPropertyService {
    async execute() {
        try {
            const data = await getDocs(propertyCollection);
            return data.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as PropertySchema[];
        } catch (e) {
            console.error("Error: ", e);
        }

    }
}

export default GetAllPropertyService;