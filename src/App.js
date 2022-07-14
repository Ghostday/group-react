import './App.css';
import MainBody from './components/Main.jsx'
import NavBar from './components/navbar/NavBar'
import PopulateList from './components/populateList/PopulateList';

function App() {
  const myLinks = ["Platypod", "Gryffindor", "Code Club"]
  return (
    <div className="App">
      <nav className="navbar-container">
        <NavBar links={myLinks} />
      </nav>
      <header className="App-header">
        <MainBody />
      </header>
      < PopulateList/>
    </div>
  );
}

export default App;
