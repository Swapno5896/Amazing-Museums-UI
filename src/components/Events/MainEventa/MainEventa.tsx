import React from 'react';
import News from '../News/News';
import EventCard from '../EventCard/EventCard'
import ImageCard from './../ImageCard/ImageCard';
import img1 from '../../../images/m-1.png'
const MainEventa = () => {
    const uploadBlog = () => {
        fetch('http://localhost:9000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const eventData = [
        {
            img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-4-289x365.jpg
            `,
            title: "LET’S CELEBRATE 25TH MUSEUM DAY",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
        {
            img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-1-289x365.jpg
            `,
            title: "ANCIENT STATUES CASE STUDY",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
        {
            img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-2-289x365.jpg
            `,
            title: "DINOSAURS SKELETON",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
        {
            img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-3-289x365.jpg
            `,
            title: "ANCIENT BUILDING STRUCTURES",
            location: " Melbourne, Australia",
            time: "Wed 10AM - 12PM",
            description:
                "I have always wanted to have a neighbor just like you. I've always wanted to live in a neighborhood with you",
        },
    ];
    const newsData = [
        {
            img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-4-289x365.jpg
        `, title: "	Top 10 Travelers’ Choice Museums in the U.S.", date: "Jul 19, 2021"
        },
        {
            img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-6.jpg
        `, title: "		Australia's largest discovered dinosaur", date: "Jul 19, 2021"
        },
        {
            img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-9.jpg
        `, title: "	Ancient fish evolved gills to survive acidic oceans", date: "Jul 19, 2021"
        },
    ]
    const imgCardData = [`https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-2-289x365.jpg
    `, `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-4-289x365.jpg
    `, `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-2-289x365.jpg
    `, `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-5.jpg
    `, `https://premiumlayers.com/new/museum/wp-content/uploads/2015/10/event-img-2-289x365.jpg
    `, `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-6.jpg
    `]
    return (

        <div className="row">
            <div className="col-md-7 offset-md-1">
                <button onClick={uploadBlog}>upload blog</button>

                {eventData.map((dt) => (
                    <EventCard dt={dt} />
                ))}
            </div>

            <div className="col-md-3 ">
                <div style={{ backgroundColor: '#d7d7d7' }}>
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