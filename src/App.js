import logo from './logo.svg';
import './App.css';
import Parent from "./components/parent/parent"
import Hook from "./components/hooks/hook"
import Nav from "./components/nav/index"

function App() {
  return (
    <>
      <Nav />

      <div className="App">
        <Hook></Hook>
        <Parent></Parent>
      </div>
    </>
  );
}

export default App;
