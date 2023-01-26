import React from "react";
import TypeButton from "../TypeButton";

export default {
  title: "Buttons/TypeButton",
  component: TypeButton,
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => <TypeButton typeName={"normal"} />;
