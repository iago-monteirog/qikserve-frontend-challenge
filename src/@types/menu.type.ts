import { z } from 'zod'
import { SectionsSchema } from './section.type'

export const MenuDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  collapse: z.number(),
  sections: SectionsSchema,
})

export type MenuDataSchemaType = z.infer<typeof MenuDataSchema>
