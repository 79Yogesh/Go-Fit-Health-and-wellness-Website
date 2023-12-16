import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import Footer from "./footer/Footer"; 
import './App.css';
import { AboutUs } from "./components/AboutUs";
import { Programs } from "./components/Programs";
import { ContactUs } from "./components/Contactus/ContactUs";
import { Dashboard } from "./components/Dashboard";
import { LoginForm } from "./Login/LoginForm";
import Signup from "./SignUp/Signup";


function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/programs" element={<Programs/>}></Route>
         <Route path="/contactus" element={<ContactUs/>}></Route> 
          <Route path="/login" element={<LoginForm></LoginForm>}></Route>
          <Route path="/dashboard/:email" element={<Dashboard/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>    
  );
}

export default App;
