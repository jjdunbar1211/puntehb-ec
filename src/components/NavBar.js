import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav class="navbar">
            <div class="brand-title">PunteHB</div>
            <div class="navbar-links">
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
