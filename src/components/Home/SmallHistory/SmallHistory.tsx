import React from 'react';
import img1 from '../../../images/m-1.png'
const SmallHistory = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3>This is museum</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio, blanditiis repellendus eius corporis illo culpa suscipit tenetur quibusdam dicta ullam voluptatem commodi architecto, harum omnis laudantium, obcaecati hic est?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga fugit suscipit sunt rem explicabo assumenda alias, ad dolores eveniet facere nesciunt, ullam blanditiis a eius consectetur quis adipisci omnis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallHistory;