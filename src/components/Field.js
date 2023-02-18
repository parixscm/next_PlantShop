export default function Field({ label, children }) {
  return (
    <label className="space-x-6">
      <span className="text-sm text-gray-600">{label}</span>
      {children}
    </label>
  );
}
