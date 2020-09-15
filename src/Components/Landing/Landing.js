import React, { useEffect, useState } from 'react';
import './Landing.css';

const Landing = () => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    let x = ['landing__header'];
    if (scrolled) {
        x.push('scrolled');
    }

    let y = ['header__logo'];
    if (scrolled) {
        y.push('scrolled');
    }
    let z = ['btn', 'light'];
    if (scrolled) {
        z.push('scrolled');
    }

    return (
        <div>
            <div className="landing">
                <div className={x.join(' ')}>
                    <div className={y.join(' ')}>Yogvidya</div>
                    <nav className="header__nav">
                        <li className={z.join(' ')}>Login</li>
                        <li className="btn dark">Free Trial</li>
                    </nav>
                </div>
                <div className="landing__content">
                    <div className="content__title">
                        Online yoga with flexibility. Anywhere, every day.
                    </div>
                    <div className="content__subtitle">
                        Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lore than Lorem
                        Ipsum is Lorem Ipsum Lore Lorem Ipsum Lorem Ipsum is
                        Lorem Ipsum Lore than Lorem Ipsum is Lorem Ipsum Lore
                    </div>
                    <div className="content__button btn dark">
                        Start your 15-day free trial
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
