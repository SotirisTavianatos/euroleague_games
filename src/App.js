import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes }  
    from 'react-router-dom'; 
  
import Quiz from './pages/Quiz' 
import Results from './pages/Results' 
  
const App = () => ( 
    <Router> 
        <Routes> 
            <Route exact path="/" element={<Quiz />} /> 
            <Route path="/results" element={<Results />} /> 
        </Routes> 
    </Router> 
); 
  
export default App;
