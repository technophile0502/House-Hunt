export default function Login() {
  return (
    <div className="max-w-md w-full bg-white p-12 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-3 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-6 p-3 border rounded-lg"
      />
      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
        Login
      </button>
    </div>
  );
}
