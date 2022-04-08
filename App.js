import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import Signin from './Signin';
import Admin from './Admin';
import Login from './Login';
import Feedback from './Feedback';
import Gallery from './Gallery';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Home />}/>
          <Route exact path = "/Home" element = {<Home />}/>
          <Route exact path = "/Signin" element = {<Signin />}/>
          <Route exact path = "/Admin" element = {<Admin />}/>
          <Route exact path = "/Login" element = {<Login />}/>
          <Route exact path = "/Feedback" element = {<Feedback />}/>
          <Route exact path = "/Gallery" element = {<Gallery />}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
