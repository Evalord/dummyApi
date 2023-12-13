import userProfile from '../assets/userProfile.png'
import cartIcon from '../assets/cartIcon.jpg'
import search from '../assets/search.png'
import logo from '../assets/logo.jpg'
import menuIcon from '../assets/menuIcon.jpg'
import { useState } from 'react';

const Navbar = () => {

    return (

        <section>
            <div className="section1">
                <img src={logo} className="logo" />
                <div className="navigation">
                    <img src={menuIcon} className="toggle" />
                    <a className="cgr" >Categories</a>
                </div>
                <div>

                    <a className="submenu">Products</a>
                    <a className="submenu">Accessories</a>
                    <a className="submenu">Service</a>
                    <a className="submenu">Office</a>
                    <a className="submenu"> Sign In | Sign Out</a>
                </div>
            </div>
            <div className="section2">
               <div className='search'>
                <input type="text" placeholder="search" className="txtsrch" />
                <button type="button" className="btnsrch"onClick={() => {product.id}}>search</button>
                </div> 
                
                <nav>
                    <a className="menuitem" >Home</a>
                    <a className="menuitem">Shopping Cart</a>
                    <a className="menuitem">My Account</a>
                    <a className="menuitem">items(s)</a>
                </nav>
            </div>
        </section>

    )

}
export default Navbar;