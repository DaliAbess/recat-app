import './App.css';

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import ReservationList from './ReservationList';
import AppartementDetails from './AppartementDetails';
import AddAppartement from './AddAppartement'; 

import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <div style={{width:"90%" ,margin:"0px"}}>
       
      <Router>
      <Routes>
      <Route path="/apps/add" element={<AddAppartement/>} />
      <Route path="/apps" element={<ReservationList/>} />
      <Route path="/apps/:id" element={<AppartementDetails/>} />
        
  
        
        </Routes>
        </Router>
        
        </div>
      </header>

      <Footer/>
    </div>
  );
}

export default App;
