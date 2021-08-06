import React, { useEffect, useState } from 'react';
import GallaryCard from "../../components/Gallary/GallaryCard/GallaryCard";


interface Igallary {
  img: '';
  title: '';
  location: '';

}
const MainGallary = () => {

  const [gallary, setGallary] = useState<Igallary[]>([])
  useEffect(() => {
    fetch('https://hidden-brushlands-43624.herokuapp.com/getGallary')
      .then(response => response.json())
      .then(data => setGallary(data));
  }, [])
  // const uploadBlog = () => {
  //   fetch('http://localhost:9000/addGallary', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(GallaryData),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }
  // const GallaryData = [
  //   {
  //     img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-4.jpg`,
  //     title: "ANCIENT STATUES COLLECTIONS",
  //     location: "ORGIN: Naples, Italy",
  //   },
  //   {
  //     img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-5.jpg
  //     `,
  //     title: "ANCIENT STATUES COLLECTIONS",
  //     location: "ORGIN: Naples, Italy",
  //   },
  //   {
  //     img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-6.jpg
  //     `,
  //     title: "ANCIENT STATUES COLLECTIONS",
  //     location: "ORGIN: Naples, Italy",
  //   },
  //   {
  //     img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-7.jpg
  //     `,
  //     title: "ANCIENT STATUES COLLECTIONS",
  //     location: "ORGIN: Naples, Italy",
  //   },
  //   {
  //     img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-8.jpg
  //     `,
  //     title: "ANCIENT STATUES COLLECTIONS",
  //     location: "ORGIN: Naples, Italy",
  //   },
  //   {
  //     img: `https://premiumlayers.com/new/museum/wp-content/uploads/2015/09/img-9.jpg
  //     `,
  //     title: "ANCIENT STATUES COLLECTIONS",
  //     location: "ORGIN: Naples, Italy",
  //   },
  // ];
  return (
    <div className="row">
      {/* <button onClick={uploadBlog}>upload blog</button> */}

      {gallary.map((dt) => (
        <GallaryCard dt={dt} />
      ))}
    </div>
  );
};

export default MainGallary;
