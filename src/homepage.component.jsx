import React from 'react';
import './homepage.styles.scss';

const HomePage = () =>  (

    <div>
        <div className= "homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Pizza</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Cakes</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Drinks</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Wines</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Salad</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;