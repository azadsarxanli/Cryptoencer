import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/TableMain.css'
import bg1 from '../assets/img/table/1.png'
import bg2 from '../assets/img/table/2.png'
import bg3 from '../assets/img/table/3.png'
import bg4 from '../assets/img/table/4.png'
import bg5 from '../assets/img/table/5.png'
import bg6 from '../assets/img/table/6.png'

import { Fragment } from 'react'

const TableMain = (props) => {

    // console.log(props.data[0].socials[0].link);

return (
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
                    {props.data && props.data.map((e) => {
                        return(
                            <tr>
                                <td>
                                    <div className='table-avatar'>
                                        <img src="https://pbs.twimg.com/profile_images/1476609104302985221/cWNYM8Ui_400x400.jpg" alt="" />
                                    </div>
                                    <p>{e.name}</p>
                                </td>

                                <td>
                                    <div className='table-socials-container'>
                                        {e.socials[0] &&
                                            <div>
                                                <a href={`${e.socials[0].link}`} target="_blank" rel="noopener noreferrer">
                                                    <img src={`/table/${e.socials[0].platform}.png`} alt="" />
                                                </a>
                                                <p>{e.socials[0].follower_or_subscriber_count}</p>
                                            </div>
                                        }
                                        {e.socials[1] &&
                                        <div>
                                            <a href={`${e.socials[1].link}`} target="_blank" rel="noopener noreferrer">
                                                <img src={`/table/${e.socials[1].platform}.png`} alt="" />
                                            </a>
                                            <p>{e.socials[1].follower_or_subscriber_count}</p>
                                        </div>
                                        }
                                        {e.socials[2] &&
                                        <div>
                                            <a href={`${e.socials[2].link}`} target="_blank" rel="noopener noreferrer">
                                                <img src={`/table/${e.socials[2].platform}.png`} alt="" />
                                            </a>
                                            <p>{e.socials[2].follower_or_subscriber_count}</p>
                                        </div>
                                        }
                                        {e.socials[3] &&
                                        <div>
                                            <a href={`${e.socials[3].link}`} target="_blank" rel="noopener noreferrer">
                                            <img src={`/table/${e.socials[3].platform}.png`} alt="" />
                                            </a>
                                            <p>{e.socials[3].follower_or_subscriber_count}</p>
                                        </div>
                                        }
                                        {e.socials[4] &&
                                        <div>
                                            <a href={`${e.socials[4].link}`} target="_blank" rel="noopener noreferrer">
                                            <img src={`/table/${e.socials[4].platform}.png`} alt="" />
                                            </a>
                                            <p>{e.socials[4].follower_or_subscriber_count}</p>
                                        </div>
                                        }
                                    </div>
                                </td>

                                <td>{e.volume && e.volume}</td>
                                <td>{e.requirements}</td>
                                <td>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 10.19H18.11C15.74 10.19 13.81 8.26 13.81 5.89V3C13.81 2.45 13.36 2 12.81 2H8.57C5.49 2 3 4 3 7.57V16.43C3 20 5.49 22 8.57 22H16.43C19.51 22 22 20 22 16.43V11.19C22 10.64 21.55 10.19 21 10.19ZM12.78 15.78L10.78 17.78C10.71 17.85 10.62 17.91 10.53 17.94C10.44 17.98 10.35 18 10.25 18C10.15 18 10.06 17.98 9.97 17.94C9.89 17.91 9.81 17.85 9.75 17.79C9.74 17.78 9.73 17.78 9.73 17.77L7.73 15.77C7.44 15.48 7.44 15 7.73 14.71C8.02 14.42 8.5 14.42 8.79 14.71L9.5 15.44V11.25C9.5 10.84 9.84 10.5 10.25 10.5C10.66 10.5 11 10.84 11 11.25V15.44L11.72 14.72C12.01 14.43 12.49 14.43 12.78 14.72C13.07 15.01 13.07 15.49 12.78 15.78Z" fill="white"/>
                                        <path d="M17.8296 8.98971C18.8071 9 20.1653 9 21.328 9C21.9145 9 22.2232 8.31079 21.8116 7.89932C20.3299 6.40773 17.6753 3.72289 16.1524 2.20044C15.7306 1.77869 15 2.06672 15 2.65306V6.24315C15 7.74501 16.2759 8.98971 17.8296 8.98971Z" fill="white"/>
                                    </svg>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
)
}

export default TableMain