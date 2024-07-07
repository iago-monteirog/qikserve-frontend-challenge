import { z } from 'zod'
import { ModifiersSchema } from './modifier.type'
import { ImagesSchema } from './image.type'

export const ItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  alcoholic: z.number(),
  price: z.number(),
  position: z.number(),
  visible: z.number().optional(),
  availabilityType: z.string(),
  sku: z.string().optional(),
  modifiers: ModifiersSchema.optional(),
  images: ImagesSchema.optional(),
  available: z.boolean(),
})

export const ItemsSchema = z.array(ItemSchema)

export type ItemSchemaType = z.infer<typeof ItemSchema>
export type ItemsSchemaType = z.infer<typeof ItemsSchema>
