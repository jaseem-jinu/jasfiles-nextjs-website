'use client'
import React from 'react';
import CountUp from 'react-countup';
import styles from '../app/about/About.module.css';

const MultiCountUp = () => {
    const counters = [
        { id: 'MEMBERS AND GROWING', start: 0, end: 70, position: 'first' },
        { id: 'YEARS', start: 0, end: 12, position: 'second' },
        { id: 'APPLICATIONS', start: 0, end: 200, position: 'third' },
        { id: 'COUNTRIES SERVING', start: 0, end: 8, position: 'second' },
        // Add more counters as needed
    ];
    const checkStatus = (id: number) => {
        switch (id) {
            case 0:
                return styles.counter_list_member
            case 1:
                return styles.counter_list_year
            case 2:
                return styles.counter_list_application
            case 3:
                return styles.counter_list_serving
            default:
                return styles.counter_list_member
        }
    }


    return (
        <div className={styles.counter_list}>
            {counters.map((counter, index) => (
                <CountUp
                    start={counter.start}
                    end={counter.end}
                    duration={5.75}

                >
                    {({ countUpRef, start }) => (

                        <div className={`${styles.counter_list_item} ${checkStatus(index)}`}>

                            <span className={styles.plus_number}><b className={styles.counter} ref={countUpRef} />+</span>
                            <h4 className={`${styles.counter_text}`}>{counter.id}</h4>
                            <span className={`${styles.plus_mode} ${styles[counter.position]}`}></span>

                        </div>
                    )}
                </CountUp>
            ))
            }


        </div >
    );
};

export default MultiCountUp;
