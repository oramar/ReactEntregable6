import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'
const Header = () => {
  const [isMovil, setIsMovil] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa

  }
  console.log(isMovil)
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <h3 className="nav__user">Orlando amado</h3>
          <ul onClick={() => setIsMovil(false)} className={`${isMovil ? 'navbar-links-mobile' : 'navbar-links'}`}>
            <Link className="header__item" to='/'><i className="fa-solid fa-house navbar__list"></i>e-commerce</Link>
            <Link className="header__item" to='/login'><i className="fa-solid fa-user navbar__list navbar__list-login"></i>Login</Link>
            <Link className="header__item" to='/cart'><i className="fa-solid fa-cart-plus navbar__list navbar__list-cart"></i>Cart</Link>
            <Link className="header__item" to='/purchases'><i className="fa-solid fa-store navbar__list navbar__list-purchases"></i>Purchases</Link>
          </ul>
          <button onClick={() => setIsMovil(!isMovil)} className='mobile-menu-icon'>
            {isMovil ? <i className="fa-sharp fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </nav>
      </header>

    </>
  )
}

export default Header