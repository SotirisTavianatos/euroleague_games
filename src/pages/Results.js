import * as React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
function Results() {
  const navigate = useNavigate(); 
  const location=useLocation();
  const handleClick = () => navigate('/'); 
  return ( 
    <div> 
        <h1>your final score is {location.state.score.toString()}</h1> 
        <button type="button" onClick={handleClick}> 
                Home Page 
        </button> 
    </div> 
  ) 
} 
  export default Results;