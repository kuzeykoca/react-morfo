import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../frames/Home"
import Menu1 from "../frames/Menu1"
import Menu2 from "../frames/Menu2"
import NavBar from "../components/NavBar"

const AppRouter = (props: any) => {
    return (
        <React.StrictMode>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu1' element={<Menu1 />} />
                    <Route path='/menu2' element={<Menu2 />} />
                </Routes>
            </Router>
        </React.StrictMode>
    )
}

export default AppRouter