import React, { useState } from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Introduce = () => {
    const difficulty=["easy","medium","hard"]
    const [difficultyChange,setDifficultyChange]=useState('easy')
    const navigate=useNavigate()
    const TOTAL_QUESTİONS=10

    const startQuiz=()=>{
        if(difficultyChange){
            navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
        }
    }
  return (
    <div className='introduce'>
        <div className="introduce-container">
            <img src='https://img.freepik.com/premium-vector/quiz-time_690577-160.jpg' alt="" />
            <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
            <div onClick={startQuiz} className='introduce-btn'>Başla</div>
        </div>
    </div>
  )
}

export default Introduce