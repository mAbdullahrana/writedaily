"use client";

import { createContext, useContext, useOptimistic, useState } from "react";

const CRUDContext = createContext();


function CRUDContextProvider({ children }) {
  const [optimisticEntries, optimisticEntriesDelete] = useOptimistic(
    entries,
    (curEntries, entrieID) => {
      return curEntries.filter((entrie) => entrie.id !== entrieID);
    }
  );
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <CRUDContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </CRUDContext.Provider>
  );
}

function useCRUDContext() {
  const context = useContext(CRUDContext);
  if (context === undefined)
    throw new Error(
      "Used ReservationContext outside of Provider. The context can only be used in children of the Provider"
    );

  return context;
}

export { useCRUDContext, CRUDContextProvider };
