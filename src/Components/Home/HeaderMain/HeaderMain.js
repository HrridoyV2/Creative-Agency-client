import React from 'react';
import headerImg from '../../../images/logos/Frame.png';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-dark"><strong>Let’s Grow Your Brand To The Next Level</strong></h1>
                <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className="btn btn-dark px-5">Hire us</button>
            </div>
            <div className="col-md-6">
                <img src={headerImg} className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;