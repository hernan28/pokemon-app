import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/system";

//StatBar uses normilizer to use stat value from 0 to 255
const MIN = 0;
const MAX = 255;
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

const colorMap = {
  1: "#de4141",
  2: "#f59700",
  3: "#f5c400",
  4: "#5a9c39",
  5: "#33aeaf",
};

const StatBar = ({ value }) => {
  const normaliseValue = Math.floor(normalise(value));

  const CustomizedLinearProgress = styled(LinearProgress)(() => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#e9e8e7",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor:
        normaliseValue <= 19
          ? colorMap[1]
          : normaliseValue <= 39
          ? colorMap[2]
          : normaliseValue <= 59
          ? colorMap[3]
          : normaliseValue <= 79
          ? colorMap[4]
          : colorMap[5],
    },
  }));

  return (
    <CustomizedLinearProgress value={normaliseValue} variant="determinate" />
  );
};

export default StatBar;
