import { z } from "zod";

export const carSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    description: z.string(),
    brand: z.string().min(1),
    year: z.number().positive(),
    km: z.number(),
});

export type CarSchemaType = z.infer<typeof carSchema>;

const carCreateSchema = carSchema
    .omit({ id: true })

const carUpdateSchema = carCreateSchema.partial();

const carReturnSchema = carSchema;

export { carCreateSchema, carReturnSchema, carUpdateSchema };
