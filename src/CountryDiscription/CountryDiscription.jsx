import React from "react";
import "./CountryDiscription.css";
import imgtest2 from '../../public/photos/adventure_02.jpg';

const CountryDiscription = () => {
    return (
        <>

            <div className="banner-area">

            </div >
            {/* Blog Section */}
            < section className="light" >
                <div className="container py-2">
                    <div className="h1 text-center text-dark pb-4" id="pageHeaderTitle">
                        Welcome To Our Blog
                    </div>

                    {/* Post: Lotus Tower */}
                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src={imgtest2}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a href="#">Lotus Tower</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Sun, December 25th 2022
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Lotus Tower also referred to as Colombo Lotus Tower, is a 350 m (1,150
                                ft) tall tower, located in Colombo, Sri Lanka. It has been called a
                                symbolic landmark of Sri Lanka. As of 2019, the tower is the tallest
                                self-supported structure in South Asia; the second tallest structure in
                                South Asia after the guy-wire-supported INS Kattabomman in India; the
                                11th tallest tower in Asia and the 19th tallest tower in the world. The
                                lotus-shaped tower is used for communication, observation and other
                                leisure facilities.
                            </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Direction
                                </li>
                            </ul>
                        </div>
                    </article>


                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src={imgtest2}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a href="#">Lotus Tower</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Sun, December 25th 2022
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Lotus Tower also referred to as Colombo Lotus Tower, is a 350 m (1,150
                                ft) tall tower, located in Colombo, Sri Lanka. It has been called a
                                symbolic landmark of Sri Lanka. As of 2019, the tower is the tallest
                                self-supported structure in South Asia; the second tallest structure in
                                South Asia after the guy-wire-supported INS Kattabomman in India; the
                                11th tallest tower in Asia and the 19th tallest tower in the world. The
                                lotus-shaped tower is used for communication, observation and other
                                leisure facilities.
                            </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Direction
                                </li>
                            </ul>
                        </div>
                    </article>

                    {/* Repeat similar blocks for other articles */}

                </div>
            </section >
            {/* Scroll to Top */}
            < a href="#top" className="to-top" >
                <i className="fas fa-chevron-up"></i>
            </a >
        </>
    );
};

export default CountryDiscription;
