import React, { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Content({count}) {

    // It will return userName.
    const userName = useSelector((state)=> state.players.userName)

    // set next Path (new display).
    const [nextPath, setNextPath] = useState('')

    // If redux store has not any userName then it will open form, and 
    // if there is a user name it will go on newOrPrevious.jsx
    useEffect(()=>{
        if(userName === ''){
            setNextPath('/form')
        }
        else{
            setNextPath('/newOrPrevious')
        }
    },[])

    switch(count){
        case 0:
            // shows in page first
            return( 
            <div className='text-center'>
                <h5>Hello, Welcome to</h5>
                <h1>KAUN BANEGA CROREPATI</h1>
            </div>
            )
        case 1:
            // show in page second.
            return(
                <div className='text-start'>
                    <h3 className='px-4'>How to play ?</h3>
                    <ul>
                        <li>You will be asked mltiple choice questions.</li>
                        <li>After selecting the answer you have to submit your answer.</li>
                        <li>You will be given a certain amount of time to submit the answer.</li>
                        <li>You will be given 60 seconds to submit your answer.</li>
                        <li>If you do not submit your answer before deadline, you will be considered as a loser.</li>
                    </ul>
                </div>
            )
        case 2:
            // show in page third.
            return(
                <div className='h-100 d-flex justify-content-center align-items-center' 
                    style={{width:'30rem'}}>
                    <Link to={nextPath} 
                        className='btn btn-primary btn-lg w-100 cursor-pointer' 
                        style={{ maxWidth:'25rem',padding:'1rem 0 1rem 0',fontSize:'1.5rem',fontWeight:'bold'}}
                        >Get Start
                    </Link>
                </div>
            )
        default:
            return null;
    }
    
}
