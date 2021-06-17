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
            title: "LET’S CELEBRATE 25TH MUSEUM DAY",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
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
            title: "LET’S CELEBRATE 25TH MUSEUM DAY",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
    ];
    const newsData = [
        { img: img1, title: "	Top 10 Travelers’ Choice Museums in the U.S.", date: "Jul 19, 2021" },
        { img: img1, title: "	Top 10 Travelers’ Choice Museums in the U.S.", date: "Jul 19, 2021" },
        { img: img1, title: "	Top 10 Travelers’ Choice Museums in the U.S.", date: "Jul 19, 2021" },
    ]
    const imgCardData = [img1, img1, img1, img1, img1, img1]
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    {eventData.map((dt) => (
                        <EventCard dt={dt} />
                    ))}
                </div>
                <div className="col-md-4">
                    {newsData.map((dt) => (
                        <News dt={dt} />
                    ))}
                    <div className="row">
                        {imgCardData.map((dt) => (
                            <ImageCard dt={dt} />
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainEventa;