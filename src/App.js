import './App.css';
import "./Responsive.css";
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./router/Router";
import 'react-toastify/dist/ReactToastify.css';

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
