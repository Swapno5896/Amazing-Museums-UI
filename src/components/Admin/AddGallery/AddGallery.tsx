import React, { useState } from 'react';

const AddGallery: React.FC<any> = ({ handleSubmit }) => {

    const [gallary, setgallary] = useState({});
    const hndleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setgallary({
            ...gallary, [e.target.name]: e.target.value
        })
    }

    const hndlegallarySubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        // console.log(gallary)
        handleSubmit(gallary, 'www.s.com')
    }
    return (
        <div>
            <h2 className='text-center'>Add Gallary</h2>

            <div className="d-flex justify-content-center">

                <form className='w-50'>
                    <div className="form-group">
                        <label >Title</label>
                        <input onBlur={hndleBlur} type="text" name='title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label >Image Url </label>
                        <input onBlur={hndleBlur} name='img' type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label >Location</label>
                        <input onBlur={hndleBlur} name='location' type="text" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button onClick={hndlegallarySubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddGallery;