import globe from './globe.png';
import logo from './logo.png';
import './App.css';
import Playbar from './components/playbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>LOREM IPSUM</p>
        <img src={logo} className="logo" alt="logo" />
        <p>☛ Click begin to get started</p>
      </header>
      <img src={globe} className="Globe" alt="Globe" />
      <Playbar />
    </div>
  );
}

export default App;
