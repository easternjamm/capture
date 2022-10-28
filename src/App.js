import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<AboutUs />}></Route>
        <Route path='/work' exact element={<OurWork />}></Route>
        <Route path='/work/:id' element={<MovieDetail />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
