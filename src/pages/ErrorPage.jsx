import React from "react";
import { useRouteError, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("error", error);
  return (
    <>
      <Typography component={"span"} variant="body2">
        <Box style={{ fontSize: 15, padding: "10px" }}>
          The page you are looking for is not available
        </Box>
      </Typography>
      <Link className="link" to="/">
        <Typography component={"span"} variant="body2">
          <Box style={{ fontSize: 15, padding: "10px" }}>Go to Home</Box>
        </Typography>
      </Link>
    </>
  );
};

export default ErrorPage;
