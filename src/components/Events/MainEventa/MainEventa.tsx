import React from 'react';
import News from '../News/News';
import EventCard from './../EventCard/EventCard';
import ImageCard from './../ImageCard/ImageCard';

const MainEventa = () => {
    return (
        <div>
            <div className="container">
                <div className="col-md-8">
                    <EventCard></EventCard>
                </div>
                <div className="col-md-4">
                    <News />
                    <ImageCard></ImageCard>
                </div>
            </div>
        </div>
    );
};

export default MainEventa;