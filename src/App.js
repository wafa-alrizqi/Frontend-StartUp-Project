import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Update from './components/Update';
import EmSignup from "./components/EmSignup";
import Nav from "./components/Nav"
import Contact from "./components/Contact";
import {HashLink as Link} from "react-router-hash-link"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/Home" exact element={<Home />}></Route>
          <Route path="/Update" exact element={<Update />}></Route>
          <Route path="/EmSignup" exact element={<EmSignup />}></Route>
          <Route path="/Nav" exact element={<Nav />}></Route>
          <Route path="/Contact" exact element={<Contact />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
