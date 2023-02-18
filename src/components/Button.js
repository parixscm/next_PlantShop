export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="px-4 py-2 rounded-sm text-gray-100 bg-green-500 hover:bg-green-600"
    >
      {children}
    </button>
  );
}
