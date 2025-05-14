import { z } from "zod";

export const type = z.enum([
    "HOUSE", 
    "APARTMENT",
    "TERRAIN",
    "COMMERCIAL", 
    "HANGAR", 
    "RURAL"
]);

export const purpose = z.enum([
    "RESIDENTIAL",
    "COMMERCIAL",
    "INDUSTRIAL",
    "MIXED"
]);

export const step = z.enum([
    "READY",
    "UNDER_CONSTRUCTION",
    "RENOVATION",
    "LAUNCH"
]);

export const Address = z.object({
    zipcode: z.string().regex(/^\d{8}$/, "CEP deve ter 8 dígitos numéricos (sem traço)"),
    place: z.string().min(1, "Endereço obrigatório"),
    number: z.string().min(1, "Número obrigatório"),
    complement: z.string().optional(),
    district: z.string().min(1, "Bairro obrigatório"),
    city: z.string().min(1, "Cidade obrigatória"),
    zone: z.string().length(2, "UF deve ter 2 caracteres")
});

export const characteristic = z.object({
    area: z.object({
        terrain: z.number().positive("Área do terreno deve ser positiva"),
        built: z.number().positive().optional(),
        private: z.number().positive().optional(),
    }),
    rooms: z.number().int().min(0, "Número inválido"),
    bathrooms: z.number().int().min(0, "Número inválido"),
    suites: z.number().int().min(0).optional(),
    garage: z.number().int().min(0, "Número inválido"),
    infrastructure: z.object({
        furnished: z.boolean(),
        elevator: z.boolean().optional(),
        pool: z.boolean().optional(),
        leisure: z.boolean().optional()
    }),
});

export const owner = z.object({
    name: z.string().min(1, "Nome obrigatório"),
    doc: z.string().min(11, "CPF/CNPJ inválido"),
    phone: z.string().min(1, "Telefone obrigatório"),
    email: z.string().email("E-mail inválido").optional()
});

export const prices = z.object({
    sell: z.number().positive().optional(),
    rent: z.number().positive().optional(),
    condominium: z.number().positive().optional(),
    tax: z.number().positive().optional()
});

export const control = z.object({
    status: z.enum(["ACTIVE", "INACTIVE", "SOLD", "RENTED", "RESERVED"]),
    date: z.coerce.date().refine(date => !isNaN(date.getTime())),
    reason: z.string().optional()
});

export const gallery = z.object({
    principal: z.string().url("Deve ser uma URL válida"),
    images: z.array(z.string().url()).min(1).optional(),
    videos: z.array(z.string().url()).optional()
});

export const property = z.object({
    id: z.string().optional(),
    type: type,
    purpose: purpose,
    step: step,
    address: Address,
    characteristics: characteristic,
    owner: owner,
    prices: prices,
    control: control,
    financing: z.boolean().optional(),
    exchange: z.boolean().optional(),
    observation: z.string().optional(),
    description: z.string().optional(),
    gallery: gallery.optional(),
    createdAt: z.date().default(() => new Date()).optional(),
    updatedAt: z.date().optional()
});

export type PropertySchema = z.infer<typeof property>;
export type AdressSchema = z.infer<typeof Address>;
export type CharacteristicSchema = z.infer<typeof characteristic>;