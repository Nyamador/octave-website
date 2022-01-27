const Input = ({ ...props }) => {
  return (
    <div className="mt-10">
      <input
        {...props}
        className="w-full p-2 text-3xl text-white bg-transparent border-b-2 border-gray-500 outline-none focus:animate-bounce focus:border-white"
      />
      <label htmlFor={props.name} className="mt-2 text-sm text-gray-300">
        {props.label}
      </label>
    </div>
  );
};

export default Input;
