import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap"

const NavigationBar = (props: any) => {
    const [screenMobile, setScreen] = useState<boolean>(false)

    useEffect(() => {
        window.addEventListener("resize", reSizeWindow)
        return () => {
            window.removeEventListener("resize", reSizeWindow)
        }
    }, [])

    const reSizeWindow = (e: any) => {
        setScreen(window.innerWidth < 600)
    }
    
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand>
                    {screenMobile ? (
                        <Link to='/' className='nav-link'>
                            <strong>RM</strong>
                        </Link>
                    ) : (
                        <Link to='/' className='nav-link'>
                            React Morfo
                        </Link>
                    )}
                </Navbar.Brand>

                <Nav className='justify-content-end'>
                    <Nav>
                        <div className='navlink-holder'>
                            <NavLink to='/' className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}>
                                Menu 1
                            </NavLink>
                        </div>
                    </Nav>

                    <Nav>
                        <div className='navlink-holder'>
                            <NavLink to='/' className={(navData) => (navData.isActive ? "nav-link active" : "nav-link")}>
                                Menu 2
                            </NavLink>
                        </div>
                    </Nav>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar