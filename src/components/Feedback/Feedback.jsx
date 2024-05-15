import styles from "./Feedback.module.css"

const Feedback = ( {optionsType, totalFeedback, positiveFeedback} ) => {
 
  return (
    <div className={styles.feedback}>
      
      <ul className={styles.list}>
        <li className={styles.listItem}>Good: {optionsType.good}</li>
        <li className={styles.listItem}>Neutral: {optionsType.neutral} </li>
        <li className={styles.listItem}>Bad: {optionsType.bad} </li>
      </ul>
      <h2 className={styles.title}>Feedback Statistics</h2>
      <p className={styles.feed}>Total Feedback: {totalFeedback}</p>
      <p className={styles.feed}>Percentage of Positive Feedback: {positiveFeedback}%</p>
    </div>
  )
}

export default Feedback
