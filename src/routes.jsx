import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Todos } from './pages/Todos'
import { About } from './pages/About'
import { Error } from './pages/Error'
import { Header } from './components/Header'

export function ProtectedRoutes({ redirectTo }) {
    const token = 'blablabla'
    return token ? <Outlet /> : <Navigate to={redirectTo} />
}

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={
                <>
                    <Header />
                    <ProtectedRoutes redirectTo="/" />
                </>
            }>

                <Route path="/todos" element={<Todos />} />
                <Route path="/about" element={<About />} />
            </Route>

            <Route path="/*" element={<Error />} />
        </Routes>
    )
}