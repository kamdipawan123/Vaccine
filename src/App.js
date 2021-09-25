
import './App.css';
import { Route } from "react-router-dom";
import Vaccine from './Components/Vaccine';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import RegistrationForm from './Components/RegistrationForm';
import LogIn from './Components/LogIn';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route >
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/RegistrationForm">
        <RegistrationForm />
      </Route>
      <Route path="/LogIn">
        <LogIn />
      </Route>

    </div>
  );
}

export default App;
