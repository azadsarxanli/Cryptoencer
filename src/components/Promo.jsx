import React from 'react'
import '../assets/css/Promo.css'
import promobg from '../assets/img/promo.png'
import promobg2 from '../assets/img/promo2png.png'

const Promo = () => {
  return (
    <section className='wrapper promo-wrapper'>
      <div className="section-heading">
        <h3>BOOK A PROMO</h3>
      </div>

      <div className="promo-container">
        <div className="promo-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lectus duis eleifend porta. Porttitor etiam cras sit eu. Ornare amet, morbi vulputate lorem consectetur pellentesque. Duis faucibus viverra pellentesque malesuada at 
          </p>          
        </div>

        <div className="promo-img">
          <img src={promobg} alt="" />
          <img className='promo-absolute-img' src={promobg2} alt="" />
        </div>
      </div>

      <div className="promo-button">
            <svg width="241" height="70" viewBox="0 0 241 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="239" height="68" rx="4" fill="#585BD6" stroke="white" stroke-width="2"/>
            </svg>

            <svg width="241" height="70" viewBox="0 0 241 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="241" height="70" rx="5" fill="white"/>
            </svg>

            <p>Send Message</p>
      </div>
    </section>
  )
}

export default Promo