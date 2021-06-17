import React from 'react';
import img from '../../../images/m-1.png'
const News = (props: any) => {
    const { img, title, date } = props.dt;
    return (
        <div className="card mb-3" style={{ maxWidth: '450px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img style={{ width: '100%' }} src={img} alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;