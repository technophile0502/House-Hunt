import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/api";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await api.get(`/properties/${id}`);
      setProperty(res.data);
    };
    fetchProperty();
  }, [id]);

  if (!property) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10">
      <img
        src="/images/house1.jpg"
        alt={property.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-indigo-600 text-2xl font-bold">{property.price}</p>
    </div>
  );
}
