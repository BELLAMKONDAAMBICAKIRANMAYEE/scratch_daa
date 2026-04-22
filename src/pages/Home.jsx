import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Python Learning with Scratch_daa..😎</h1>

      <div className="card">
        <h2>Explore Topics</h2>
        <Link to="/topics"><button>Start Learning</button></Link>
      </div>

      <div className="card">
        <h2>Take Quiz</h2>
        <Link to="/quiz"><button>Start Quiz</button></Link>
      </div>
    </div>
  );
}

export default Home;