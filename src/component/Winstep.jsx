import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Winstep() {
    // assign useNavigate.
    const navigate = useNavigate();

    // it will set value what show in webpage.
    const [showVal, setShowVal] = useState("");

    // It will get statement whether user win or not.
    const questionTrueOrFalse = useSelector((state)=> state.players.winStatement);
    
    // It wil get winning amount.
    const winMoney = useSelector((state)=> state.players.userWinAmount.winMoney)
    
    // it will show two outputs, in first user won or lost this game and 
    // in second total money won by user.
    useEffect(()=>{
        setTimeout(() => {
            setTimeout(() => {
                if(winMoney === "7.5 CRORE"){
                    navigate('/winner', {replace: true});
                }
                else{
                    navigate('/scoreTable', {replace: true})
                }
            }, 2000);            
            setShowVal(`Total Prize  ${winMoney}`)  

        }, 2000);
            if(questionTrueOrFalse){
                setShowVal("YOU WON!")
            }
            else{
                setShowVal("YOU LOST!")
            }
    },[])
    return (
        <div 
            className="price_box">
            <h3>{showVal}</h3>
        </div>
    )
}
