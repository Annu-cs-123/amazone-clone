import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/header' element={<Header />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
