import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // get data onload
    dispatch(getAllUsers());
  }, []);


  return <div></div>;
};

export default Home;
