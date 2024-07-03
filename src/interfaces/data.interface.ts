import { WebSettingsProps } from '../styles/themes/customerTheme'

export interface RestaurantDataProps {
  id: number
  name: string
  internalName: string
  description: string | null
  liveFlag: number
  demoFlag: number
  address1: string | null
  address2: string | null
  address3: string | null
  city: string
  county: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: WebSettingsProps
  ccy: string
  ccySymbol: string
  currency: string
}
