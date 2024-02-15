// Button.jsx
import useColor from "../context/color";

const Button = ({ color }) => {
  const { handleColorClick } = useColor();

  // Remove the handleColorClick function definition here

  return (
    <button
      onClick={() => handleColorClick(color)}
      className="outline-none px-4 py-4 rounded-full text-white shadow-lg text-black font-bold rounded-full"
      style={{ backgroundColor: color }}
    >
      {}
    </button>
  );
};

export default Button;
