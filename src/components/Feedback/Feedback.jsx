
// import { useEffect } from "react";

const Feedback = ( {optionsType, totalFeedback, positiveFeedback} ) => {
 
    

 

    // useEffect(() => {
    //     document.title = `You clicked ${clicks} times`;
    //   },[clicks]);


  return (
    <div>
      
      <ul>
        <li>Good: {optionsType.good}</li>
        <li>Neutral:{optionsType.neutral} </li>
        <li>Bad:{optionsType.bad} </li>
      </ul>
      <h2>Feedback Statistics</h2>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Percentage of Positive Feedback: {positiveFeedback}%</p>
    </div>
  )
}

export default Feedback
