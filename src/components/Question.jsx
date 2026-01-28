function Question({ data, onAnswer }) {
  return (
    <div className="question">
      <h2>{data.question}</h2>

      <div className="options">
        {data.options.map((option) => (
          <button
            key={option}
            className="option-btn"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
