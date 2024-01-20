import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './components/Home';
import Header from './components/Header';
import Login from "./components/Login";
import Form from "./components/signup components/Form";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/' element={[<Header />, <Home />]}>

          </Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/signUp" element={<Form />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
