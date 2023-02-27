import { ThemeProvider } from '@emotion/react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './contexts/GlobalContext'
import { UserProvider } from './contexts/UserContext'
import useUser from './hooks/useUser'
import Charges from './pages/Charges'
import Clients from './pages/Clients'
import DetailClient from './pages/DetailClient'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { theme } from './theme'

function ProtectedRoutes({ redirectTo }) {
  const { token } = useUser()
  const isAuthenticated = token

  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function MainRoutes() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <UserProvider>
          <Routes>
            <Route path='/' exact element={<Login />} />
            <Route path='/sign-up' exact element={<SignUp />} />
            <Route element={<ProtectedRoutes redirectTo={'/'} />}>
              <Route path='/home' exact element={<Home />} />
              <Route path='/clients' exact element={<Clients />} />
              <Route path='/charges' exact element={<Charges />} />
              <Route path='/client' exact element={<DetailClient />} />
            </Route>
          </Routes>
        </UserProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default MainRoutes
