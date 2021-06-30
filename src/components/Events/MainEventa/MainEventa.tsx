import React from 'react';
import News from '../News/News';
import EventCard from '../EventCard/EventCard'
import ImageCard from './../ImageCard/ImageCard';
import img1 from '../../../images/m-1.png'
const MainEventa = () => {

    const eventData = [
        {
            img: img1,
            title: "LET’S CELEBRATE 25TH MUSEUM DAY",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
        {
            img: img1,
            title: "ANCIENT STATUES CASE STUDY",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
        {
            img: img1,
            title: "DINOSAURS SKELETON",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
        {
            img: img1,
            title: "ANCIENT BUILDING STRUCTURES",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
    ];
    const newsData = [
        { img: img1, title: "	Top 10 Travelers’ Choice Museums in the U.S.", date: "Jul 19, 2021" },
        { img: img1, title: "		Australia's largest discovered dinosaur", date: "Jul 19, 2021" },
        { img: img1, title: "	Ancient fish evolved gills to survive acidic oceans", date: "Jul 19, 2021" },
    ]
    const imgCardData = [img1, img1, img1, img1, img1, img1]
    return (

        <div className="row">
            <div className="col-md-4 offset-md-2">
                {eventData.map((dt) => (
                    <EventCard dt={dt} />
                ))}
            </div>

            <div className="col-md-3 offset-md-2">
                <div style={{ backgroundColor: 'goldenrod' }}>
                    <div className='d-flex justify-content-center'>
                        <input style={{ width: '250px', margin: '20px' }} type="text" placeholder='Search hear' />
                    </div>
                    <p className='text-center'>Latest News</p>
                    {newsData.map((dt) => (
                        <News dt={dt} />
                    ))}
                    <div style={{ padding: '15px 27px' }}>
                        <div className="row ">
                            {imgCardData.map((dt) => (
                                <ImageCard dt={dt} />
                            ))}

                        </div></div>

                </div>
            </div>
        </div>
    );
};

export default MainEventa;