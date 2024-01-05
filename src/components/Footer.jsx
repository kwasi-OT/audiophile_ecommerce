// eslint-disable-next-line no-unused-vars
import React from 'react'
import logosvg from '../../resources/assets/shared/desktop/logo.svg';
import socialIcons from '../../resources/assets/shared/Group30.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logoNmenu'>
                <div className='footerLogo'><img src={logosvg} alt='logo'/></div>
                <div className='footerMenu'>
                    <ul className='menuList'>
                        <li><Link className='link'>Home</Link></li>
                        <li><Link className='link'>Headphones</Link></li>
                        <li><Link className='link'>Speakers</Link></li>
                        <li><Link className='link'>Earphones</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='footerText'>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
                    <p>Copyright 2021. All Rights Reserved</p>
                </div>
                <div>
                    <img src={socialIcons} alt='social media icons'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
