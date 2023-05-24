import { Routes, Route } from "react-router-dom";
import Home from "./component/home"
import Page1 from "./routes/page1";
import Page2 from "./routes/page2";
import Page3 from "./routes/page3";


// import Navbar from "./component/Navbar"


function App() {

  return (
    <>

    

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
      </Routes>
      

    </>

  );
}

export default App;