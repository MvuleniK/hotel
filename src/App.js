// import logo from './logo.svg';
// import './App.css';
import Loginuser from './components/Loginuser';
import Homepage  from './components/Homepage';
import Registeruser from './components/Registeruser';
import RoomA from './components/rooms/RoomA';
import Addproduct from './components/Addproduct';
import Dashboard from './components/Dashboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Allroom from './components/Allroom';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<Homepage/>} />
          <Route exact path = '/homepage' element = {<Homepage/>}/>
          <Route exact path = '/registeruser' element = {<Registeruser/>}/>
          <Route exact path = '/loginuser' element = {<Loginuser/>}/>
          <Route exact path = '/roomA' element = {<RoomA/>}/>
          <Route exact path = '/addproduct' element = {<Addproduct/>}/>
          <Route exact path = '/allRoom' element = {<Allroom/>}/>
          <Route exact path = '/dashboard' element = {<Dashboard/>}/>
          <Route exact path = '/payment' element = {<Payment/>}/>
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
