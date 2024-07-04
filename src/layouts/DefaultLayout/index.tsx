import { Outlet } from 'react-router'
import { LayoutContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <h1>Olá mundo</h1>
      <Outlet />
    </LayoutContainer>
  )
}
