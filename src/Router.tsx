import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Menu } from './pages/Menu'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Menu />} />
      </Route>
    </Routes>
  )
}
