import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivatRoute'
import Login from './pages/LoginPages/LoginPages.jsx'
import Todos from './pages/TodoPages/TodoPages.jsx'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<h1>Home</h1>}/>
                <Route path='/login' element={<Login />}/>
                <Route element={<PrivateRoute />}>
                    <Route path='/todos' element={<Todos />}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
