import React from 'react';
import ContactForm from '../ContactForm/ContactForm'
const MainContact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                    <div className="col-md-6">
                        <h2>Google map going to be hear</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContact;