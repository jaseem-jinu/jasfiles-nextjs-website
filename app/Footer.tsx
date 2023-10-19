"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import logo from '../public/images/flogo.png'
import Link from 'next/link';
//import jQuery from 'jquery';
import Script from 'next/script'


const Footer = () => {

    useEffect(() => {


        // // Menu Toggle
        // jQuery('.menu-icon').on('click', function () {
        //     jQuery(this).toggleClass('open');
        //     jQuery("body").toggleClass("menu-opn");
        // });

        // jQuery('.main-navigation ul li').on('click', function () {
        //     jQuery('.menu-icon').toggleClass('open');
        //     jQuery("body").toggleClass("menu-opn");
        // });



        const body = document.body;
        // const lottiePlayer = document.querySelector("lottie-player");
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove(scrollUp);
                return;
            }

            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
                // lottiePlayer.play();
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains(scrollDown)
            ) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
                // lottiePlayer.stop();
            }
            lastScroll = currentScroll;
        });





    }, []);

    return (
        <React.Fragment>

            {/* <Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2924872.js" /> */}

            <section className="footer clearfix">
                <div className="container">
                    <div className="footer-top-section">

                        <div className="footer-logo">
                            <Link href={'/'}>
                                <Image src={logo} className="App-logo" alt="logo" width="100" height="100" />
                            </Link>
                        </div>

                        <div className="footer-nav">
                            <h3>Quick Links</h3>

                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/products">Our Products</Link></li>
                                <li><Link href="#">Blogs</Link></li>
                                <li><Link href="#">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-nav">
                            <h3>Say Hello</h3>
                            <ul>
                                <li><Link href="#">9562034255</Link></li>
                                <li><Link href="#">info@jas-design.com</Link></li>
                            </ul>
                        </div>


                        <div className="footer-nav">
                            <h3>Contact Us</h3>
                            <p>Ramacham mannil (H) <br />
                                Perumanna,vellayicode<br />
                                Kozhikodu, kerala
                            </p>
                        </div>

                        <div className="footer-social">
                            <h3>Social Media</h3>

                            <ul>
                                <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                <li><Link href="#"><span className="icon-facebook"></span></Link></li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div className="footer-bottom-section">
                    <div className="container">
                        <div className="footer-bottom-inner">
                            <div className="footer-rights">© 2022 JAS-Design. All Rights Reserved.</div>

                            <ul>
                                <li><Link href="#">Terms</Link></li>
                                <li><Link href="#">Privacy  </Link></li>
                                <li><Link href="#">Cookies</Link></li>

                            </ul>

                        </div>
                    </div>
                </div>
            </section>
            <style global jsx>{`
     .banner_section{
      background-color: #12143a;
     }
     @media only screen and (max-width: 767px) {
      .banner_section h4{
        max-width: calc(100% - 30px) !important;
      }
     }
    `}</style>
        </React.Fragment>
    );
}

export default Footer;
