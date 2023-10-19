
import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link';
import innerbanner from '@/public/images/who-we-are-banner.jpg';
import prod_styl from './Product.module.css';
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Products',
    description: 'we are ready to create marvels design with your satisfaction',
}

function Product() {
    return (
        <React.Fragment>
            <section className={prod_styl.banner_section} style={{ backgroundImage: `url(${innerbanner.src})`, backgroundSize: "cover" }}>
                <div className={prod_styl.container} >
                    <p>Our <span>Products</span>
                    </p>
                </div>
            </section>

            <section className={prod_styl.product_details}>
                <div className={prod_styl.container} >
                    <div className={prod_styl.offer_holder}>  <Image src="/images/prd/offers.png" alt="logo" fill /></div>
                    <div className={prod_styl.just_arriv}><h3>Just Arrived </h3> <p>The newest fragrance dropped to entice the senses</p></div>
                    <ul className={prod_styl.product_list}>
                        <li>
                            <div className={prod_styl.img_holder}>  <Image src="/images/prd/product1.png" alt="logo" fill /></div>
                            <h2>Ardentre</h2>
                            <p>Price: $19.99</p>
                            <Link href="/products/1" className={prod_styl.about_more_btn}><span>More info</span></Link>
                        </li>
                        <li>
                            <div className={prod_styl.img_holder}>  <Image src="/images/prd/product2.png" alt="logo" fill /></div>
                            <h2>Elysiumre</h2>
                            <p>Price: $19.99</p>
                            <Link href="/products/2" className={prod_styl.about_more_btn}><span>More info</span></Link>
                        </li>
                        <li>
                            <div className={prod_styl.img_holder}>  <Image src="/images/prd/product3.png" alt="logo" fill /></div>
                            <h2>Floris</h2>
                            <p>Price: $19.99</p>
                            <Link href="/products/3" className={prod_styl.about_more_btn}><span>More info</span></Link>
                        </li>
                        <li>
                            <div className={prod_styl.img_holder}>  <Image src="/images/prd/product4.png" alt="logo" fill /></div>
                            <h2>Floris</h2>
                            <p>Price: $19.99</p>
                            <Link href="/products/3" className={prod_styl.about_more_btn}><span>More info</span></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Product