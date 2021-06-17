import React from 'react';
import img1 from '../../../images/m-1.png'
const SmallGllery = () => {
    return (
        <div>
            <h2 className='text-center'>Gallary section</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gallary title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gallary title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Gallary title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SmallGllery;