import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Menu } from './pages/Menu'
import { Login } from './pages/Login'
import { Contact } from './pages/Contact'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Menu />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}
