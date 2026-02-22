import { Link } from "react-router-dom";

export default function PropertyCard({ id, image, title, price, location }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300">
      
      {/* Property Image */}
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      {/* Property Info */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        
        <p className="text-gray-500 mb-2">{location}</p>
        
        <p className="text-indigo-600 text-lg font-bold mb-4">
          {price}
        </p>

        <Link
          to={`/property/${id}`}
          className="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
