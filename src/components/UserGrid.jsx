import React from "react";
import { useLoaderData } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { cardStyle, boxStyle } from "./materialUI.js";

const UserGrid = () => {
  const { data } = useLoaderData();
  const user = data.data;
  const { avatar_url, name } = user;

  const propArray = ["name", "login", "location", "followers", "email", "blog"];
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardContent style={{ backgroundColor: "black", color: "white" }}>
            <Avatar
              alt={name}
              src={avatar_url}
              style={{ width: 300, height: 300, marginLeft: "40px" }}
            />
            <Typography component={"span"} variant="body2">
              <Box style={{ ...boxStyle, fontSize: 30, paddingLeft: "5px" }}>
                {name}
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={7}>
        <Card>
          <CardContent style={cardStyle}>
            {propArray.map((prop, index) => {
              return user[prop] ? (
                <Typography key={index} component={"span"} variant="body2">
                  <Box sx={boxStyle}>
                    {prop.toUpperCase()}:{user[prop]}
                  </Box>
                </Typography>
              ) : (
                ""
              );
            })}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserGrid;
