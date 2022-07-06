import React from "react";
import ListPackages from "./components/ListPackages";
import ProviderNpm from "./context/ProviderNpm";

const App: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: "3rem", textAlign: "center" }}>
        <h1>npm finder</h1>
      </div>
      <ProviderNpm>
        <ListPackages />
      </ProviderNpm>
    </>
  );
};

export default App;
