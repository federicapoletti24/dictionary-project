import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Online Dictionary</h1>
        <h3>Write a word and press enter</h3>
      </header>
      <main>
       <Dictionary /> 
      </main>
      <footer>
        <a href="https://github.com/federicapoletti24/dictionary-project" >Open source code</a> by Federica Poletti
        </footer> 
      </div>
    </div>
  );
}


