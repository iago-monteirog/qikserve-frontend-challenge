export interface WebSettingsProps {
  id: number
  venueId: number
  bannerImage: string
  backgroundColour: string
  primaryColour: string
  primaryColourHover: string
  navBackgroundColour: string
}

export interface CustomerThemeType {
  id: number
  venueId: number
  bannerImage: string
  backgroundColour: string
  primaryColour: string
  primaryColourHover: string
  navBackgroundColour: string
}

export const createCustomerTheme = (
  webSettings: WebSettingsProps,
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
