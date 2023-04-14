import React, { useState } from 'react';
import Content from './Content';
import Footer from './Footer';

export default function HomePage() {
    // It wil value of count.
    const [count , setCount] = useState(0);
    
    return (
        <div className="container-fluid">
        <div className="row h-100 d-flex flex-column p-4 justify-content-center align-items-center">
            {
                count > 0 ?
                    <div className="col-md-12 bg-primary text-center my-4">
                        <h2>Kaun Banega Crorepati</h2>
                    </div>
                :
                null
            }
                <div className="col-12 d-flex justify-content-center">
                    <div className="menu_box">
                        <div className="content_menu text-center d-flex justify-content-center align-items-center">
                            <Content count = {count}/>
                        </div>
                        <div className='d-flex pt-2 justify-content-between'>
                            <button 
                                onClick={()=>{setCount(count-1)}} 
                                type='button' 
                                className={`btn btn-primary btn-lg ${count===0 ? 'disabled':null} }`}
                                >Prev
                            </button>
                            <button 
                                onClick={()=>{setCount(count+1)}} 
                                type='button' 
                                className={`btn btn-success btn-lg ${count=== 2 ? 'disabled':null} }`} 
                                >Next
                            </button>
                        </div>
                        </div>
                    </div>
                

                {/* add footer */}
                <Footer/>
        </div>
        </div>
    )
}
