import { Link } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">

      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/quiz">Quiz</Link>

      {/* ✅ FIX: give default topic */}
      <Link to="/coding">Code</Link>

    </nav>
  );
}

export default Navbar;