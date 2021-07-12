import React, { useState } from 'react';

const AddEvent: React.FC<any> = ({ handleSubmit }) => {

    const [event, setEvent] = useState({});
    const hndleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setEvent({
            ...event, [e.target.name]: e.target.value
        })
    }

    const hndleEventSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        // console.log(event)
        handleSubmit(event, 'www.s.com')
    }
    // handleSubmit(8)
    return (
        <div>
            <h2 className='text-center'>Add Event</h2>

            <div className="d-flex justify-content-center">

                <form className='w-50'>
                    <div className="form-group">
                        <label >Title</label>
                        <input onBlur={hndleBlur} type="text" name='title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label >Location</label>
                        <input onBlur={hndleBlur} name='location' type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label >Image Url </label>
                        <input onBlur={hndleBlur} name='img' type="text" className="form-control" id="exampleInputPassword1" />
                    </div> <div className="form-group">
                        <label >Time </label>
                        <input onBlur={hndleBlur} name='time' type="text" className="form-control" id="exampleInputPassword1" />
                    </div> <div className="form-group">
                        <label > Description</label>
                        <input onBlur={hndleBlur} name='description' type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={hndleEventSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;