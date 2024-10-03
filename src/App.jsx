import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/address" element={<Address />} />
      </Routes>
      <Nav />
    </div>
  );
};

export default App;
