import React from "react";
import Medical from "./pages/medical";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/subComponents/footer";
import Header from "./components/subComponents/header";

const App = () => {
  return (
    <div>
      {/* <FirstSection /> */}
      {/* <Test /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/medical" element={<Medical />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
