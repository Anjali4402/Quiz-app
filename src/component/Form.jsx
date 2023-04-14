import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addUserName } from '../store/slices/UserSlice';

export default function Form() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // set variable for user name (which user enter)
    const [enterUserName, setEnterUserName] = useState('');

    // handleChange function.
    const handleChange = (event)=>{
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setEnterUserName(result);
    }

    // handle onSubmit
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        // add user name into redux store
        dispatch(addUserName(enterUserName));

        // link next page.
        navigate('/scoreTable', {replace:true})
    }
    
    return (
        <div className="container"  >
            <div className="row">
                <form action="" onSubmit={handleSubmit}>
                    <div className="col-md-6 mx-auto">
                        <div className="form-floating ">
                            <input type="text" 
                                className='form-control' 
                                placeholder='Enter name' 
                                required
                                onChange={handleChange}
                                value={enterUserName}
                            />
                            <label htmlFor="" className='form-label'>Enter name</label>
                        </div>
                        <div className="col-md-12 d-grid d-sm-block mt-4 text-center">
                            <button type='submit' 
                                className="btn btn-primary btn-lg mt-2"
                                >Submit
                            </button>        
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
