import React from 'react'
import '../assets/css/Partner.css'
import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/tg.svg'
import youtube from '../assets/img/youtube.svg'
import caesar from '../assets/img/caesar.png'

function Partner() {
  return (
    <section className='wrapper partner-wrapper'>

        <div className="partner-heading">
            <h3>TOP PARTNERS 😎</h3>
        </div>

        <div className="partner-container">

            <div className="partner-first">

                <div className="partner-first-images">
                    <img className='parnter-first-icon' src={telegram} alt="telegram" />
                    <img className='parnter-first-img' src={caesar} alt="caesar" />
                </div>

                <div className="partner-first-desc">
                    <h4>CaesarsCalls</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer<br/> adipiscing elit, sed diam nonummy nibh<br/> euismod tincidunt ut laoreet </p>
                </div>

            </div>

            <div className="partner-second">
                
            </div>

            <div className="partner-third">

            </div>

        </div>

    </section>
  )
}

export default Partner