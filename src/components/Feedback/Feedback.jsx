import s from "./Feedback.module.css";
const Feedback = ({ feedback, positiveFeedbackPercentage }) => {
  return (
    <div className={s.wrap}>
      <ul>
        <li>Good: {feedback.good} </li>
        <li>Netural: {feedback.neutral} </li>
        <li>Bad: {feedback.bad} </li>
        <li>positive: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
