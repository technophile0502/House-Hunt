import { useEffect, useState } from "react";
import API from "../utils/api";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    API.get("/properties").then((res) => setProperties(res.data));
  }, []);

  const bookProperty = async (id) => {
    await API.post("/bookings", { propertyId: id });
    alert("Booked!");
  };

  return (
    <div>
      <h2>All Properties</h2>
      {properties.map((p) => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.address}</p>
          <p>₹{p.rent}</p>
          <button onClick={() => bookProperty(p._id)}>Book</button>
        </div>
      ))}
    </div>
  );
}

export default Properties;
