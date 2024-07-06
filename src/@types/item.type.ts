import { z } from 'zod'
import { ModifiersSchema } from './modifier.type'
import { ImagesSchema } from './image.type'

export const ItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  alcoholic: z.number(),
  price: z.number(),
  position: z.number(),
  availabilityType: z.string(),
  sku: z.string(),
  modifiers: ModifiersSchema.optional(),
  images: ImagesSchema,
  availble: z.boolean(),
})

export const ItemsSchema = z.array(ItemSchema)

export type ItemSchemaType = z.infer<typeof ItemSchema>
export type ItemsSchemaType = z.infer<typeof ItemsSchema>
