import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QNAInterface from './QNAInterface';
import { addWinOrNotStatement , addUserWinAmount } from '../store/slices/UserSlice';
import { useDispatch } from 'react-redux';

export default function QNA() {
    // assign dispatch method
    const dispatch = useDispatch();

    //  it will store all options separately.
    const [answers, setAnswers] = useState({
        question:'',
        incorrectAnswers:[],
        allOptions:[],
        correctAnswer:'',
    })

    // fetch question api here
    useEffect(()=>{
        axios
            .get("https://the-trivia-api.com/api/questions?limit=1&region=IN&difficulty=easy")
            .then((res)=>
                setAnswers({
                    question:res.data[0].question,
                    incorrectAnswers: res.data[0].incorrectAnswers,
                    correctAnswer: res.data[0].correctAnswer,
                    allOptions: res.data[0].incorrectAnswers.concat(res.data[0].correctAnswer),
                })
            )
    },[])


    // it will get statement from QNAInterface.jsx and send into redux store weather user win or not in the quiz.
    const winOrNotStatement = (getStatement)=>{
        if(getStatement){
            dispatch(addWinOrNotStatement(true));
            dispatch(addUserWinAmount());
        }else{
            dispatch(addWinOrNotStatement(false));
        }
    }

    return (
        <div className='outer'>
            <QNAInterface 
                allOptions={answers.allOptions} 
                currectAnswer= {answers.correctAnswer} 
                question={answers.question} 
                winOrNotStatement={winOrNotStatement}
            />
        </div>
    )
}
