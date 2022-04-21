import React from 'react'
import '../assets/css/Promo.css'
import promobg from '../assets/img/promo.png'
import promobg2 from '../assets/img/promo2png.png'

function Promo() {
  return (
    <section className='wrapper promo-wrapper'>
      <div className="promo-heading">
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
    </section>
  )
}

export default Promo