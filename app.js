const MINUS = "minus";
const PLUS = "plus";
const RESET = "reset";

const App = (props) => {
  const [count, setCount] = React.useState(props.count);
  const [result, setResult] = React.useState(props.result);

  const handleOnClick = (type, number) => {
    if (type === "minus") {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === "plus") {
      setCount(count + 1);
      setResult(result + number);
    } else if (type === "reset") {
      setCount(count + 1);
      setResult(props.result);
    }
  };
  return (
    <>
      <MathButton click={handleOnClick} name="-10" type={MINUS} number={10} />
      <MathButton click={handleOnClick} name="-1" type={MINUS} number={1} />
      <MathButton click={handleOnClick} name="Reset" type={RESET} />
      <MathButton click={handleOnClick} name="1" type={PLUS} number={1} />
      <MathButton click={handleOnClick} name="10" type={PLUS} number={10} />
      <ResultPanel count={count} result={result} />
    </>
  );
};

const MathButton = ({ click, name, number, type }) => {
  const handleOnClick = () => click(type, number);
  return (
    <button onClick={handleOnClick} type={type} number={number}>
      {name}
    </button>
  );
};
const ResultPanel = ({ count, result }) => {
  const additionalInfo =
    count > 10 ? <span>Przeciążenie procesora</span> : null;
  return (
    <>
      <h1>
        Liczba kliknięć: {count} {additionalInfo}
      </h1>
      <h1>Wynik: {result}</h1>
    </>
  );
};

const count = 0;
const result = 0;

ReactDOM.render(
  <App count={count} result={result} />,
  document.getElementById("root")
);
