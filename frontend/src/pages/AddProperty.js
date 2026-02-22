import { useState } from "react";
import api from "../utils/api";

export default function AddProperty() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/properties", form);
    alert("Property Added!");
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Title"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Location"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <input
          placeholder="Price"
          className="w-full p-3 border rounded"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
