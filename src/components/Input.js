export default function Input({ type, required, value, onChange }) {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-80 px-3 py-1 rounded-sm border"
    />
  );
}

// 💡 위 코드와 동일
// export default function Input(props) {
//   return <input {...props} className="w-80 px-3 py-1 rounded-sm border" />;
// }
