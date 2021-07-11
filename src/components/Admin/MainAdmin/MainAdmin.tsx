import React from 'react';
import AddEvent from '../AddEvent/AddEvent';
import AddGallery from '../AddGallery/AddGallery';

const MainAdmin = () => {
    const handleSubmit = (data: any) => {
        console.log(data)

        fetch('http://localhost:9000/addEvent', {
            method: 'POST',
            body: data
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <AddEvent handleSubmit={handleSubmit} />
            <AddGallery />
        </div>
    );
};

export default MainAdmin;