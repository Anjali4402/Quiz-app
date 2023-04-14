import React, { useEffect, useState } from 'react';
import data from './JSON_file/Score.json';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ScoreTable() {
    
    // get win condition from redux store
    const checkWinStatement = useSelector((state)=> state.players.winStatement);

    // get amount of betMoney
    const betAmount = useSelector((state)=> state.players.userWinAmount.count);
    
    // set what to display in button
    const [showBtn, setShowBtn] = useState('');

    // set value of link
    const [nextPath, setNextPath] = useState('')

    // for next path (which page show next)
    useEffect(()=>{
        if(checkWinStatement){
            setShowBtn("Next")
            setNextPath('/qna')
        }else{
            setShowBtn("Get certificate")
            setNextPath('/price')
        }
    },[])

    // for getting current amount for which user playing
    useEffect(()=>{
        let amounts = document.querySelectorAll('.amount')
        amounts.forEach((val)=>{
            if(val.id == betAmount){
                val.classList.add('active')
            }
        })
    },[])

    return (
        <div className='container'>
            <div className="row">
                <div className=" col-8 col-md-6 col-lg-4 mx-auto mt-2 text-center background_image">
                    <div className="table-responsive">
                        <table id="table" 
                            className='text-warning fw-bold table table-borderless table-hover table-sm'>
                            <tbody id='tbody'>
                                {
                                    data.map((value)=>{
                                        return(
                                            <tr key={value.id} className='amount' id={value.id}>
                                                <td>{value.id}</td>
                                                <td>{value.Amount}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-12 text-center mt-4">
                    <Link to={nextPath} 
                        className='btn btn-danger px-4'>
                        {showBtn}
                    </Link>
                </div>
            </div>
        </div>
    )
}
