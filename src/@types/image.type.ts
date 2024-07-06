import { z } from 'zod'

export const ImageSchema = z.object({
  id: z.number(),
  image: z.string().nullable(),
})

export const ImagesSchema = z.array(ImageSchema)

export type ImageSchemaType = z.infer<typeof ImageSchema>
export type ImagesSchemaType = z.infer<typeof ImagesSchema>
