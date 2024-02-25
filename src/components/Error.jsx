import React from "react";
import { useRouteError } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Error = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <Typography component={"span"} variant="body2">
      <Box style={{ fontSize: 15, padding: "10px" }}>There was an error</Box>
    </Typography>
  );
};

export default Error;
