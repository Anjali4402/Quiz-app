import React, { useEffect } from 'react';
import image from '../images/congrats-7.gif';
import { useNavigate } from 'react-router-dom';

export default function winner() {
    // assign useNavigate
    const navigate = useNavigate();

    // It will send user in new page.
    useEffect(()=>{
        setTimeout(() => {
            navigate('/price', {replace: true});
        }, 5000);
    },[])

    return (
        <div className='position-relative d-flex justify-content-center '>
            <div className="image_box">
                <img src={image} 
                    alt="gif images is not available" 
                />
            </div>
            <h1 className='heading'>
                You become a Millionaire
            </h1>
        </div>
    )
}
