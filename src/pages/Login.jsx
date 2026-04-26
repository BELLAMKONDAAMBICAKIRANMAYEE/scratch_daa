import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://scratchbackend-2.onrender.com/api/auth/login",
        form
      );

      // 🔍 DEBUG (VERY IMPORTANT)
      console.log("API RESPONSE:", res.data);

      // ✅ Safety check
      if (!res.data.user || !res.data.user.name) {
        setMsg("❌ Name not received from server");
        return;
      }

      // ✅ Store data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);

      console.log("Saved name:", res.data.user.name);

      // ✅ Redirect
      navigate("/home");

    } catch (err) {
      console.log("LOGIN ERROR:", err);
      setMsg(err.response?.data?.msg || "❌ Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {msg && <p style={{ color: "red" }}>{msg}</p>}

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button>Login</button>

      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </form>
  );
}

export default Login;