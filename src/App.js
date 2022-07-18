// import logo from './logo.svg';
// import './App.css';
import Loginuser from './components/Loginuser';
import Homepage  from './components/Homepage';
import Registeruser from './components/Registeruser';
import RoomA from './components/rooms/RoomA';
import Addproduct from './components/Addproduct';
import Dashboard from './components/Dashboard';
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
          <Route exact path = '/dashboard' element = {<Dashboard/>}/>
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
