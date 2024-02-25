import React from "react";
import UserGrid from "../components/UserGrid";
import { axiosInstance } from "../utils/axios";
export const loader = async ({ params }) => {
  console.log("params", params);
  const fetchURL = `/users/${params.id}`;
  const data = await axiosInstance.get(fetchURL);
  return { data };
};

const UserDetails = () => {
  return (
    <div>
      <UserGrid></UserGrid>
    </div>
  );
};

export default UserDetails;
