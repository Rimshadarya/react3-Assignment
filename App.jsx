import React from "react";
import { Data } from "./Data";
import Card from "../src/Component/Card/Card";

const App = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {Data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default App;
