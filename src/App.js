import React,{useEffect,useState} from 'react';
import './App.css';
import "./Responsive.css";
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./router/Router";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubscribeModal from './components/widgets/SubscribeModal';

function App() {

  const [showModal,setShow] = useState(false)

  useEffect(()=>{

    setTimeout(()=>{
      setShow(true)
    }, 2000)

  },[])

  return (

    <div className="App">
        <Router>
            <Routes/>
        </Router>
        <ToastContainer />
        <SubscribeModal subsModal={{showModal,setShow}}/>
    </div>

  );
  
}

export default App;
