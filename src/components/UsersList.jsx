import React from "react";
import { Grid } from "@mui/material";
import User from "./User";

const UsersList = ({ users }) => {
  return (
    <Grid container style={{ padding: "50px" }} spacing={5}>
      {users.map((user, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <User {...user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
