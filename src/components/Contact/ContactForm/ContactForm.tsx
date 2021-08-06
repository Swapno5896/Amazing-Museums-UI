import React from 'react';
import './ContactForm.css'
import img1 from '../../../images/images.png'
const ContactForm = () => {
    return (
        <div  className="contact-form-container d-flex justify-content-end align-items-center">
            <div className="row form-row">
                <div className="col-md-6">
                    <div className="form-group row">
                        <div className="col-xs-2 col-md-6">
                            <input placeholder='Name : ' className="form-control" id="ex1" type="text" />
                        </div>
                        <div className="col-xs-3 col-md-6">
                            <input placeholder='Email : ' className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-xs-3 col-md-6">
                            <input placeholder='Phone : ' className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-xs-3 col-md-6">
                            <input placeholder='Website : ' className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-xs-4">
                           <input placeholder='Your Need and Descrioption : ' className="form-control form-Descrioption" id="ex3" type="text" />
                        </div>
                    </div>
                    <button className='form-submit'>Submit</button>
                </div>
                <div className="col-md-6">
                    {/* image hear */}
                    <img className='form-img' src={img1} alt="" />
                </div>    
            </div>
        </div>
    );
};

export default ContactForm;