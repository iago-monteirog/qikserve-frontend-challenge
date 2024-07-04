import { Outlet } from 'react-router'
import { BannerImage, LayoutContainer } from './styles'
import { HeaderComponent } from '../../components/Header'
import useFetch from '../../hooks/useFetch'

export const DefaultLayout = () => {
  const { data } = useFetch();

  const bannerImg = data?.webSettings.bannerImage;
  return (
    <LayoutContainer>
      <HeaderComponent />
      {bannerImg && <BannerImage src={bannerImg} alt="Banner" />}
      <Outlet />
    </LayoutContainer>
  )
}
