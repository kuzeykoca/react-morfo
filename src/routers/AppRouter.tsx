import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../frames/Home"
import NavBar from "../components/NavBar"

const AppRouter = (props: any) => {
    return (
        <React.StrictMode>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Router>
        </React.StrictMode>
    )
}

export default AppRouter