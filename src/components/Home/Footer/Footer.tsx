import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "rgba(0,0,0,0.8)", padding: '97px', color: 'white' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className='pb-3'>Amazing Museume</h2>
                        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
                            Code licensed MIT, docs CC BY 3.0.
                            Currently v5.0.1.</p>

                    </div>
                    <div className="col-md-3 ps-5">
                        <h2>This Home</h2>
                        <p> Our Events</p>   <p>Beautiful Gallary</p>   <p>Find More</p>   <p>Privacy Policy</p>
                    </div>
                    <div className="col-md-3">
                        <h2>Guides</h2>
                        | |  |
                        <p>Terms and Conditions</p>   <p>Refund policy</p>     <p>Terms & Conditions</p>   <p> Privacy Policy</p>
                    </div>
                    <div className="col-md-3">
                        <h2> Important things</h2>
                        <p>Refund Policy </p>      <p>HTerms & Conditions</p>   <p>Hallo Eofkd</p>   <p>Your Account</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;