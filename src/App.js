import './App.css';
import "./Responsive.css"
import Home from './pages/Home';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./router/Router"

function App() {

  return (

    <div className="App">
        <Router>
            <Routes/>
        </Router>
    </div>

  );
  
}

export default App;
