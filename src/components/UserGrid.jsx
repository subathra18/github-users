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

  const propArray = [
    { label: "Name", key: "name" },
    { label: "login", key: "login" },
    { label: "location", key: "location" },
    { label: "company", key: "company" },
    { label: "public Repos", key: "public_repos" },
    { label: "followers", key: "followers" },
    { label: "following", key: "following" },
    { label: "email", key: "email" },
    { label: "twitter username", key: "twitter_username" },
    { label: "blog", key: "blog" },
  ];
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
        <Card>
          <CardContent style={{ backgroundColor: "black", color: "white" }}>
            <Avatar
              alt={name}
              src={avatar_url}
              style={{ width: "70%", height: "70%", marginLeft: "30px" }}
            />
            <Typography component={"span"} variant="h3">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
        <Card>
          <CardContent style={cardStyle}>
            {propArray.map(({ label, key }, index) => {
              return user[key] ? (
                <Typography key={index} component={"span"} variant="body2">
                  <Box sx={boxStyle}>
                    {label.toUpperCase()}:{user[key]}
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
