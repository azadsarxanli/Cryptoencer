import React from 'react'
import '../assets/css/Main.css'
import illustration1 from '../assets/img/illustration-1.png'
import illustration2 from '../assets/img/illustration-2.png'
import gradient1 from '../assets/img/gradient1.svg'
import circle from '../assets/img/circle.svg'
import facebook from '../assets/img/fb.png'
import instagram from '../assets/img/ig.png'
import tiktok from '../assets/img/tiktok.png'
import twitter from '../assets/img/twitter.png'
import telegram from '../assets/img/tg.png'
import youtube from '../assets/img/ytb.png'
import bg1 from '../assets/img/Titik-titik.png'
import shadow from '../assets/img/lightshadow.png'


const Main = () => {
  return (
    <div className='wrapper wrapper-main'>
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
                    <img className='social-circle-facebook-img social-circle-icon' src={facebook} alt="facebook" />
                    <img className='social-circle-youtube-img social-circle-icon pulse' src={youtube} alt="youtube" />
                    <img className='social-circle-instagram-img social-circle-icon elastic-spin' src={instagram} alt="instagram" />
                    <img className='social-circle-telegram-img social-circle-icon gelatine' src={telegram} alt="telegram" />
                    <img className='social-circle-twitter-img social-circle-icon hithere' src={twitter} alt="twitter" />
                    <img className='social-circle-tiktok-img social-circle-icon bounce2' src={tiktok} alt="tiktok" />
                </div>

            </div>
        </main>
    </div>
  )
}

export default Main