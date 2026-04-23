import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      
      {/* ☰ Menu Button */}
      <button onClick={() => setIsOpen(true)}>☰ Topics</button>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <h1>Python Learning with Scratch_daa..😎</h1>

      <div className="card">
        <h2>Explore Topics</h2>
        <Link to="/topics">
          <button>Start Learning</button>
        </Link>
      </div>

      <div className="card">
        <h2>Take Quiz</h2>

        {/* ✅ FIX: go to topics instead of /quiz */}
        <Link to="/topics">
          <button>Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;