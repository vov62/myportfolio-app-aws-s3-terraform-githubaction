import React from "react";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Skills from "./component/Skills/Skills";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import ChatCtrl from "./component/Chat/ChatCtrl";
import Projects from "./component/Projects/Projects";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* <ChatCtrl /> */}
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
