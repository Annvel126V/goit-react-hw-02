const Feedback = ({ feedback, positiveFeedbackPercentage }) => {
  return (
    <div>
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
