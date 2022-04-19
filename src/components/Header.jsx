import React from 'react'
import '../assets/css/Header.css'
import Logo from '../assets/img/logo.png'
import DiscoBall from '../assets/img/disco-ball.svg'

function Header() {
  return (
    <div className='wrapper header-wrapper'>
        <header>

            <div className="logo">
                <svg width="99" height="59" viewBox="0 0 99 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M92.5101 7.10618C88.6809 3.27794 83.5845 0.981248 78.1799 0.648342C72.7756 0.315435 67.4358 1.96927 63.1656 5.29859C59.2664 2.26915 54.4692 0.624197 49.5313 0.62324C44.5934 0.622283 39.7958 2.26538 35.8953 5.29331C31.4468 1.80273 25.8338 0.14166 20.2022 0.649214C14.5706 1.15677 9.345 3.79467 5.59233 8.02437C1.83966 12.2541 -0.157109 17.7566 0.00966519 23.4086C0.17644 29.0606 2.49418 34.436 6.48972 38.4369L20.135 52.0842C20.1455 52.0944 20.1561 52.1043 20.168 52.1149C20.1799 52.1254 20.1832 52.1304 20.1908 52.138C20.205 52.1522 20.2202 52.1651 20.2344 52.1793C20.4513 52.3939 20.6714 52.603 20.8949 52.8068C21.0099 52.9121 21.1261 53.0142 21.243 53.1169C21.3379 53.1995 21.4333 53.2814 21.5291 53.3623C25.4187 56.6581 30.3243 58.5152 35.4213 58.6209C40.5188 58.7269 45.497 57.0756 49.5204 53.9439C53.7905 57.2731 59.1304 58.9271 64.5346 58.5942C69.9392 58.2613 75.0357 55.9645 78.8649 52.1363L92.5104 38.4911C96.6663 34.326 99 28.6824 99 22.7986C99 16.9148 96.666 11.2713 92.5101 7.10618ZM49.527 6.40336C52.7713 6.40128 55.9432 7.36175 58.6412 9.16316C61.3396 10.9646 63.4424 13.5259 64.6842 16.5231C65.9261 19.5203 66.2507 22.8185 65.6173 26.0002C64.9838 29.182 63.4206 32.1044 61.1255 34.3973L49.527 45.9956L37.9281 34.3973C35.6331 32.1044 34.0699 29.182 33.4364 26.0002C32.8029 22.8183 33.1276 19.5201 34.3694 16.523C35.6113 13.5258 37.7144 10.9644 40.4124 9.16302C43.1108 7.36165 46.2827 6.40121 49.527 6.40336ZM19.4781 36.4444C19.4721 34.2893 19.8938 32.1547 20.7185 30.1638C21.5432 28.1729 22.7546 26.3654 24.2825 24.8458L27.3696 21.7588C27.2202 24.8444 27.7181 27.9273 28.8315 30.809C29.9449 33.6906 31.6491 36.3073 33.8344 38.4911L45.1958 49.8525C42.7452 51.5689 39.8705 52.5799 36.8848 52.7748C33.8994 52.9696 30.9175 52.3414 28.2645 50.9583C25.6115 49.5747 23.3892 47.49 21.8397 44.9304C20.2902 42.3711 19.4731 39.4353 19.4774 36.4434L19.4781 36.4444ZM10.5828 34.3428C7.67953 31.4403 5.97039 27.5544 5.793 23.4529C5.61561 19.3514 6.98285 15.3325 9.62464 12.1901C12.2664 9.04766 15.9907 7.01027 20.0617 6.48035C24.1327 5.95042 28.2544 6.96654 31.6126 9.32793L20.1888 20.7518C18.1216 22.8077 16.4827 25.2534 15.367 27.947C14.2513 30.6406 13.681 33.5288 13.689 36.4444C13.689 36.7885 13.697 37.1313 13.7131 37.4732L10.5828 34.3428ZM63.1732 52.8468C59.822 52.8547 56.5499 51.8282 53.8037 49.9073L65.2209 38.4911C67.4064 36.3073 69.1102 33.6906 70.2236 30.8089C71.3369 27.9273 71.835 24.8444 71.6857 21.7588L74.7728 24.8458C77.0669 27.1399 78.6287 30.0626 79.2615 33.2445C79.8947 36.4262 79.5697 39.7243 78.3278 42.7216C77.0863 45.7188 74.9838 48.2804 72.2865 50.0827C69.5888 51.885 66.4175 52.8468 63.1732 52.8468ZM88.417 34.3973L85.3412 37.4732C85.3567 37.1317 85.3646 36.7889 85.3653 36.4444C85.3732 33.5288 84.8029 30.6406 83.6872 27.947C82.5715 25.2533 80.9324 22.8077 78.8652 20.7518L67.4493 9.33553C70.8135 6.99448 74.9323 5.99778 78.9947 6.54164C83.057 7.08547 86.7686 9.13049 89.3986 12.274C92.0286 15.4175 93.3863 19.4317 93.2047 23.5263C93.023 27.6209 91.3152 31.4991 88.417 34.3973Z" fill="white"/>
                </svg>

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