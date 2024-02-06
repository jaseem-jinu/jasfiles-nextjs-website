"use client"
//import React from 'react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/images/logo.png'

const isServer = typeof window === 'undefined'
const AOS = !isServer ? require('aos') : null
import "aos/dist/aos.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuButtonHandler = () => {
        // let menuIcon = document.getElementsByclassName('menu-icon');
        let menuIcon = document.querySelector(".menu-icon");
        menuIcon?.classList.remove("open");
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("menu-opn");
    }


    useEffect(() => {
        AOS.init({
            easing: 'ease-in-out-sine',
            duration: 700,
            once: true
        });

        if (isOpen) {
            document.body.classList.add('menu-opn');
        } else {
            document.body.classList.remove('menu-opn');
        }

    });

    return (
        <React.Fragment>

            <header className="header">
                <div className="container">

                    <div className="logo">
                        <Link href={`/`} onClick={menuButtonHandler}>
                            <Image src={logo} className="App-logo" alt="logo" width="100" height="100" />
                        </Link>
                    </div>

                    <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu} >
                        <div className="menu-bar">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </header>

            <div className="main-nav" onClick={() => document.body.classList.remove('menu-opn')}>
                <div className="container">
                    <nav className="main-navigation">
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/products">Services</Link></li>
                            <li><Link href="#">Portfolio</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="nav-bottom-content clearfix">
                        <div className="address-nav">
                            <h3>Contact Us</h3>
                            <p>Ramacham mannil (H) <br />
                                Perumanna,vellayicode<br />
                                Kozhikodu, kerala
                            </p>
                        </div>
                        <div className="address-nav-second">
                            <h3>Say Hello</h3>
                            <Link href="#">9562034255</Link>
                            <Link href="#">info@jas-design.com</Link>

                        </div>
                        <div className="social-nav">
                            <h3>Get Social</h3>
                            <ul>
                                <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header

