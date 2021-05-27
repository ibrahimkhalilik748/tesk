import React from 'react';
import './HeadBody.css';
import image from '../../../image/Group 18.png';
import image2 from '../../../image/Group 21.png';


const HeadBody = () => {
    return (
        <div className="HeadBody">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="pt-5 mt-5">Digital Marketing</h1>
                        <h4 className="color">Targeted and interactive marketing of good and services</h4>
                        <h6>Sign up and get a discount</h6><br />
                        <a href="#"><img className="img2" src={image2} alt="" /></a>
                    </div>
                    <div className="col-md-8">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadBody;