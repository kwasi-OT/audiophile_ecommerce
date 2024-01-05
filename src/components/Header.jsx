// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerContainer'>
                <TiThMenu/>
                <h1 className='logoText'>audiophile</h1>
                <ul className='menuList'>
                    <li><Link className='link'>Home</Link></li>
                    <li><Link className='link'>Headphones</Link></li>
                    <li><Link className='link'>Speakers</Link></li>
                    <li><Link className='link'>Earphones</Link></li>
                </ul>
                <AiOutlineShoppingCart/>
            </div>
        </div>
    )
}

export default Header
