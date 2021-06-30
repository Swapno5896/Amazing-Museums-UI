import React from 'react';
import img1 from '../../../images/m-1.png'
const SmallHistory = () => {
    return (
        <div style={{ backgroundColor: 'blanchedalmond', padding: '80px 0px', margin: '100px 0px' }}>
            <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                        <img style={{ width: '100%' }} src={img1} alt="" />
                    </div>
                    <div className="col-md-6" >
                        <h3 className='text-center'>This is museum</h3>
                        <p>Scelerisque, felis eget Auctor dictum tempus molestie auctor consectetuer sit nisl, tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh. Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>
                        <p>Donec quis tortor tempus, lacinia sem nec, accumsan diam. Ut condimentum eget risus at ultrices. Integer molestie augue eros, ac dignissim velit placerat ut. Sed vel leo ac eros tincidunt porttitor. Aliquam erat volutpat.</p>

                        <h3 className='text-center'>ON VIEW</h3>
                        <div className="row">
                            <div className="col-md-4">

                                <p> Arts of Global Africa</p>

                                <p>American Art</p>

                                <p>Arts of Canada Arts of Asia</p>

                                <p>Classical Art</p>


                            </div>
                            <div className="col-md-4">

                                <p>  Decorative Art</p>

                                <p>Gardens</p>

                                <p>War History</p>

                                <p>Kings of History</p>

                                <p>German Arts</p>
                            </div>
                            <div className="col-md-4">

                                <p> Decorative Art</p>

                                <p>Gardens</p>

                                <p>War History</p>

                                <p>Kings of History</p>

                                <p>German Arts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallHistory;