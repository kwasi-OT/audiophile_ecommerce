// eslint-disable-next-line no-unused-vars
import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
    return (
        <div className='header'>
            <div className='headerContainer'>
                <TiThMenu/>
                <h1 className='logoText'>audiophile</h1>
                <ul className='menuList'>
                    <li>Home</li>
                    <li>Headphones</li>
                    <li>Speakers</li>
                    <li>Earphones</li>
                </ul>
                <AiOutlineShoppingCart/>
            </div>
        </div>
    )
}

export default Header
