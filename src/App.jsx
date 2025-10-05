import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Section from "./components/section";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <Navbar />
      {/* Truyền selectedMovie xuống Hero */}
      <Hero movie={selectedMovie} />
      {/* Truyền hàm setSelectedMovie xuống Section */}
      <Section title="New Release" onSelectMovie={setSelectedMovie} />
    </>
  );
}

export default App;
