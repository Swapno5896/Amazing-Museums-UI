import React from 'react';
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import OurLocation from '../../components/Contact/OurLocation/OurLocation';
import OppiningHours from '../../components/Home/OppiningHours/OppiningHours';
const MainContact = () => {
    return (
        <div>
             <OurLocation/>
            <OppiningHours/>
           
            <ContactForm />
        </div>
    );
};

export default MainContact;