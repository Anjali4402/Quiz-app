import React from 'react';
import image from '../images/complete.jpg';
import { useSelector } from 'react-redux';
import { persistor } from '../store';
import { useNavigate } from 'react-router-dom';

export default function Price() {

    // assign useNavigate
    const navigate = useNavigate(); 

    // get value from redux store;
    const getResult = useSelector((state)=> state.players)

    // this function can remove your all data
    const startnewGame = () =>{
        persistor.purge();
        navigate('/',{replace : true})
        // page reload
        location.reload();
    }
    return (
        <div className='outer_border'>
            {
                getResult.userWinAmount.winMoney !== 0 ?
                <div className="Cheque_border">
                    <div className="inside_border">
                        <div className="persion_name">
                            <h2>{getResult.userName}</h2>
                        </div>
                        <div className="details">
                            <h5>CONGRATULATIONS!!</h5>
                            <h5>TRANSFERRED SUCCESSFULLY</h5>
                        </div>
                        <div className="amount_box">
                            <h5>&#8377; {getResult.userWinAmount.winMoney}</h5>
                        </div>
                        <div className="check_sign">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
                :
                null
            }
            <div className="col-md-12 text-center mt-4">
                    <div onClick={()=>startnewGame()} className='btn btn-danger px-4'>Start new game</div>
                </div>
        </div>
    )
}
