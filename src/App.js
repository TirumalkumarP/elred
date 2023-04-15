import './App.css';
import SideMenu from './components/SideMenu';
import Body from './components/Body';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <div className='nav-bar'>

      <NavBar/>
      </div>
      <div><SideMenu/></div>
      <div><Body/></div>
    </div>
  );
}

export default App;
