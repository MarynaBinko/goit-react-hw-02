
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import { useState } from "react";

function App() {
  const [optionsType, setOptionsType] = useState({
    good: 0,
    neutral: 0,
    bad: 0
});

const handleGoodClick = ()=>{
  setOptionsType((prevOptionsType) => ({
  ...prevOptionsType,
  good: prevOptionsType.good + 1
}))};

const handleNeutralClick = ()=>{
setOptionsType((prevOptionsType) => ({
  ...prevOptionsType,
  neutral: prevOptionsType.neutral + 1
}))};


const handleBadClick = ()=>{
setOptionsType((prevOptionsType) => ({
  ...prevOptionsType,
  bad: prevOptionsType.bad + 1
}))
}

  return (
    <>
     <Description />
     <Options  handleGoodClick={handleGoodClick} 
               handleNeutralClick={handleNeutralClick} 
               handleBadClick={handleBadClick} />
     <Feedback optionsType={optionsType} />
    </>
  )
}

export default App
