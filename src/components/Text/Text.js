// @ts-nocheck
import React from "react";
import { Typography } from "@material-ui/core";

const Text = ({ variant = "body1", children, bold = false, textAlign = "left" }) => {
  return (
    <Typography
      variant={variant}
      align={textAlign}
      style={{ fontWeight: bold ? "bold" : "400" }}
    >
      {children}
    </Typography>
  );
};

export default Text;
