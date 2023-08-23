import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<AboutUs />}></Route>
        <Route path='/work' element={<OurWork />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
