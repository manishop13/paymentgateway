import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
 import PaymentSuccess from "./PaymentSuccess";
import "./App.css"
import About from"./About.js"
function App() {
  return (
    <Router>
      <Routes>
   
       <Route path="/" element={<Home />} /> 
       <Route path="/Paymentsuccess" element={<PaymentSuccess />} /> 
       <Route path="/About" element={<About/>} /> 
      </Routes>
    </Router>
  );
}

export default App;