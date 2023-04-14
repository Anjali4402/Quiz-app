import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    // this is error page.
    return (
        <div className='text-center text-white'>
            <h1>Oops! You seem to be lost.</h1>
            <p>
                <Link to='/' className='text-dark bg-secondary mx-2 px-2'>Click here</Link>
                to go to the home page.
            </p>
        </div>
    )
}
