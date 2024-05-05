import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Register from "./page/Register";
import Login from "./page/Login";
import DashBoard from "./page/DashBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import CreatePost from "./page/CreatePost";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
        <Route element={<AdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
         
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
