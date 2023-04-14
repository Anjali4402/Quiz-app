import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import HomePage from './component/HomePage';
import NewOrPrevious from './component/NewOrPrevious';
import Form from './component/Form';
import ScoreTable from './component/ScoreTable';
import Price from './component/Price';
import QNA from './component/QNA';
import Winstep from './component/Winstep';
import Winner from './component/Winner';
import NotFound from './component/NotFound';

function App() {

  return (
    <HashRouter>
      <div className=" custmize_container">
        <div className="w-100">
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/newOrPrevious' element={<NewOrPrevious/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/scoreTable' element={<ScoreTable/>}/>
            <Route path='/qna' element={<QNA/>}/>
            <Route path='/winstep' element={<Winstep/>}/>
            <Route path='/winner' element={<Winner/>}/>
            <Route path='/price' element={<Price/>}/> 
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
    
  )
}

export default App
