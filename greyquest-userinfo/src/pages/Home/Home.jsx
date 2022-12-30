import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../features/userSlice";

const Home = () => {
  useEffect(() => {
    getAllUsers();
  }, []);

  const store = useSelector((state) => state);
  console.log(store);

  return <div></div>;
};

export default Home;
