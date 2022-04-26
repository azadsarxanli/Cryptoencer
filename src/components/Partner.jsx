import React from 'react'
import '../assets/css/Partner.css'
import twitter from '../assets/img/twitter.png'
import telegram from '../assets/img/tg.png'
import youtube from '../assets/img/ytb.png'
import caesar from '../assets/img/caesar.png'
import elliot from '../assets/img/elliot.png'
import travlado from '../assets/img/travlado.png'
import lightshadow from '../assets/img/lightshadow.png'

const Partner = () => {
  return (
    <section className='wrapper partner-wrapper'>

        <div className="section-heading">
            <h3>TOP PARTNERS</h3>
        </div>

        <div className='partner-first-shadow'>
            <img src={lightshadow} alt="" />
        </div>

        <div className="partner-container">

            <div className="partner-first">

                <div className="partner-first-images">
                    <img className='parnter-first-icon' src={telegram} alt="telegram" />
                    <img className='parnter-first-img' src={caesar} alt="caesar" />
                    <svg className='partner-first-bg-circle' width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="105" cy="105" r="20.8" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="34.6667" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="48.5333" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="62.4" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="76.2667" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="90.1333" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="104" stroke="white" stroke-width="2"/>
                    </svg>


                </div>

                <div className="partner-first-desc">
                    <h4>CaesarsCalls</h4>
                    {window.innerWidth > 1024 
                    ?
                    <p>Lorem ipsum dolor sit amet, consectetuer<br/> adipiscing elit, sed diam nonummy nibh<br/> euismod tincidunt ut laoreet </p>
                    :
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
                    }
                </div>

            </div>

            <div className="partner-second">

                <div className="partner-second-images">
                    <img className='parnter-second-icon' src={youtube} alt="telegram" />
                    <img className='parnter-second-img' src={elliot} alt="caesar" />
                    <svg className='partner-second-bg-circle' width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="105" cy="105" r="20.8" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="34.6667" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="48.5333" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="62.4" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="76.2667" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="90.1333" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="104" stroke="white" stroke-width="2"/>
                    </svg>
                </div>

                <div className="partner-second-desc">
                    <h4>EllioTrades Crypto </h4>
                    {window.innerWidth > 1024 
                    ?
                    <p>Lorem ipsum dolor sit amet, consectetuer<br/> adipiscing elit, sed diam nonummy nibh<br/> euismod tincidunt ut laoreet </p>
                    :
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
                    }
                </div>

            </div>

            <div className="partner-third">

                <div className="partner-third-images">
                    <img className='parnter-third-icon' src={twitter} alt="telegram" />
                    <img className='parnter-third-img' src={travlado} alt="caesar" />
                    <svg className='partner-third-bg-circle' width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="105" cy="105" r="20.8" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="34.6667" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="48.5333" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="62.4" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="76.2667" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="90.1333" stroke="white" stroke-width="2"/>
                        <circle cx="105" cy="105" r="104" stroke="white" stroke-width="2"/>
                    </svg>


                </div>

                <div className="partner-third-desc">
                    <h4>Travladd Crypto</h4>
                    {window.innerWidth > 1024 
                    ?
                    <p>Lorem ipsum dolor sit amet, consectetuer<br/> adipiscing elit, sed diam nonummy nibh<br/> euismod tincidunt ut laoreet </p>
                    :
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
                    }
                </div>

            </div>

        </div>

        <div className="partner-background-img">
        </div>

    </section>
  )
}

export default Partner