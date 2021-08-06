import React from 'react';
import './SmallGllery.css'
import img1 from '../../../images/download.png'
import img2 from '../../../images/images.png'
import img3 from '../../../images/Screen-Shot-2017-06-17-at-6.18.29-PM.png'
import SmallGlleryCard from '../SmallGlleryCard/SmallGlleryCard';
const SmallGllery = () => {
    const fakesmalGallary = [
        { img: img1, title: `ANCIENT STATUES COLLECTIONS`, location: `ORGIN: Naples, Italy` },
        { img: img2, title: `DINOSAURS SKELETON`, location: `ORGIN: South Africa, Africa` },
        { img: img3, title: `MODERN ART COLLECTIONS`, location: `ORGIN: New York, USA` },
    ]
    return (
        <div className='small-gallary-container'>
            <h2 className='text-center pt-5 mt-5'>GALLERY</h2>
            <p className="text-center pt-4 pb-2">The Love Boat soon will be making another run. The Love Boat promises something for everyone.</p>
            <hr />
            <div className="d-flex justify-content-center ">
            <div className="row w-75  g-4"> 
 
                    {
                        fakesmalGallary.map(gallary => <SmallGlleryCard gallary={gallary} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SmallGllery;