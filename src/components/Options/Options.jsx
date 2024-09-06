import s from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <ul className={s.button}>
        <button onClick={() => updateFeedback("good")}>Good</button>

        <button onClick={() => updateFeedback("neutral")}>Neutral</button>

        <button onClick={() => updateFeedback("bad")}>Bad</button>

        {totalFeedback && <button onClick={resetFeedback}>Reset</button>}
      </ul>
    </>
  );
};

export default Options;
