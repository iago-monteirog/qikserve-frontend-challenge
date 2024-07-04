import { z } from 'zod'

export const CustomerThemeTypeSchema = z.object({
  id: z.number(),
  venueId: z.number(),
  bannerImage: z.string(),
  backgroundColour: z.string(),
  primaryColour: z.string(),
  primaryColourHover: z.string(),
  navBackgroundColour: z.string(),
})

export const CustomerDataPropsSchema = z.object({
  id: z.number(),
  name: z.string(),
  internalName: z.string(),
  description: z.string().nullable(),
  liveFlag: z.number(),
  demoFlag: z.number(),
  address1: z.string(),
  address2: z.string().nullable(),
  address3: z.string().nullable(),
  city: z.string(),
  county: z.string(),
  postcode: z.string(),
  country: z.string(),
  timezoneOffset: z.string(),
  locale: z.string(),
  timeZone: z.string(),
  webSettings: CustomerThemeTypeSchema,
  ccy: z.string(),
  ccySymbol: z.string(),
  currency: z.string(),
})

export type CustomerThemeType = z.infer<typeof CustomerThemeTypeSchema>
export type CustomerDataProps = z.infer<typeof CustomerDataPropsSchema>
