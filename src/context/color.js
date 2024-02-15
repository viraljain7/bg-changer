import { createContext, useContext } from "react";

export const ColorContext = createContext({ backgroundColor: "yellow" });

export const ColorContextProvider = ColorContext.Provider;

export default function useColor() {
  return useContext(ColorContext);
}
