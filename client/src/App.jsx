import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";



function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>          
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/sign-up" element={<Signup />}></Route>
                <Route path="/sign-in" element={<Signin />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
