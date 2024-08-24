import React from "react";
const ViewContext = React.createContext({
  view: "main",
  setView: () => {},
});

export const ViewProvider = ViewContext.Provider;
export default ViewContext;
