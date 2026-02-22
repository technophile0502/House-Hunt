import { useState } from "react";
import api from "../utils/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Logged in!");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white p-12 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
