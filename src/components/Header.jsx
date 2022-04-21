import React from 'react'
import '../assets/css/Header.css'
import Logo from '../assets/img/logo.png'
import DiscoBall from '../assets/img/disco-ball.png'

const Header = () => {
  return (
    <div className='wrapper header-wrapper'>
        <header>

            <div className="logo">
                <img src={Logo} alt="" />

                <p>Cryptoencer</p>
            </div>

            <div className="disco-ball">
                <img className='disco-ball-image' src={DiscoBall} alt="DiscoBall" />
            </div>

            <div className="header-menu">

                <ul>
                    <li>Home</li>
                    <li>Table</li>
                    <li>Pricing</li>
                    <li>Test</li>
                </ul>

            </div>

        </header>
    </div>
  )
}

export default Header