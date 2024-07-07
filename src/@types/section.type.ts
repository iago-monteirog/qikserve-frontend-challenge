import { z } from 'zod'
import { ImagesSchema } from './image.type'
import { ItemsSchema } from './item.type'

export const SectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  position: z.number(),
  visible: z.number().optional(),
  images: ImagesSchema.optional(),
  items: ItemsSchema,
})

export const SectionsSchema = z.array(SectionSchema)

export type SectionSchemaType = z.infer<typeof SectionSchema>
export type SectionsSchemaType = z.infer<typeof SectionsSchema>
