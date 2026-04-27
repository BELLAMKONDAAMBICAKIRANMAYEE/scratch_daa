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
      await axios.post( `${import.meta.env.VITE_API_URL}/api/auth/signup`, form);

      setMsg("✅ Signup successful");
      navigate("/login"); // 👉 go to login
    } catch (err) {
      setMsg(err.response?.data?.msg || "❌ Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <style>
        {
          `
          form{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          
          }
          input{
          border:0.7px solid grey;
          border-radius:7px;
          width:500px;
          margin-top:10px;
          margin-bottom:10px;
          padding:7px;}
          .hi{
          border-radius:7px;
          width:500px;
          margin-top:10px;
          margin-bottom:10px;
          padding:7px;
          }
          `
        }
      </style>
      <h2>Signup</h2>

      {msg && <p>{msg}</p>}

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />

      <button className="hi">Signup</button>

      {/* 🔗 Login link */}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default Signup;