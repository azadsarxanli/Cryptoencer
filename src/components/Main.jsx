import React from 'react'
import '../assets/css/Main.css'
import illustration1 from '../assets/img/illustration-1.png'
import illustration2 from '../assets/img/illustration-2.png'
import gradient1 from '../assets/img/gradient1.svg'
import circle from '../assets/img/circle.svg'
import facebook from '../assets/img/fb.svg'
import instagram from '../assets/img/insta.svg'
import tiktok from '../assets/img/tiktok.svg'
import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/tg.svg'
import youtube from '../assets/img/youtube.svg'
import bg1 from '../assets/img/Titik-titik.png'
import shadow from '../assets/img/lightshadow.png'


function Main() {
  return (
    <div className='wrapper'>
        <main className='main-wrapper'>

            <div className="illustration1">
                <img src={illustration1} alt="illustration1" />
            </div>

            <div className="main-heading">
                <h1>Cryptoencer</h1>

                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br/> sed diam nonummy nibh euismod tincidunt ut laoreet <br/> dolore magna aliquam erat volutpat. Ut wisi enim ad
                </p>
            </div>

            <div className="illustration2">
                <img src={illustration2} alt="illustration2" />
            </div>

            <div className="social-gradient">
                <img src={gradient1} alt="" />
            </div>

            <div className="social-circle">
                <img className='social-circle-img' src={circle} alt="circle" />
                <img className='social-shadow-img' src={shadow} alt="shadow" />

                <div className="social-circle-text">
                        <h3>All social in<br/> your hands</h3>
                </div>
                
                <img className="social-circle-bg-img" src={bg1} alt="bg1" />
                
                <div className="social-circle-icons">
                    <img className='social-circle-facebook-img' src={facebook} alt="facebook" />
                    <img className='social-circle-youtube-img' src={youtube} alt="youtube" />
                    <img className='social-circle-instagram-img' src={instagram} alt="instagram" />
                    <img className='social-circle-telegram-img' src={telegram} alt="telegram" />
                    <img className='social-circle-twitter-img' src={twitter} alt="twitter" />
                    <img className='social-circle-tiktok-img' src={tiktok} alt="tiktok" />
                </div>

            </div>
        </main>
    </div>
  )
}

export default Main