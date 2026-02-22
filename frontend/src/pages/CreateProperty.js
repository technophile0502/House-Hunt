import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function CreateProperty() {
  const [form, setForm] = useState({
    title: "",
    type: "",
    address: "",
    rent: "",
    bedrooms: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/properties", form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
      <input placeholder="Type" onChange={(e)=>setForm({...form,type:e.target.value})}/>
      <input placeholder="Address" onChange={(e)=>setForm({...form,address:e.target.value})}/>
      <input placeholder="Rent" onChange={(e)=>setForm({...form,rent:e.target.value})}/>
      <input placeholder="Bedrooms" onChange={(e)=>setForm({...form,bedrooms:e.target.value})}/>
      <input placeholder="Description" onChange={(e)=>setForm({...form,description:e.target.value})}/>
      <button type="submit">Create Property</button>
    </form>
  );
}

export default CreateProperty;
