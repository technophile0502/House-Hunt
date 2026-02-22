import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";
import api from "../utils/api";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get("/properties");
        console.log("PROPERTIES:", res.data);
        setProperties(res.data);
      } catch (err) {
        console.error("API ERROR:", err);
        setError("Failed to fetch properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter by location or title
  const filtered = properties.filter((property) => {
    if (!search) return true;
    const lowerSearch = search.toLowerCase();
    return (
      property.location?.toLowerCase().includes(lowerSearch) ||
      property.title?.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-lg opacity-90">
          Discover properties in Hyderabad, Goa, and more
        </p>

        <div className="max-w-2xl mx-auto mt-8">
          <SearchBar onSearch={setSearch} />
        </div>
      </div>

      {/* PROPERTY SECTION */}
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading properties...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">
            No properties found for "{search}"
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((property) => (
              <PropertyCard
                key={property._id}
                id={property._id}
                image={property.image ? property.image : "/images/house1.jpg"}
                title={property.title}
                location={property.location}
                price={property.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
