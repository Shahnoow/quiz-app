export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index} </strong> / {numQuestions}
      </p>
      <h5>
        <strong>{points}</strong> / {maxPossiblePoints}
      </h5>
    </header>
  );
}
