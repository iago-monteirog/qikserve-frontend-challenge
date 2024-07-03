import { CustomerThemeType } from "../../@types/customer.type"

export const createCustomerTheme = (
  webSettings: CustomerThemeType,
): CustomerThemeType => ({
  id: webSettings.id,
  venueId: webSettings.venueId,
  bannerImage: webSettings.bannerImage,
  backgroundColour: webSettings.backgroundColour,
  primaryColour: webSettings.primaryColour,
  primaryColourHover: webSettings.primaryColourHover,
  navBackgroundColour: webSettings.navBackgroundColour,
})

export const defaultCustomerTheme: CustomerThemeType = {
  id: 0,
  venueId: 0,
  bannerImage: '',
  backgroundColour: '#000',
  primaryColour: '#000',
  primaryColourHover: '#555',
  navBackgroundColour: '#000',
}
