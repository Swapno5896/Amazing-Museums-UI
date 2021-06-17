import React from 'react';
import img1 from '../../../images/m-1.png'
const SmallHistory = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3 className='text-center'>This is museum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio, blanditiis repellendus eius corporis illo culpa suscipit tenetur quibusdam dicta ullam voluptatem commodi architecto, harum omnis laudantium, obcaecati hic est?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga fugit suscipit sunt rem explicabo assumenda alias, ad dolores eveniet facere nesciunt, ullam blanditiis a eius consectetur quis adipisci omnis.</p>

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