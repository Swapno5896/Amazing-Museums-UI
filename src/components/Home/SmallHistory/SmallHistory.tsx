import React from 'react';
import './SmallHistory.css'
import img1 from '../../../images/download.png'
const SmallHistory = () => {
    return (
        <div style={{ backgroundColor: ' #5c574f', padding: '80px 0px' }}>
            <div className="container" >
                <div className="row ">
                    <div className="col-md-6">
                        <img className='small-history-img' src='https://demoxml.com/html/museum/images/museum-img.jpg' alt="" />
                    </div>
                    <div className="col-md-5 ms-5 history-detail" >
                        <h3 className='text-center pb-3 title'>OUR HISTORY</h3>
                        <p className='text-center'>Scelerisque, felis eget sit nisl, tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh. Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>
                        <p className='text-center'>Donec quis tortor eget risus at ultrices. Integer molestie augue eros, ac dignissim velit placerat ut. Sed vel leo ac eros tincidunt porttitor. Aliquam erat volutpat.</p>

                        <h3 className='text-center pb-3 title'>ON VIEW</h3>
                        <div className="row  ms-5">
                            <div className="col-md-4  history-text">

                                <p> Arts of Global Africa</p>

                                <p>American Art</p>

                                <p>Arts of Canada Arts of Asia</p>

                                {/* <p>Classical Art</p> */}


                            </div>
                            <div className="col-md-4 history-text">

                                <p>  Decorative Art</p>

                                <p>Gardens</p>

                                <p>War History</p>

                                <p>Kings of History</p>

                                {/* <p>German Arts</p> */}
                            </div>
                            <div className="col-md-4 history-text">

                                <p> Decorative Art</p>

                                <p>Gardens</p>

                                <p>War History</p>

                                <p>Kings of History</p>

                                {/* <p>German Arts</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallHistory;