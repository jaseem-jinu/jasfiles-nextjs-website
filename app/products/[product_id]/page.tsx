
import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link';
import innerbanner from '@/public/images/who-we-are-banner.jpg';
import details_styl from './Product-details.module.css';

export const metadata: Metadata = {
    title: 'Products details',
    description: 'we are ready to create marvels design with your satisfaction',
}

function Product_details() {
    return (
        <React.Fragment>
            <section className={details_styl.banner_section} style={{ backgroundImage: `url(${innerbanner.src})`, backgroundSize: "cover" }}>
                <div className={details_styl.container} >
                    <p>Product <span>Details</span>
                    </p>
                </div>
            </section>
            <section>
                <div className="container">
                    <h1>This is product Details</h1>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Product_details