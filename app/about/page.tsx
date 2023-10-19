
import type { Metadata } from 'next'
import React from 'react';
import Image from 'next/image';
import innerbanner from '@/public/images/who-we-are-banner.jpg';
import styles from './About.module.css';

export const metadata: Metadata = {
    title: 'About us',
    description: 'we are ready to create marvels design with your satisfaction',
}

function About() {
    return (
        <React.Fragment>

            <section className={styles.banner_section} style={{ backgroundImage: `url(${innerbanner.src})`, backgroundSize: "cover" }}>
                <div className={styles.container} >
                    <p>Who we <span>are</span>
                    </p>
                </div>
            </section>

            <section className={styles.banner_section2}>
                <div className={styles.banner_section2_content}>
                    <h3>Hi, <span>We are Onething.</span>
                        Yes it’s one word, not a typo.</h3>
                    <p>It’s not who we are, it’s what we do, everyday</p>
                </div>
                <div className={styles.about_list}>
                    <div className={styles.about_list__item} data-aos="zoom-in">
                        <h2>Learn and Unlearn</h2>
                        <p>There is no one solution that fits all. We keep ourselves updated with new trends and technologies, and believe in moving at a fast pace.</p>
                    </div>
                    <div className={styles.about_list__item} data-aos="zoom-in">
                        <h2>Disciplined</h2>
                        <p>Our designers are creative souls and are known to disrupt through innovation. Yet we value every second and make sure that it counts.</p>

                    </div>
                    <div className={styles.about_list__item} data-aos="zoom-in">
                        <h2>Result Oriented</h2>
                        <p>We dont rush, we think through every aspect and every action and make it count.</p>

                    </div>
                    <div className={styles.about_list__item} data-aos="zoom-in">
                        <h2>We Adapt</h2>
                        <p>We play many roles from that of a researcher to being a product owner. Our designers identify the needs of industry to deliver the best.</p>

                    </div>
                </div>

            </section>

            <section className={styles.dark_blue_section}>
                <div className={styles.container}>
                    <div className={styles.content_block}>
                        <h2>Rooted in legacy.<br />
                            Driven by data.<br />
                            <span>Designed for real life.</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.enim ad minim veniam ...</p>
                    </div>
                    <div className={styles.numbers_figures}>
                        <h3>Numbers & Figures About <span>NUOX</span></h3>

                        <div className={styles.counter_list}>
                            <div className={styles.counter_list_item}>  <h1>counter_list-member</h1>
                                <span className="plus-number"><b className="counter">70</b>+</span>
                                <h4 className="counter-text">MEMBERS AND GROWING</h4>
                                <span className="plus-mode first"></span>
                            </div>
                            <div className={styles.counter_list_item}> <h1>counter_list-year</h1>
                                <span className="plus-number"><b className="counter">12</b>+</span>
                                <h4 className="counter-text">YEARS</h4>
                                <span className="plus-mode second"></span>
                            </div>
                            <div className={styles.counter_list_item}> <h1>counter_list-application</h1>
                                <span className="plus-number"><b className="counter">200</b>+</span>
                                <h4 className="counter-text">APPLICATIONS</h4>
                                <span className="plus-mode third"></span>
                            </div>
                            <div className={styles.counter_list_item}> <h1>counter_list-serving</h1>
                                <span className="plus-number"><b className="counter">8</b>+</span>
                                <h4 className="counter-text">COUNTRIES SERVING</h4>
                                <span className="plus-mode second"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default About