
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

  const updateFeedback = feedbackType => {
    setOptionsType(prevOptionsType => ({
      ...prevOptionsType,
      [feedbackType]: prevOptionsType[feedbackType] + 1
    }));
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback optionsType={optionsType} />
    </div>
  );
}



export default App
