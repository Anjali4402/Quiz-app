import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QNAInterface({allOptions,currectAnswer,question, winOrNotStatement}) {

    // assign useNavigate
    const navigate = useNavigate();

    // This is an array which store all options 
    let allOpt = allOptions.sort(function(a,b){return a.localeCompare(b)});
    
    // time Limit
    const [timeLimit, setTimeLimit] = useState(60);
    const [timerOn, setTimerOn] = useState(true);

    // my selected answer
    const [mySelectedAnsersLabelText, setMySelectedAnsersLabelText] = useState('');
    const [mySelectedAnsersInputValue, setMySelectedAnsersInputValue] = useState('');

    // change radio button onchange event.
    const [radioButton, setRadioButton] = useState(true);

    // when user select answer.
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    
    // after form submittion.
    const [formSubmit, setFormSubmit] = useState(false);
    
    // set the background Color values
    const [color, setColor] = useState({
        FIRST:'bg_blue',
        SECOND:'bg_blue',
        THIRD:'bg_blue',
        FOUR:'bg_blue'
    })

    // handle hangleChange function/event.
    const handleChange= ()=>{
        if(radioButton){
            const {value} = event.target;
            setColor({
                FIRST:'bg_blue',
                SECOND:'bg_blue',
                THIRD:'bg_blue',
                FOUR:'bg_blue',
                [value]:'bg_orange',
            })
            setShowSubmitButton(true);
            getSelectedAnsersLabelText(event.target.id);
            setMySelectedAnsersInputValue(event.target.value)
        }
    } 


    // get the value of text which user selected.
    const getSelectedAnsersLabelText = (selectedId)=>{
        let select = 'label[for=' + selectedId + ']';
        let getText = document.querySelector(select).querySelector('.text');
        setMySelectedAnsersLabelText(getText.innerHTML)
    }


    // when user sumbit the answer.
    const submitForm = (event)=>{
        event.preventDefault();
        setTimerOn(false);
        getRightAnswer();
        checkYourAnswer();
        setFormSubmit(true);
        setShowSubmitButton(false);
    }


    // it will get right answer of question.
    const getRightAnswer = ()=>{
        const radio =  document.getElementsByName('Answer')
        for(let i = 0; i<radio.length; i++){
            var selector = 'label[for=' + radio[i].id + ']';
            var label = document.querySelector(selector);
            var text = label.querySelector('.text');
            if(text.innerHTML === currectAnswer){
                var rightAnswer = radio[i].value;
                setColor((preval)=>{
                    return {...preval,
                        [rightAnswer] : 'bg_green'
                    }
                })
            }
        }
    }

    
    // it will check your answer is right or wrong
    const checkYourAnswer = ()=>{
        if(mySelectedAnsersLabelText === currectAnswer){
            winOrNotStatement(true)
        }
        else{
            winOrNotStatement(false)
            setColor((preval)=>{
                return {
                    ...preval,
                    [mySelectedAnsersInputValue]:'bg_red'
                }
            })
        }
    }


    // useEffect hook for time limit.
    let timer ;
    useEffect(()=>{
        const timerComplete = setTimeout(() => {
            clearInterval(timer);

            // when time is over.
            setRadioButton(false);
            setFormSubmit(true);
            winOrNotStatement(false);
        }, 61000);

        if(timerOn){
            timer = setInterval(() => {
                setTimeLimit((preval) => preval - 1)
            }, 1000);
        }
        else{
            clearInterval(timer)
        }
        

        return ()=>{
            clearInterval(timer);
            clearTimeout(timerComplete);
        }

    },[timerOn])
    

    // after user submit form (when formSubmit value is true);
    useEffect(()=>{
        if(formSubmit){
            setTimeout(() => {
                navigate('/winstep',{replace:true})
            }, 2000);
        }
    },[formSubmit])


    return (
        <div>
            <div className="timer_box">
                <div className="time_limitation">
                    <h3>{timeLimit}</h3>
                </div>
            </div>
            <div className="question">
                <h4>{question}</h4>
            </div>
            <div className="answer">
                <div className="options">
                    <label 
                        htmlFor="first" 
                        className={`option ${color.FIRST}`}>
                        <h5>A : <span className='text'>{allOpt[0]}</span></h5>
                    </label>
                    <label 
                        htmlFor='second' 
                        className={`option ${color.SECOND}`}>
                        <h5>B : <span className='text'>{allOpt[1]}</span></h5>
                    </label>
                    <label 
                        htmlFor='third' 
                        className={`option ${color.THIRD}`}>
                        <h5>C : <span className='text'>{allOpt[2]}</span></h5>
                    </label>
                    <label 
                        htmlFor='fourth' 
                        className={`option ${color.FOUR}`}>
                        <h5>D : <span className='text'>{allOpt[3]}</span></h5>
                    </label>
                </div>
                <form action="" onSubmit={submitForm}>
                    <div hidden>
                        <input 
                            type="radio" 
                            id='first' 
                            name='Answer' 
                            value='FIRST' 
                            onChange={handleChange} 
                        />
                        <input 
                            type="radio" 
                            id='second' 
                            name='Answer' 
                            value='SECOND' 
                            onChange={handleChange}
                        />
                        <input 
                            type="radio" 
                            id='third' 
                            name='Answer' 
                            value='THIRD' 
                            onChange={handleChange}
                        />
                        <input 
                            type="radio" 
                            id='fourth' 
                            name='Answer' 
                            value='FOUR'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-center mt-4" style={{height:'50px'}}>
                        {   
                            showSubmitButton?
                                <button 
                                    type='submit' 
                                    className='btn btn-outline-success btn-lg'
                                    onClick={()=>setRadioButton(false)}>
                                    Submit
                                </button>
                            :null
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}
