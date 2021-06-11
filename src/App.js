import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';


function App() {
  const title = 'Welcome to Imagination Station';

  return (
    <div className="App">
      <h1>{ title }</h1>
       <Navbar /> 
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
