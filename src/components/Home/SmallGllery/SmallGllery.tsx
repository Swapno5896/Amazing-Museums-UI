import React from 'react';
import './SmallGllery.css'
import img1 from '../../../images/m-1.png'
import SmallGlleryCard from '../SmallGlleryCard/SmallGlleryCard';
const SmallGllery = () => {
    const fakesmalGallary = [
        { img: img1, title: `ANCIENT STATUES COLLECTIONS`, location: `ORGIN: Naples, Italy` },
        { img: img1, title: `DINOSAURS SKELETON`, location: `ORGIN: South Africa, Africa` },
        { img: img1, title: `MODERN ART COLLECTIONS`, location: `ORGIN: New York, USA` },
    ]
    return (
        <div className='small-gallary-container'>
            <h2 className='text-center pb-5'>GALLERY</h2>
            <p className="text-center pb-3">The Love Boat soon will be making another run. The Love Boat promises something for everyone.</p>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        fakesmalGallary.map(gallary => <SmallGlleryCard gallary={gallary} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SmallGllery;