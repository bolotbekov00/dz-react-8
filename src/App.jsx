import './App.css'
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import LoginPages from "./pages/LoginPages/LoginPages.jsx";
import TodoPages from "./pages/TodoPages/TodoPages.jsx";
import AddTodoPages from "./pages/AddTodoPages/AddTodoPages.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<h1>Home pages</h1>}/>
                <Route path="login" element={<LoginPages/>}/>
                <Route path="todo" element={<TodoPages/>}/>
                <Route path="todoAdd" element={<AddTodoPages/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
