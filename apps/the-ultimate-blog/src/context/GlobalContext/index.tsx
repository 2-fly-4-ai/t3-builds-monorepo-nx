// This code imports two modules from the 'react' library: 'createContext' and 'useState'
import React, { createContext, useState } from "react";

// This line defines a new TypeScript type named 'GlobalContextType' which specifies the structure of the object that will be used as the value for the 'GlobalContext' context.
type GlobalContextType = {
  isWriteModalOpen: boolean;
  setIsWriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// This line creates a new context object using the 'createContext' method from the 'react' library. It accepts an argument that specifies the initial value for the context. In this case, it sets the initial value to an empty object of type 'GlobalContextType'.
export const GlobalContext = createContext<{
  isWriteModalOpen: boolean;
  setIsWriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>(null as unknown as GlobalContextType);

// This line exports a new React component named 'GlobalContextProvider', which accepts children as a prop. This component is responsible for providing the context value to its children components.
export function GlobalContextProvider({ children }: React.PropsWithChildren) {
  // This line initializes a new state variable named 'isWriteModalOpen' with the initial value of 'false'.
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // This line returns the 'GlobalContext' context provider with a value object that contains the current values of 'isWriteModalOpen' and 'setIsWriteModalOpen' state variables.
  // The children components will be wrapped in the 'GlobalContextProvider' component and will be able to access the context values.
  return (
    <GlobalContext.Provider value={{ isWriteModalOpen, setIsWriteModalOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
