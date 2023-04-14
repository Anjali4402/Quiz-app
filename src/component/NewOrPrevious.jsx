import React from 'react';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../store';

export default function NewOrPrevious() {
    // assign useNavigate.
    const navigate = useNavigate();

    // when user click on "start with new".
    const startNewQuiz = () =>{
        persistor.purge();
        navigate('/form',{replace : true})
        location.reload();
    }

    // when user click on "continue with previous".
    const goWithPrevious = () =>{
        navigate('/scoreTable', {replace:true})
    }


    return (
        <div className='container'>
            <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className='card bg-secondary'>
                <div className='card-body '>
                    <h4 className='text-center'>Do you want to start new chance or start with priveous one</h4>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <button 
                        onClick={startNewQuiz}  
                        className="btn btn-primary"
                        >Start with new
                    </button>
                    <button 
                        onClick={goWithPrevious} 
                        className="btn btn-primary"
                        >continue with previous
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
