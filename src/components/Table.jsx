import React,{useState, useRef, useEffect} from 'react'
import '../assets/css/Table.css'
import Pagination from '../components/Pagination'
import { Slider } from '@mui/material'
import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
import numeral from 'numeral'
import TableMain from './TableMain'

const Table = () => {
    let str = "22 M";
    let strNew = str.replace(/\s/g, '');
    let strFinal = strNew.toLocaleLowerCase();

    const [data, setData] = useState([])

    const fetchApi = () => {
        return fetch("http://localhost:3001/api/influencer" , {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        console.error(JSON.stringify(error));
    });
    }

    useEffect(() => {
        fetchApi()
        .then((data) => {
        setData(data)
        setDynamicData(data)
    })
    }, [])    

    let [dynamicData, setDynamicData] = useState(data);

    const valueLow = () => {
        const NewData = data.filter((e) => e.volume === "Low" );
        setDynamicData(NewData)
    }

    const valueMedium = () => {
        const NewData = data.filter((e) => e.volume === "Medium" );
        setDynamicData(NewData)
    }

    const valueHigh = () => {
        const NewData = data.filter((e) => e.volume === "High" );
        setDynamicData(NewData)
    }

    const rangeValue1 = useRef();
    const rangeValue2 = useRef();

    const [value, setValue] = useState([8, 72]);
    // social.follower_or_subscriber_count.toLocaleLowerCase().replace(/\s/g, '')
    const handleChange = (newValue) => {
        setValue(newValue.target.value);
        const range1 = newValue.target.value[0] * 1000;
        const range2 = newValue.target.value[1] * 10000;
        console.log(range1, range2)
        const sumArray = []
        data.forEach(inf => {
            const numArr = inf.socials.map(social => numeral(social.follower_or_subscriber_count.toLocaleLowerCase().replace(/\s/g,''))._value )
            console.log(numArr.length, ' before reduce')
            if(numArr.length)sumArray.push(numArr.reduce((a,b)=> a+b ))
        })
        console.log(sumArray)
        const x = data.filter((influencer, i) => sumArray[i] > range1 && sumArray[i] < range2)
        console.log(x)
        setDynamicData(x)
    }

    const rangeFirst = (e) =>{
        console.log(value);
    }

    const rangeSecond = (e) =>{
        console.log(value);
    }
















    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const paginate = (number) => {
        setCurrentPage(number)
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const items = dynamicData.slice(indexOfFirstItem, indexOfLastItem)





    const platform = useRef();
    const platformdropdown = useRef();
    const bottomArrow = useRef();

    const [toggle, setToggle] = useState(false);

    const [check, setCheck] = useState({
            youtube: false,
            twitter: false,
            telegram: false,
            facebook: false,
            instagram: false,
            all: false
    });

    const choose = (e) => {
        let isTrue = check[e]
        if(isTrue){
            setCheck((state) => {
                return {...state , [e]: false}
            })
        }else{
            setCheck((state) => {
                return {...state , [e]: true}
            })
        }
    }

    const valuetext = (value) => {
        return value + '000';
    }

    const openPlatform = () => {
        if (toggle) {
            platformdropdown.current.style.visibility = "visible"
            platformdropdown.current.style.opacity = 1
            bottomArrow.current.style.transform = "rotate(180deg)";
            setToggle(false)
        }else{
            platformdropdown.current.style.visibility = "hidden"
            platformdropdown.current.style.opacity = 0
            bottomArrow.current.style.transform = "rotate(0deg)";
            setToggle(true)
        }
        
    }

    return (
    <section className='wrapper table-wrapper'>
        <div className="section-heading">
            <h3>Our influencers</h3>
        </div>

        <div className="table-tools">
            <div className="table-volume-select">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Volume</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={20}
                    label="Volume"
                    // onChange={handleChange}
                >
                    <MenuItem onClick={valueLow} value={10}>Low</MenuItem>
                    <MenuItem onClick={valueMedium} value={20}>Medium</MenuItem>
                    <MenuItem onClick={valueHigh} value={30}>High</MenuItem>
                </Select>
            </FormControl>
            </div>

            <div ref={platform} className="table-platform-select">

                <div className="table-platform-container">
                    <p onClick={openPlatform} className='platform-text'>Platform</p>

                    <div ref={bottomArrow} onClick={openPlatform}>
                    <svg className='bottom-arrow' width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.83347 8.91676C8.15292 8.91676 7.47236 8.64921 6.95708 8.12403L0.618197 1.66324C0.336252 1.37587 0.336252 0.90023 0.618197 0.612864C0.900141 0.325497 1.36681 0.325497 1.64875 0.612864L7.98764 7.07365C8.45431 7.54929 9.21264 7.54929 9.67931 7.07365L16.0182 0.612864C16.3001 0.325497 16.7668 0.325497 17.0487 0.612864C17.3307 0.90023 17.3307 1.37587 17.0487 1.66324L10.7099 8.12403C10.1946 8.64921 9.51403 8.91676 8.83347 8.91676Z" fill="white"/>
                    </svg>
                    </div>
                </div>

                <div ref={platformdropdown} className="table-platform-dropdown">
                    <div className="platform-dropdown-first">
                        <div>

                            {check['youtube'] ?
                            <svg onClick={() => choose("youtube")} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="13" fill="white"/>
                            <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="#4245D7"/>
                            </svg>
                                
                            :
                            <svg onClick={() => choose("youtube")} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.03"/>
                            <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="white" fill-opacity="0.2"/>
                            </svg> }

                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="15" fill="#FF0000"/>
                                <path d="M24.5635 10.1923C24.3325 9.33333 23.6521 8.65385 22.792 8.42308C21.2388 8 14.9872 8 14.9872 8C14.9872 8 8.73556 8.01282 7.18229 8.4359C6.32221 8.66667 5.64185 9.34615 5.41078 10.2051C5 11.7564 5 15 5 15C5 15 5 18.2436 5.42362 19.8077C5.65469 20.6667 6.33504 21.3462 7.19512 21.5769C8.7484 22 15 22 15 22C15 22 21.2516 22 22.8049 21.5769C23.665 21.3462 24.3453 20.6667 24.5764 19.8077C25 18.2564 25 15 25 15C25 15 24.9872 11.7564 24.5635 10.1923Z" fill="white"/>
                                <path d="M13 18L18 15L13 12V18Z" fill="#FF0000"/>
                            </svg>

                        </div>

                        <div>
                            
                        {check['telegram'] ?
                        <svg onClick={() => choose('telegram')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="13" fill="white"/>
                            <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="#4245D7"/>
                        </svg> 
                                
                            :
                        <svg onClick={() => choose('telegram')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.03"/>
                            <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="white" fill-opacity="0.2"/>
                        </svg>}

                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="url(#paint0_linear_139_710)"/>
<path d="M7.09992 14.5964C11.3949 12.7618 14.2589 11.5523 15.6919 10.968C19.7834 9.2995 20.6335 9.00967 21.1877 9.0001C21.3095 8.998 21.5821 9.02761 21.7586 9.16804C21.9076 9.28661 21.9486 9.44679 21.9683 9.55921C21.9879 9.67163 22.0123 9.92773 21.9929 10.1278C21.7712 12.4118 20.8118 17.9545 20.3237 20.5127C20.1172 21.5951 19.7105 21.958 19.3169 21.9936C18.4613 22.0707 17.8116 21.4392 16.9829 20.9066C15.6862 20.0733 14.9537 19.5545 13.695 18.7413C12.2404 17.8015 13.1834 17.285 14.0124 16.4409C14.2293 16.22 17.999 12.8583 18.0719 12.5533C18.0811 12.5152 18.0895 12.373 18.0034 12.298C17.9172 12.2229 17.7901 12.2486 17.6983 12.269C17.5683 12.2979 15.4968 13.6403 11.4839 16.2961C10.8959 16.6919 10.3633 16.8848 9.88616 16.8747C9.36012 16.8635 8.34822 16.5831 7.59598 16.3433C6.67333 16.0493 5.94002 15.8938 6.00388 15.3944C6.03714 15.1343 6.40248 14.8683 7.09992 14.5964Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_139_710" x1="0.111249" y1="0" x2="0.111249" y2="29.7775" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AABEE"/>
<stop offset="1" stop-color="#229ED9"/>
</linearGradient>
</defs>
                            </svg>

                        </div>

                        <div>
                        {check['facebook'] ?
                            <svg onClick={() => choose("facebook")} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="#4245D7"/>
                            </svg> 
                            :
                            <svg onClick={() => choose("facebook")} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.03"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="white" fill-opacity="0.2"/>
                            </svg>
                        }

                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#1877F2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1482 19.3981L21.8219 15.0874H17.6073V12.29C17.6073 11.1107 18.196 9.96116 20.0838 9.96116H22V6.29126C22 6.29126 20.2609 6 18.5983 6C15.1272 6 12.8584 8.06447 12.8584 11.8019V15.0874H9V19.3981H12.8584V29.8188C13.6321 29.938 14.4251 30 15.2329 30C16.0407 30 16.8336 29.938 17.6073 29.8188V19.3981H21.1482Z" fill="white"/>
                            </svg>
                        </div>
                    </div>

                    <div className="platform-dropdown-second">
                        <div>
                        {check['twitter'] ?
                                <svg onClick={() => choose('twitter')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="#4245D7"/>
                                </svg>
                            :
                                <svg onClick={() => choose('twitter')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.03"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="white" fill-opacity="0.2"/>
                                </svg>     }

                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="15" fill="#1D9BF0"/>
                                <path d="M22.9525 10.9832C22.9647 11.1567 22.9647 11.3303 22.9647 11.5055C22.9647 16.8436 18.8371 23 11.2897 23V22.9968C9.06013 23 6.8769 22.3712 5 21.1857C5.32419 21.2241 5.65001 21.2433 5.97664 21.2441C7.82429 21.2457 9.61913 20.6354 11.0727 19.5114C9.31688 19.4786 7.77717 18.3515 7.23928 16.706C7.85436 16.8228 8.48812 16.7988 9.09181 16.6364C7.17753 16.2556 5.80032 14.5997 5.80032 12.6767C5.80032 12.6591 5.80032 12.6423 5.80032 12.6255C6.37071 12.9382 7.00934 13.1118 7.6626 13.131C5.85964 11.9447 5.30388 9.58325 6.39265 7.73696C8.47593 10.2608 11.5497 11.7951 14.8493 11.9575C14.5186 10.5544 14.9703 9.08408 16.0364 8.09774C17.689 6.56824 20.2882 6.64663 21.8418 8.27293C22.7607 8.09454 23.6415 7.76256 24.4475 7.29219C24.1412 8.22733 23.5001 9.02168 22.6437 9.52645C23.457 9.43206 24.2517 9.21767 25 8.89049C24.4491 9.70324 23.7552 10.4112 22.9525 10.9832Z" fill="white"/>
                                </svg>

                        </div>

                        <div>
                        {check['instagram'] ?
                                <svg onClick={() => choose('instagram')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="#4245D7"/>
                                </svg>
                            :
                                <svg onClick={() => choose('instagram')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.03"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="white" fill-opacity="0.2"/>
                                </svg> }

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="15" fill="url(#paint0_linear_139_760)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C12.2842 5 11.9436 5.01151 10.877 5.06018C9.81263 5.10872 9.08569 5.27779 8.44962 5.52501C7.79203 5.78052 7.23436 6.12246 6.67839 6.67839C6.12246 7.23436 5.78052 7.79203 5.52501 8.44962C5.27779 9.08569 5.10872 9.81263 5.06018 10.877C5.01151 11.9436 5 12.2842 5 15C5 17.7158 5.01151 18.0564 5.06018 19.123C5.10872 20.1874 5.27779 20.9143 5.52501 21.5504C5.78052 22.208 6.12246 22.7656 6.67839 23.3216C7.23436 23.8775 7.79203 24.2195 8.44962 24.475C9.08569 24.7222 9.81263 24.8913 10.877 24.9398C11.9436 24.9885 12.2842 25 15 25C17.7158 25 18.0564 24.9885 19.123 24.9398C20.1874 24.8913 20.9143 24.7222 21.5504 24.475C22.208 24.2195 22.7656 23.8775 23.3216 23.3216C23.8775 22.7656 24.2195 22.208 24.475 21.5504C24.7222 20.9143 24.8913 20.1874 24.9398 19.123C24.9885 18.0564 25 17.7158 25 15C25 12.2842 24.9885 11.9436 24.9398 10.877C24.8913 9.81263 24.7222 9.08569 24.475 8.44962C24.2195 7.79203 23.8775 7.23436 23.3216 6.67839C22.7656 6.12246 22.208 5.78052 21.5504 5.52501C20.9143 5.27779 20.1874 5.10872 19.123 5.06018C18.0564 5.01151 17.7158 5 15 5ZM15 7C17.6056 7 17.9142 7.00995 18.9432 7.0569C19.8946 7.10029 20.4113 7.25926 20.7551 7.39289C21.2106 7.56991 21.5357 7.78137 21.8771 8.12286C22.2186 8.46431 22.4301 8.78938 22.6071 9.24487C22.7407 9.58872 22.8997 10.1054 22.9431 11.0568C22.99 12.0858 23 12.3944 23 15C23 17.6056 22.99 17.9142 22.9431 18.9432C22.8997 19.8946 22.7407 20.4113 22.6071 20.7551C22.4301 21.2106 22.2186 21.5357 21.8771 21.8771C21.5357 22.2186 21.2106 22.4301 20.7551 22.6071C20.4113 22.7407 19.8946 22.8997 18.9432 22.9431C17.9144 22.99 17.6057 23 15 23C12.3943 23 12.0857 22.99 11.0568 22.9431C10.1054 22.8997 9.58872 22.7407 9.24487 22.6071C8.78938 22.4301 8.46431 22.2186 8.12286 21.8771C7.78141 21.5357 7.56991 21.2106 7.39289 20.7551C7.25926 20.4113 7.10029 19.8946 7.0569 18.9432C7.00995 17.9142 7 17.6056 7 15C7 12.3944 7.00995 12.0858 7.0569 11.0568C7.10029 10.1054 7.25926 9.58872 7.39289 9.24487C7.56991 8.78938 7.78137 8.46431 8.12286 8.12286C8.46431 7.78137 8.78938 7.56991 9.24487 7.39289C9.58872 7.25926 10.1054 7.10029 11.0568 7.0569C12.0858 7.00995 12.3944 7 15 7Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 18C13.3431 18 12 16.6569 12 15C12 13.3431 13.3431 12 15 12C16.6569 12 18 13.3431 18 15C18 16.6569 16.6569 18 15 18ZM15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 9.00002C21 9.55231 20.5523 10 20 10C19.4477 10 19 9.55231 19 9.00002C19 8.44773 19.4477 8 20 8C20.5523 8 21 8.44773 21 9.00002Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_139_760" x1="15" y1="45" x2="45" y2="15" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFD522"/>
                        <stop offset="0.497382" stop-color="#F1000B"/>
                        <stop offset="1" stop-color="#B900B3"/>
                        </linearGradient>
                        </defs>
                        </svg>


                        </div>
                        
                        <div>
                        {check['all'] ?
                                <svg onClick={() => choose('all')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="#4245D7"/>
                                </svg>
                            :
                            <svg onClick={() => choose('all')} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="white" fill-opacity="0.03"/>
                                    <path d="M12.5 7C9.4695 7 7 9.4695 7 12.5C7 15.5305 9.4695 18 12.5 18C15.5305 18 18 15.5305 18 12.5C18 9.4695 15.5305 7 12.5 7ZM15.129 11.235L12.0105 14.3535C11.9335 14.4305 11.829 14.4745 11.719 14.4745C11.609 14.4745 11.5045 14.4305 11.4275 14.3535L9.871 12.797C9.7115 12.6375 9.7115 12.3735 9.871 12.214C10.0305 12.0545 10.2945 12.0545 10.454 12.214L11.719 13.479L14.546 10.652C14.7055 10.4925 14.9695 10.4925 15.129 10.652C15.2885 10.8115 15.2885 11.07 15.129 11.235Z" fill="white" fill-opacity="0.2"/>
                            </svg>     }

                            <p>All</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='table-range-text'>
                <p>Range</p>
            </div>

            <div className="table-range">
                <div className="table-range-container">
                    <div className="table-range-first">
                        <input ref={rangeValue1} onChange={rangeFirst} type="phone" value={value[0] + '000'} min={1}/>
                    </div>
                    
                    <p className='table-range-to'>To</p>
                    <div className="table-range-second">
                        <input ref={rangeValue2} onChange={rangeSecond} type="phone" value={value[1] + '0000'} max={99}/>
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

        <TableMain data={items} value1={valueLow} check={check}/>

        <div className="table-pagination">
            <Pagination paginate={paginate} totalItems={dynamicData && dynamicData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} />
        </div>

    </section>
    )
}

export default Table