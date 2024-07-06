import { z } from 'zod'
import { ModifierItemSchema } from './modifierItem.type'

export const ModifierSchema = z.object({
  id: z.number(),
  name: z.string(),
  minChoices: z.number(),
  maxChoices: z.number(),
  items: ModifierItemSchema,
})

export const ModifiersSchema = z.array(ModifierSchema)

export type ModifierSchemaType = z.infer<typeof ModifierSchema>
export type ModifiersSchemaType = z.infer<typeof ModifiersSchema>
