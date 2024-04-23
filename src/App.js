import './App.css';

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import ReservationList from './ReservationList';
import AppartementDetails from './AppartementDetails';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"90%" ,margin:"0px"}}>
       
      <Router>
      <Routes>
      
      <Route path="/apps" element={<ReservationList/>} />
      <Route path="/apps/:id" element={<AppartementDetails/>} />
        
  
        
        </Routes>
        </Router>
        </div>
      </header>


    </div>
  );
}

export default App;
