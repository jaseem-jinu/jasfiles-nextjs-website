"use client"
import React, { useState } from 'react'

const Tab = () => {

    const [activeTab, setActiveTab] = useState(0);
    return (
        <React.Fragment >

            <div>
                <ul className="tab-list">
                    {tabs.map((tab: any, index: any) => (
                        <li
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={index === activeTab ? 'active' : ''}
                        >
                            {tab.label}
                        </li>
                    ))}
                </ul>
                <div className="tab-content">
                    {tabs[activeTab].content}
                </div>
            </div>
        </React.Fragment >
    )
}

export default Tab


const tabs = [
    {
        label: 'Description',
        title: 'Tab 1',
        content: (
            <div className='border-2 border-blue-400 rounded-lg p-4'>
                <h2 className='text-3xl text-blue-600'>Title Description</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
                    earum illum qui similique architecto dolorum, minima enim quidem
                    voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
                    deleniti provident obcaecati rerum.
                </p>
            </div>
        ),
    },
    {
        label: 'Specification',
        title: 'Tab 2',
        content: (
            <div className='border-2 border-blue-400 rounded-lg p-4'>
                <h2 className='text-3xl text-blue-600'>Title Specification</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    aperiam asperiores dolo iti harum! Totam, mollitia quos voluptatem
                    deleniti provident obcaecati rerum.
                </p>
            </div>
        ),
    },
    {
        label: 'Ingredients',
        title: 'Tab 3',
        content: (
            <div className='border-2 border-blue-400 rounded-lg p-4'>
                <h2 className='text-3xl text-blue-600'>Title Ingredients</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
                    earum illum qui similique architecto dolorum, minima enim quidem
                    voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
                    deleniti provident obcaecati rerum. amet consectetur adipisicing elit.
                    Dolores aperiam asperiores doloribus velit dolore magnam ex
                    consectetur fugit earum illum qui similiq
                </p>
            </div>
        ),
    },
    {
        label: 'Review',
        title: 'Tab 4',
        content: (
            <div className='border-2 border-blue-400 rounded-lg p-4'>
                <h2 className='text-3xl text-blue-600'>Title Review</h2>
                <p>
                    Lorem ipsum dolor sit ue architecto dolorum, minima enim quidem
                    voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
                    deleniti provident obcaecati rerum.
                </p>
            </div>
        ),
    },
];