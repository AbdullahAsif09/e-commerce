import './App.css';
import Home from './Pages/Home/Home';
import PageProduct from './Pages/Products/PageProduct';
import Shopping from './Pages/Shopping/Shopping';
import Signup from './Pages/Signup/Signup';
import SingleProduct from './Pages/Singleproduct/SingleProduct';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from './Pages/Login/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/products/:category" element={<PageProduct />} />
        </Routes>
        <Routes>
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Shopping />} />
        </Routes>
      </Router>
       {/* <PageProduct /> */}
    </div>
  );
}

export default App;
