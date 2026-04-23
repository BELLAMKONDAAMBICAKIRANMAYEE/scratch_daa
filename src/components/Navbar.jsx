import { Link } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      
      {/* ☰ Mobile Menu */}
      <button className="menu-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/quiz">Quiz</Link>
    </nav>
  );
}

export default Navbar;