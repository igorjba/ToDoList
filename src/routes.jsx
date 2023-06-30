import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Todos } from './pages/Todos'
import { About } from './pages/About'
import { Error } from './pages/Error'

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    )
}