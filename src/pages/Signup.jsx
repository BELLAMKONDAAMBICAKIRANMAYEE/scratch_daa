import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://scratchbackend-2.onrender.com/api/auth/signup", form);

      setMsg("✅ Signup successful");
      navigate("/login"); // 👉 go to login
    } catch (err) {
      setMsg(err.response?.data?.msg || "❌ Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>

      {msg && <p>{msg}</p>}

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />

      <button>Signup</button>

      {/* 🔗 Login link */}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default Signup;