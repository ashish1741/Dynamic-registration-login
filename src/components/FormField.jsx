
 export default function FormField({ type, label, name, placeholder, onChange, checked }) {
    return (
      <div className="flex items-center my-2">
        <input
          type={type}
          name={name}
          checked={checked}
          onChange={onChange}
          required
          placeholder={placeholder}
          className="w-[50%] p-2 rounded outline-none shadow-md text-gray-500 focus:border-blue-500 focus:outline-1"
        />
        <label htmlFor={name} className="text-gray-700 font-semibold ml-2">
          {label}
        </label>
      </div>
    );
  }
  