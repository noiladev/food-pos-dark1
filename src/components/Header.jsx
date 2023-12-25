import React from 'react'
import logo from  '../components/assets/img/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'
// @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css");

function Header() {
  const location = useLocation().pathname
  return (
    <header>
      <nav className='nav'>
        <a className='nav__logo' href="#">
          <img src={logo} alt="" />
        </a>
        <ul className='nav__list'>
          <li className={location == '/' ? 'nav__link active' : 'nav__link'}>
            <Link to="/" className={location == '/' ? 'nav__link active' : 'nav__link'}><i class="bi bi-house-door"></i></Link>
          </li>
          <li className={location == '/percent' ? 'nav__link active' : 'nav__link'}>
            <Link to="/percent"  className='nav__link' ><i class="bi bi-percent"></i></Link>
          </li>
          <li className={location == '/chart' ? 'nav__link active' : 'nav__link'}>
            <Link to="/chart"  className='nav__link'><i class="bi bi-pie-chart"></i></Link>
          </li>
          <li className={location == '/envekope' ? 'nav__link active' : 'nav__link'}>
            <Link to="/envekope"   className='nav__link'><i class="bi bi-envelope"></i></Link>
          </li>
          <li className={location == '/notification' ? 'nav__link active' : 'nav__link'}>
            <Link to="/notification"   className='nav__link'><i class="bi bi-bell"></i></Link>
          </li>
          <li className={location == '/settingss' ? 'nav__link active' : 'nav__link'}>
            <Link to="/settingss"   className='nav__link'><i class="bi bi-gear"></i></Link>
          </li>
          <li className={location == '/logout' ? 'nav__link active' : 'nav__link'}>
            <Link to="/logout"   className='nav__link'><i class="bi bi-box-arrow-right"></i></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
