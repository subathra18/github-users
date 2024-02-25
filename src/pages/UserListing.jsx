import React from "react";
import { axiosInstance } from "../utils/axios";
import UsersList from "../components/UsersList";

const UserListing = () => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const url = "/users";

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1
    ) {
      console.log(
        "time to fetch",
        window.innerHeight + window.scrollY,
        document.documentElement.scrollHeight
      );
      setPageNumber((pageNumber) => pageNumber + 20);
    }
  };

  const fetchData = async () => {
    const fetchURL = `${url}?since=${pageNumber}&per_page=20`;
    setLoading(true);
    try {
      const resp = await axiosInstance.get(fetchURL);
      if (resp.status == 200) {
        setUsers((prevUsers) => {
          return [...prevUsers, ...resp.data];
        });
      } else {
        throw new Error("Fetch failed");
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, [pageNumber]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <UsersList users={users}></UsersList>;
};

export default UserListing;
