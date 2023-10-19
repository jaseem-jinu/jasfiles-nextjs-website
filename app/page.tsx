import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import banner from '../public/images/banner.png';
import Link from 'next/link';



export default function Home() {
  return (
    <React.Fragment>
      <section className="banner-main" style={{ backgroundImage: `url(${banner.src})` }}>
        <div className="container">
          <div className="banner-text">
            <h3>Have no fear of perfection</h3>
            <h1>you’ll never reach it.</h1>
            <p>Design is intelligence made visible.</p>
            <Link href="/about" className="about-more-btn"><span>About Us</span></Link>

          </div>
        </div>
      </section>

      <section className="hme-clients-section clearfix">
        <div className="container">
          <div className="hme-clients-heading" data-aos="fade-up">
            <h2 className="main-title">Our <span>Clients</span></h2>
            <p>We help our clients unlock growth by focusing on four key solution areas:</p>
          </div>
          <div className="hme-clients-list">
            <ul>
              <li data-aos="fade-up">
                <Image src="/images/client1.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client2.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client3.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client4.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client5.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client6.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client7.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client8.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client9.png" width="150" height="60" alt="img" />
              </li>
              <li data-aos="fade-up">
                <Image src="/images/client10.png" width="150" height="60" alt="img" />
              </li>
            </ul>
          </div>
          <div className="client-btn-container">
            <Link href="#" className="client-btn" data-aos="fade-up"><span>view all clients</span></Link>
          </div>
        </div>
      </section>

      <section className="hme-main-contact-section clearfix">
        <div className="container">
          <div className="hme-contact-left">
            <h2 className="main-title"><span>Contact</span> Us</h2>
            <h4>Ready to start your Project?</h4>
            <p>we are ready to create marvels design with your satisfaction</p>

            <div className="hme-contact-form clearfix" data-aos="fade-up">
              <form method="post" action="">
                <input type="text" className="main-text-box" placeholder="Full Name" />
                <input type="text" className="main-text-box" placeholder="Email" />
                <input type="text" className="main-text-box" placeholder="Phone Number" />
                <textarea placeholder="Your Message" className="main-textarea-box"></textarea>
                <input type="submit" value="send" className="contact-btn" />
              </form>
            </div>


          </div>

          <div className="hme-contact-right">
            <Image src="/images/hme-contact2.png" width="735" height="850" alt="contact" />
          </div>

        </div>
      </section>

    </React.Fragment>

  )
}
