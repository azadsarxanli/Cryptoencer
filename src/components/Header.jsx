import React from 'react'
import '../assets/css/Header.css'
import Logo from '../assets/img/logo.png'
import Logo1 from '../assets/img/logov1.png'
import Logo2 from '../assets/img/logov2.png'
import DiscoBall from '../assets/img/disco-ball.png'

const Header = () => {
  return (
    <div className='wrapper header-wrapper'>
        <header>

            <div className="logo">
                <img src={Logo1} alt="" />

                <p>Cryptoencer</p>
            </div>

            <div className="disco-ball">
                <img className='disco-ball-image' src={DiscoBall} alt="DiscoBall" />
            </div>

            <div className="header-menu">

                <ul>
                    <li>
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 1.89789C19.2645 2.21861 18.4744 2.43531 17.6438 2.53326C18.5008 2.0286 19.142 1.23432 19.4477 0.298631C18.6425 0.769299 17.7612 1.1006 16.8422 1.27812C16.2242 0.628768 15.4057 0.198364 14.5136 0.0537355C13.6216 -0.0908933 12.706 0.0583448 11.909 0.47828C11.1119 0.898215 10.4781 1.56535 10.1058 2.37611C9.73358 3.18688 9.64374 4.0959 9.85026 4.96206C8.2187 4.88144 6.62259 4.46412 5.16553 3.73718C3.70847 3.01023 2.42301 1.98991 1.39258 0.742437C1.04025 1.34053 0.837664 2.03398 0.837664 2.7725C0.837271 3.43734 1.00364 4.09199 1.32201 4.67838C1.64038 5.26477 2.10091 5.76476 2.66273 6.13398C2.01117 6.11358 1.37397 5.94032 0.804193 5.62863V5.68064C0.804127 6.6131 1.13189 7.51687 1.73186 8.23859C2.33184 8.96031 3.16707 9.45553 4.09583 9.64022C3.4914 9.8012 2.85769 9.82491 2.24258 9.70957C2.50462 10.5119 3.01506 11.2135 3.70243 11.7162C4.3898 12.2188 5.21969 12.4974 6.07593 12.5128C4.62242 13.6357 2.82735 14.2448 0.979477 14.2421C0.652146 14.2422 0.325091 14.2234 0 14.1858C1.87569 15.3726 4.05914 16.0024 6.28909 16C13.8378 16 17.9644 9.84739 17.9644 4.51132C17.9644 4.33796 17.96 4.16286 17.9521 3.9895C18.7548 3.41825 19.4476 2.71087 19.9982 1.90049L20 1.89789Z" fill="#0F103F"/>
                        </svg>
                        <p>Twitter</p>
                    </li>

                    <li>
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6646 0.717156L0.934606 7.55416C-0.275394 8.04016 -0.268393 8.71516 0.712607 9.01616L5.26461 10.4362L15.7966 3.79116C16.2946 3.48816 16.7496 3.65116 16.3756 3.98316L7.84261 11.6842H7.84061L7.84261 11.6852L7.52861 16.3772C7.98861 16.3772 8.19161 16.1662 8.44961 15.9172L10.6606 13.7672L15.2596 17.1642C16.1076 17.6312 16.7166 17.3912 16.9276 16.3792L19.9466 2.15116C20.2556 0.912156 19.4736 0.351156 18.6646 0.717156Z" fill="white"/>
                        </svg>

                        <p>Telegram</p>
                    </li>
                </ul>

            </div>

        </header>
    </div>
  )
}

export default Header