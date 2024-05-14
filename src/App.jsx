
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options'
import { useState, useEffect } from "react";

function App() {
   
   const initialState = () => {
    const storedState = localStorage.getItem("feedbackState");
    if (storedState) {
      return JSON.parse(storedState);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }
  };

  const [optionsType, setOptionsType] = useState(initialState);
 

  const totalFeedback = optionsType.good + optionsType.neutral + optionsType.bad;
  const positiveFeedback = Math.round((optionsType.good / totalFeedback) * 100);

  useEffect(() => {
        localStorage.setItem("feedbackState", JSON.stringify(optionsType));
  }, [optionsType]);

  const updateFeedback = feedbackType => {
    setOptionsType(prevOptionsType => ({
      ...prevOptionsType,
      [feedbackType]: prevOptionsType[feedbackType] + 1
    }));
  };

  const handleReset = () => {
    setOptionsType({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <div>
    <Description />
    <Options  updateFeedback={updateFeedback}
              totalFeedback={totalFeedback}
              handleReset={handleReset} />
    
    {totalFeedback > 0 ? (
        <>
          <Feedback optionsType={optionsType}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback} />
         
        </>
      ) : (
        <Notification />
      )}
   
    
  </div>
  );
}



export default App
