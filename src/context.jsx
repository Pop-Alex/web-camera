import React, { createContext, useState } from "react";

export const ContextApi = createContext({
  open: false,
  setOpen: () => {},
});

export const ContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const contextValue = {
    showModal,
    setShowModal,
    setSelected,
    selected,
    open,
    setOpen,
  };
  return (
    <ContextApi.Provider value={contextValue}>{children}</ContextApi.Provider>
  );
};
