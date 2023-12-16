import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

const Navitems = () => {
    const [MenuToggle, setMenuToggle]= useState(false);
    const [socialToggle, setsocialToggle] = useState(false);
    const [Headerfixed,setHeaderfixed] = useState(false);

    //add eventlistner
    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setHeaderfixed(true);
        }else{
            setHeaderfixed(false)
        }
    })
  return (
    <header className={'header-sction style-4 ${Headerfixed ? "header-fixed fadeInUp" : ""}'}>
        <div className={'header-top d-md-none ${socialToggle ? "open" : ""}'}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to='/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>

        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-search-acte">

                        <div className="logo">
                            <Link to={"/"}>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="menu-area">
                        <div className="menu">
                            <ul className={'lab-ul {MenuToggle $ "active" : ""}'}>
                                <li>
                                    <Link to="/">Home</Link>
                                    <Link to="/shop">Shop</Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navitems
