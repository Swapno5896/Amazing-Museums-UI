import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <h2>This is contact form</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group row">
                        <div className="col-xs-2 col-md-6">
                            <label >col-xs-2</label>
                            <input className="form-control" id="ex1" type="text" />
                        </div>
                        <div className="col-xs-3 col-md-6">
                            <label >col-xs-3</label>
                            <input className="form-control" id="ex2" type="text" />
                        </div>
                        <div className="col-xs-4">
                            <label>col-xs-4</label>
                            <input className="form-control" id="ex3" type="text" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* image hear */}
                </div>    
            </div>
        </div>
    );
};

export default ContactForm;