import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/storeConfig/store'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </PersistGate>
  );
}

export default App;
