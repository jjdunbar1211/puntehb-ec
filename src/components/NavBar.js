import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar">

            <CartWidget />            

            <div className="navbar-links">
                <ul>
                    {/* eslint-disable-next-line */}
                    <li><a href="#">Sobre Nosotros</a></li>
                     {/* eslint-disable-next-line */}
                    <li><a href="#">Productos</a></li>
                     {/* eslint-disable-next-line */}
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
      </nav>
    )
}

export default NavBar
