import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import innerbanner from '@/public/images/who-we-are-banner.jpg';
import details_styl from './Product-details.module.css';
import Image from 'next/image';
import Tab from './tab';

export const metadata: Metadata = {
    title: 'Products details',
    description: 'we are ready to create marvels design with your satisfaction',
}

function ProductDetails() {
    return (
        <React.Fragment>
            <section className={details_styl.banner_section} style={{ backgroundImage: `url(${innerbanner.src})`, backgroundSize: "cover" }}>
                <div className={details_styl.container} >
                    <p>Product <span>Details</span>
                    </p>
                </div>
            </section>
            <section className={details_styl.details_section}>
                <div className={details_styl.container}>
                    <div className={details_styl.product_details}>
                        <div className={details_styl.product_gallery}>
                            {/* <button className="prev-button" onclick="prevImage()">Previous</button> */}
                            <Image src="/images/prd/product1.png" alt="Product 1" id="productImage" fill />
                            {/* <button className="next-button" onclick="nextImage()">Next</button> */}
                        </div>
                        <div className={details_styl.product_content}>
                            <h2>Ardentre</h2>

                            <p className={details_styl.price}>$19.99</p>
                            <div className={details_styl.description}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lobortis ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lobortis ex.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lobortis ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lobortis ex.</p></div>
                            <div>
                                <a className={details_styl.whatsapp_button} href="https://wa.me/9562034255" target="_blank"><span>WhatsApp</span></a>
                                <a className={details_styl.back_button} href="/products"><span>Back to Product</span></a></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={details_styl.tabsec}>
                <div className={details_styl.container}>
                    <Tab />
                </div>
            </section>
        </React.Fragment >
    )
}

export default ProductDetails
