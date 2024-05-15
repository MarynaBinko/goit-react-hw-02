import styles from "./Options.module.css"


const Options = ({ updateFeedback, totalFeedback, handleReset }) => {



  return (
    <div className={styles.options}>
      <button className={styles.btnClick} onClick= {() => updateFeedback("good")}>Good</button>
      <button className={styles.btnClick} onClick= {() => updateFeedback("neutral")}>Neutral</button>
      <button className={styles.btnClick} onClick= {() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={styles.btnClick} onClick={handleReset}>Reset</button>
      )}
    </div>
  )
}

export default Options
