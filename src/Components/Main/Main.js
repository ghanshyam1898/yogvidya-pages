import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <React.Fragment>
            <main className="main__body">
                <section className="about">
                    <div className="about__grid">
                        <h2>Yogvidya</h2>
                        <p>
                            Glo is online yoga designed for real people—whether
                            you’re a busy mom in need of a quick morning energy
                            boost, or a traveler looking to relax with a yoga
                            nidra before sleep. Work up a sweat with an advanced
                            vinyasa flow, or brush up on the basics in our
                            accessible beginner classes. Whatever your level of
                            experience, life stage, and aspirations—from
                            prenatal strength to mid-workday calm—we’ll help you
                            create an online yoga practice that’s uniquely your
                            own.
                        </p>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Main;
