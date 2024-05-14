
const Options = ({handleGoodClick, handleNeutralClick, handleBadClick}) => {



  return (
    <div>
      <button onClick= {handleGoodClick}>Good</button>
      <button onClick= {handleNeutralClick}>Neutral</button>
      <button onClick= {handleBadClick}>Bad</button>
    </div>
  )
}

export default Options
