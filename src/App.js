import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

import Cart from "./pages/Cart";

// creating App component -
// Wrapping hierarchy => Router -> Switch -> Route -> Content
// Overall wrapped by react fragment/div.
// So <Route> takes props/information
const App = () => {
  return (
    <>
      <Router>
        {/* rendering Navbar component */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
};

// exporting the App component - so that it can reuse.
export default App;
