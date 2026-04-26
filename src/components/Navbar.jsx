import { useNavigate } from "react-router-dom";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  // ✅ get name
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name"); // ✅ clear name too
    navigate("/signup");
  };

  return (
    <nav className="navbar">
      <button onClick={toggleSidebar}>☰</button>

      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/topics")}>Topics</button>
      <button onClick={() => navigate("/coding")}>Code</button>

      {/* ✅ show name at end */}
      <span style={{ marginLeft: "auto", marginRight: "10px" }}>
        👤 {name}
      </span>

      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;