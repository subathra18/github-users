import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Landing = () => {
  return (
    <>
      <Typography component={"span"} variant="body2">
        <Box style={{ fontSize: 15, padding: "10px" }}>
          Welcome to Github users, app that lists github users and provides user
          details
        </Box>
      </Typography>
      <Typography component={"span"} variant="body2">
        <Box style={{ fontSize: 15, padding: "10px" }}>
          Developed with React ,React Router ,material UI
        </Box>
      </Typography>
      <button className="landingButton">
        <Link className="link" to="/users">
          <Typography component={"span"} variant="body2">
            <Box style={{ fontSize: 20, padding: "20px" }}>
              List Github users
            </Box>
          </Typography>
        </Link>
      </button>
    </>
  );
};

export default Landing;
