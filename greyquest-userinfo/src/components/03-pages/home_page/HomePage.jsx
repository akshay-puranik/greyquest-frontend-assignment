import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../features/userSlice";
import UserCard from "../../02-organisms/user_card/UserCard";
import "./styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { users, isLoading } = useSelector((state) => state.user);


  return (
    <div className="gridContainer">
      {users && users.map((el) => <UserCard key={el.id} {...el} />)}
    </div>
  );
};

export default HomePage;
