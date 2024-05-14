
// import { useEffect } from "react";

const Feedback = ( {optionsType} ) => {
  const { good, neutral, bad } = optionsType;
    
    

 

    // useEffect(() => {
    //     document.title = `You clicked ${clicks} times`;
    //   },[clicks]);


  return (
    <div>
    
      <ul>
        <li>Good: {good}</li>
        <li>Neutral:{neutral} </li>
        <li>Bad:{bad} </li>
      </ul>
    </div>
  )
}

export default Feedback
