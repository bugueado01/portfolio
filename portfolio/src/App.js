// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Projects from "./components/Projects/Projects";
import SkillsCard from "./components/SkillsCard/SkillsCard";

function App() {
  return (
    <>
      <Header />
      <ProfileCard />
      <SkillsCard />
      <Projects />
      <Footer />
    </>
      
  );
}

export default App;
