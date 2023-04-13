import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NavbarAlt from "./components/NavbarAlt";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarAlt />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
