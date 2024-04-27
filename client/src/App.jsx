
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./page/Home";
import About from "./page/About";
import Register from "./page/Register";
import Login from "./page/Login";
import DashBoard from "./page/DashBoard";
import Header from "./components/Header";
import Footer  from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
