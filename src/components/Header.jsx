// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import logosvg from '../../resources/assets/shared/desktop/logo.svg';
import cartsvg from '../../resources/assets/shared/desktop/icon-cart.svg';
import mobilemenu from '../../resources/assets/shared/tablet/icon-hamburger.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerContainer'>
                <Link><img src={mobilemenu} alt='mobile menu icon'/></Link>
                <Link><img src={logosvg} alt='logo'/></Link>
                <ul className='menuList'>
                    <li><Link className='link'>Home</Link></li>
                    <li><Link className='link'>Headphones</Link></li>
                    <li><Link className='link'>Speakers</Link></li>
                    <li><Link className='link'>Earphones</Link></li>
                </ul>
                <Link><img src={cartsvg} alt='cart icon'/></Link>
            </div>
        </div>
    )
}

export default Header
