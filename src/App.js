import './App.css';
import MainBody from './components/Main.jsx'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <div className="App">
      <nav className="navbar-container">
        < NavBar />
      </nav>
      <header className="App-header">
        <MainBody />
      </header>
    </div>
  );
}

export default App;
