import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">
        <Link to="/">HouseHunt</Link>
      </h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/login" className="hover:text-indigo-600">Login</Link>
        <Link
          to="/signup"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
