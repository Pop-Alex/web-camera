import React, { useEffect, useState, createRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import VideoSection from "./components/VideoSection";
import { Loader } from "@react-three/drei";
import { loaderIcon } from "./utils";
import Footer from "./components/Footer";
import locomotiveScroll from "locomotive-scroll";
/* import Sidebar from "./components/Sidebar"; */
function App() {
  const [loading, setLoading] = useState(true);

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: " 100%",
    height: "100%",
  };
  const innerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "500px",
  };
  const barStyles = {
    width: "250px",
  };
  const dataStyles = {
    display: "none",
  };
  useEffect(() => {
    const fetch = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    fetch();
  }, []);
  return loading ? (
    <Loader
      /* barStyles={barStyles} */
      innerStyles={innerStyles}
      containerStyles={containerStyles}
      dataStyles={dataStyles}
    />
  ) : (
    <main className="bg-black">
      {/*  <Sidebar /> */}

      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <VideoSection />
      <Footer />
    </main>
  );
}

export default App;
