import React, { useState } from "react";

// This is the Show Details Button example, we may need to make changes in the future to make the real action, lets stay with this for now as example
const DetailsButton = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <button
      style={{
        borderRadius: 5,
        backgroundColor: "#33aeaf",
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
        border: "none",
        fontSize: 13,
        padding: "10px 15px",
        letterSpacing: 0.5,
      }}
      onClick={() => setIsDetailsOpen(!isDetailsOpen)}
    >
      {isDetailsOpen ? "Hide Details" : "Show Details"}
    </button>
  );
};

export default DetailsButton;
