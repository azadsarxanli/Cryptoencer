import React from 'react'
import '../assets/css/Book.css'

function Book() {
  return (
    <div className='wrapper book'>
        <div className="section-heading">
            <h3>BOOK A PROMO</h3>
        </div>

        <div className="book-button">
            <svg width="241" height="70" viewBox="0 0 241 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="239" height="68" rx="4" fill="#585BD6" stroke="white" stroke-width="2"/>
            </svg>

            <svg width="241" height="70" viewBox="0 0 241 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="241" height="70" rx="5" fill="white"/>
            </svg>

            <p>Send Message</p>
        </div>
    </div>
  )
}

export default Book