import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import thoughts from "../data/Thoughts.json";

function Home() {
  // extract only text
  const texts = thoughts.map(item => item.text);

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // random quote
      const randomIndex = Math.floor(Math.random() * texts.length);
      setQuoteIndex(randomIndex);
    }, 20000); // 10 minutes

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="container">

      <h1>Python Learning with Scratch_daa..😎</h1>

      {/* 🔥 Motivational Quote */}
      <p style={{
        fontStyle: "italic",
        marginBottom: "20px",
        color: "#555"
      }}>
        "{texts[quoteIndex]}"
      </p>

      <div className="card">
        <h2>Explore Topics</h2>
        <Link to="/topics">
          <button>Start Learning</button>
        </Link>
      </div>

      <div className="card">
        <h2>Take Quiz</h2>
        <Link to="/topics">
          <button>Start Quiz</button>
        </Link>
      </div>

    </div>
  );
}

export default Home;