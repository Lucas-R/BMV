import { addDoc } from "firebase/firestore";
import { property, PropertySchema } from "@schemas/property";
import propertyCollection from "@utils/firebase/collections";

class CreatePropertyService {
    async execute(payload: PropertySchema) {
        const valid = property.parse(payload);
        try {
            const docRef = await addDoc(propertyCollection, valid);
            return ({ data: docRef.id });
        } catch (e) {
            console.error("Error: ", e);
        }
        return ;
    }
}

export default CreatePropertyService;