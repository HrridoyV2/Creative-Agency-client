import React from 'react';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
const HeaderClients = () => {
    return (
        <div className="row">
            <div className="offset-1 col-md-2">
                <img src={slack} alt="slack" className="img-fluid" style={{height:"80px"}} />
            </div>
            <div className="col-md-2">
            <img src={google} alt="slack" className="img-fluid" style={{height:"80px"}} />
            </div>
            <div className="col-md-2">
            <img src={uber} alt="slack" className="img-fluid" style={{height:"80px"}} />
            </div>
            <div className="col-md-2">
            <img src={netflix} alt="slack" className="img-fluid" style={{height:"80px"}} />
            </div>
            <div className="col-md-2">
            <img src={airbnb} alt="slack" className="img-fluid" style={{height:"80px"}} />
            </div>
        </div>
    );
};

export default HeaderClients;