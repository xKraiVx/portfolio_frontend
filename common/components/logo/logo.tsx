import { Typography } from "@mui/material";
import { FunctionComponent } from "react";

export const Logo: FunctionComponent = () => {
  return (
    <Typography variant="h2" component="p" sx={{ fontWeight: 400 }}>
      <strong>A</strong>nother<strong>O</strong>ne
    </Typography>
  );
};
