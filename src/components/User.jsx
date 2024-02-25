import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const User = ({ html_url, avatar_url, login }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/users/${login}`}>
      <Card style={{ backgroundColor: "#2f2f2f", color: "white" }}>
        <CardContent>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="avatar-container"
          >
            <Avatar src={avatar_url}></Avatar>
          </div>
          <Typography>{login}</Typography>
          <Typography variant="body2">{html_url}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default User;
