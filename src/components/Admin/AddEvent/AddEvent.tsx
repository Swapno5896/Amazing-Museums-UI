import React, { useState } from 'react';

const AddEvent = ({ handleSubmit }: any) => {
    const [file, setFile] = useState<any>(null);
    const [event, setEvent] = useState({ title: '', location: '', time: '', description: '' });
    const hndleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setEvent({
            ...event, [e.target.name]: e.target.value
        })
    }
    const hndleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files
        if (file !== null) {
            setFile(file[0]);
        }




    }
    const hndleEventSubmit = (e: any) => {

        const formData = new FormData()
        formData.append('file', 'sss')
        console.log(formData)
        // handleSubmit(formData)



        e.preventDefault()
    }
    // handleSubmit(8)
    return (
        <div>
            <form>
                <div className="form-group">
                    <label >Title</label>
                    <input onBlur={hndleBlur} type="text" name='title' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label >Location</label>
                    <input onBlur={hndleBlur} name='location' type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input onChange={hndleChange} type="file" />
                </div>
                <button onClick={hndleEventSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddEvent;