import React from 'react';
import img from '../../../images/download.png'
const News = (props: any) => {
    const { img, title, date } = props.dt;
    return (

        <div className=" mb-3" style={{ maxWidth: '400px', }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img className='pt-3' style={{ width: '100%' }} src={img} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{date}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    );
};

export default News;