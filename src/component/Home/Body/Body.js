import React from 'react';
import './Body.css';
import image from '../../image/Group 1.png'

const Body = () => {
    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                    <div className="body2 col-md-6">
                        <h1 className="color">Design and strategy</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                        <h1 className="color">Digital Marketing Channels</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;