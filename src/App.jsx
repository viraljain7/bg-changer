// App.jsx
import { useState } from "react";
import "./App.css";
import { ColorContextProvider } from "./context/color";
import Button from "./component/Button";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("yellow");

  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <ColorContextProvider value={{ handleColorClick }}>
      <div className="w-full h-screen" style={{ background: backgroundColor }}>
        <h3 className="font-bold text-2xl text-black py-3">
          Background Changer
        </h3>
        <div className="color-container fixed flex justify-center p-3 items-center bottom-3 inset-x-9 bg-white rounded-full gap-3 px-4">
          <Button color="red" />
          <Button color="blue" />
          <Button color="green" />
          <Button color="yellow" />
          <Button color="orange" />
          <Button color="purple" />
          <Button color="pink" />
          <Button color="teal" />
          <Button color="cyan" />
          <Button color="indigo" />
        </div>
      </div>
    </ColorContextProvider>
  );
}

export default App;
