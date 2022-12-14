import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='kaka'>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          This is a trial for spring boot
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jaston Ruggy
        </a>

        {/* This is a new Link */}
        <a className='App-link kuku' href="https://toto.com" rel='noopener noreferrer' target="_blank">
          Jarred
        </a>

      </header>
    </div>
  );
}

export default App;
