import { z } from 'zod'

export const ModifierItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  maxChoices: z.number(),
  position: z.number(),
  visible: z.number(),
  availabilityType: z.string(),
  qty: z.number().optional(),
  available: z.boolean(),
})

export const ModifierItemsSchema = z.array(ModifierItemSchema)

export type ModifierItemsSchemaType = z.infer<typeof ModifierItemsSchema>
export type ModifierItemSchemaType = z.infer<typeof ModifierItemSchema>
