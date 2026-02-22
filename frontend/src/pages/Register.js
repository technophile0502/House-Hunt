import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "tenant",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/users/register", form);
    localStorage.setItem("token", data.token);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})} />

      <select onChange={(e) => setForm({...form, role: e.target.value})}>
        <option value="tenant">Tenant</option>
        <option value="owner">Owner</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
