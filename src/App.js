import './App.css';
import MainBody from './components/Main.jsx'
import NavBar from './components/navbar/NavBar'
import PopulateList from './components/populateList/PopulateList';

function App() {
  return (
    <div className="App">
      <nav className="navbar-container">
        < NavBar />
      </nav>
      <header className="App-header">
        <MainBody />
      </header>
      < PopulateList/>
    </div>
  );
}

export default App;
