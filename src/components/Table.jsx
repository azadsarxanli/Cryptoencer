import React,{useState} from 'react'
import '../assets/css/Table.css'
import { Slider } from '@mui/material'
import { Pagination } from '@mui/material'
import bg1 from '../assets/img/table/1.png'
import bg2 from '../assets/img/table/2.png'
import bg3 from '../assets/img/table/3.png'
import bg4 from '../assets/img/table/4.png'
import bg5 from '../assets/img/table/5.png'
import bg6 from '../assets/img/table/6.png'

function Table() {

    const [value, setValue] = useState([8, 72]);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const valuetext = (value) => {
        return `${value}°C`;
    }

    return (
    <section className='wrapper table-wrapper'>
        <div className="section-heading">
            <h3>Our influencers</h3>
        </div>

        <div className="table-tools">
            <div className="table-volume-select">
                    <p>Volume</p>
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.83335 9.33341C8.1528 9.33341 7.47224 9.07091 6.95696 8.55563L0.618075 2.21674C0.33613 1.9348 0.33613 1.46813 0.618075 1.18619C0.900019 0.904245 1.36669 0.904245 1.64863 1.18619L7.98752 7.52508C8.45419 7.99174 9.21252 7.99174 9.67919 7.52508L16.0181 1.18619C16.3 0.904245 16.7667 0.904245 17.0486 1.18619C17.3306 1.46813 17.3306 1.9348 17.0486 2.21674L10.7097 8.55563C10.1945 9.07091 9.51391 9.33341 8.83335 9.33341Z" fill="white"/>
                    </svg>
            </div>

            <div className="table-platform-select">
                <svg width="30" height="30" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="15" cy="15.5" rx="15" ry="15.2885" fill="#FF0000"/>
                    <path d="M24.5634 10.6871C24.3324 9.82726 23.652 9.14707 22.7919 8.91607C21.2386 8.49255 14.987 8.49255 14.987 8.49255C14.987 8.49255 8.73544 8.50539 7.18216 8.9289C6.32209 9.15991 5.64173 9.84009 5.41066 10.7C4.99988 12.2528 4.99988 15.4998 4.99988 15.4998C4.99988 15.4998 4.99988 18.7467 5.4235 20.3124C5.65456 21.1723 6.33492 21.8525 7.195 22.0835C8.74827 22.507 14.9999 22.507 14.9999 22.507C14.9999 22.507 21.2515 22.507 22.8048 22.0835C23.6648 21.8525 24.3452 21.1723 24.5763 20.3124C24.9999 18.7595 24.9999 15.4998 24.9999 15.4998C24.9999 15.4998 24.987 12.2528 24.5634 10.6871Z" fill="white"/>
                    <path d="M12.9974 18.5033L18.1836 15.5002L12.9974 12.4971V18.5033Z" fill="#FF0000"/>
                </svg>

                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="#1877F2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8384 19.3355L21.5034 14.9994H17.343V12.1855C17.343 10.9992 17.9242 9.84293 19.7876 9.84293H21.6792V6.15138C21.6792 6.15138 19.9625 5.8584 18.3213 5.8584C14.8948 5.8584 12.6553 7.93504 12.6553 11.6946V14.9994H8.84644V19.3355H12.6553V29.8177C13.419 29.9376 14.2018 30 14.9991 30C15.7965 30 16.5793 29.9376 17.343 29.8177V19.3355H20.8384Z" fill="white"/>
                </svg>

                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="15" fill="url(#paint0_linear_275_784)"/>
                    <path d="M6.7421 15.0252C11.1042 13.173 14.0129 11.9519 15.4683 11.3619C19.6237 9.67738 20.4872 9.38477 21.05 9.3751C21.1738 9.37298 21.4505 9.40288 21.6298 9.54465C21.7812 9.66437 21.8228 9.82609 21.8428 9.93959C21.8627 10.0531 21.8875 10.3117 21.8678 10.5137C21.6426 12.8197 20.6682 18.4156 20.1725 20.9984C19.9628 22.0912 19.5498 22.4576 19.1499 22.4935C18.281 22.5714 17.6212 21.9338 16.7795 21.3961C15.4626 20.5548 14.7186 20.031 13.4403 19.21C11.9629 18.2612 12.9206 17.7397 13.7626 16.8874C13.9829 16.6644 17.8115 13.2704 17.8856 12.9625C17.8948 12.924 17.9034 12.7805 17.8159 12.7047C17.7284 12.6289 17.5993 12.6548 17.5061 12.6754C17.374 12.7046 15.2702 14.0599 11.1946 16.7412C10.5974 17.1409 10.0565 17.3356 9.57188 17.3254C9.03762 17.3141 8.00991 17.031 7.24592 16.7889C6.30885 16.4921 5.56408 16.3351 5.62894 15.8309C5.66272 15.5683 6.03377 15.2998 6.7421 15.0252Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_275_784" x1="0.111249" y1="0" x2="0.111249" y2="29.7775" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2AABEE"/>
                    <stop offset="1" stop-color="#229ED9"/>
                    </linearGradient>
                    </defs>
                </svg>

                <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.83347 8.91676C8.15292 8.91676 7.47236 8.64921 6.95708 8.12403L0.618197 1.66324C0.336252 1.37587 0.336252 0.90023 0.618197 0.612864C0.900141 0.325497 1.36681 0.325497 1.64875 0.612864L7.98764 7.07365C8.45431 7.54929 9.21264 7.54929 9.67931 7.07365L16.0182 0.612864C16.3001 0.325497 16.7668 0.325497 17.0487 0.612864C17.3307 0.90023 17.3307 1.37587 17.0487 1.66324L10.7099 8.12403C10.1946 8.64921 9.51403 8.91676 8.83347 8.91676Z" fill="white"/>
                </svg>

            </div>

            <div className='table-range-text'>
                <p>Range</p>
            </div>

            <div className="table-range">
                <div className="table-range-container">
                    <div className="table-range-first">
                        <input type="phone" defaultValue="8000"/>
                    </div>
                    
                    <p className='table-range-to'>To</p>

                    <div className="table-range-second">
                        <input type="phone" defaultValue="720000"/>
                    </div>
                </div>

                <div className="table-range-mui">
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
                </div>
            </div>
        </div>

        <div className="table-main">
            <img className="table-main-bg-1" src={bg1} alt="" />
            <img className="table-main-bg-2" src={bg2} alt="" />
            <img className="table-main-bg-3" src={bg3} alt="" />
            <img className="table-main-bg-4" src={bg4} alt="" />
            <img className="table-main-bg-5" src={bg5} alt="" />
            <img className="table-main-bg-6" src={bg6} alt="" />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Platforms</th>
                        <th>Volume</th>
                        <th>Requirements</th>
                        <th>Audit</th>
                    </tr>
                </thead>

                <tbody>
                    
                </tbody>
            </table>

            <div className="table-pagination">
                <Pagination count={10} color="primary" />
            </div>
        </div>

    </section>
  )
}

export default Table