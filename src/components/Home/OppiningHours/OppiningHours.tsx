import React from 'react';
import './OppiningHours.css'
const OppiningHours = () => {
    return (
        <div className="hour-container">
      <div className="row hour-content">
          <div className="col-md-6">
              <p className='hour-title'>National Museum is a largest research and museum. more than 197 countries objects in history </p>
              <p className='hour-discription'>Scelerisque, felis eget Auctor dictum tempus molestie auctor consectetuer sit nisl, tempor, ultrices velit nascetur ullamcorper torquent adipiscing felis interdum. Vel nibh. Eget maecenas gravida urna nascetur sit. Taciti at suspendisse rutrum.</p>
              <button>Buy Our Ticket</button>
          </div>
          <div className="col-md-6 hour-card">
              <h2 className='text-center pb-3'>HOURS OF VISITING</h2>
         
                  <div className="d-flex justify-content-around">
        
                
             <div>
             <p> MON - WED</p>  
               <p>8:00 Am to 7:00 Pm</p>  
             </div>
               <button>SCHOOL APPOINMENTS</button>
                  </div>
                  <div className="d-flex justify-content-around">
                  <div>
                  <p>   THU - SUN</p>  
               <p>8:00 Am to 7:00 Pm</p> 
               </div>
                  <button>TOURIST APPOINMENTS</button>
                  </div>
              </div>
          </div>
          </div>
    );
};

export default OppiningHours;