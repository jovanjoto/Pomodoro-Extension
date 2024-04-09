import logo from "./logo.svg";
import "./App.css";
import "./components/TimeButton";
import TimeButton from "./components/TimeButton";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-light-pink">
        Pomodoro Extension
      </h1>
      <TimeButton prompt="Start" />
    </div>
  );
}

export default App;
