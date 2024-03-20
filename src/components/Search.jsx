import React from "react";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { axiosInstance } from "../utils/axios";

const Search = ({ onSearch }) => {
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");

  const formURL = () => {
    let queryParam = "";
    if (name && location) {
      queryParam = `?q=${name}+location:${location}`;
    } else if (name) {
      queryParam = `?q=${name}`;
    } else if (location) {
      queryParam = `?q=location:${location}`;
    }
    return queryParam;
  };

  const fetchUsers = async () => {
    if (!name && !location) {
      fetchAllUsers();
    } else {
      searchUsers();
    }
  };

  const searchUsers = async () => {
    let queryParam = formURL();
    let URL = `https://api.github.com/search/users${queryParam}`;
    try {
      const resp = await axiosInstance.get(URL);
      console.log("data", resp.data);
      if (resp && resp.data) {
        onSearch(resp.data.items);
      }
    } catch (Error) {
      console.log("Error", Error);
    }
  };

  const fetchAllUsers = async () => {
    let URL = "https://api.github.com/users";
    try {
      const resp = await axiosInstance.get(URL);
      if (resp && resp.data) {
        onSearch(resp.data);
      }
    } catch (Error) {
      console.log("Error", Error);
    }
  };
  return (
    <div>
      {/* <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      ></input> */}
      <Box>
        <InputBase
          sx={{
            border: "2px solid white",
            color: "white",
            margin: "10px",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></InputBase>
        <InputBase
          sx={{
            border: "2px solid white",
            color: "white",
            margin: "10px",
          }}
          onChange={(e) => setLocation(e.target.value)}
        ></InputBase>
        <Button onClick={fetchUsers} variant="text">
          Search
        </Button>
      </Box>

      {/* <button>Search</button> */}
    </div>
  );
};

export default Search;
