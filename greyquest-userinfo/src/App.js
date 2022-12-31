import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DetailsButton from "./components/00-atoms/00-buttons/details_button/DetailsButton";
import UserCard from "./components/02-organisms/user_card/UserCard";
import { getAllUsers } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return <div className="App">
    <UserCard/>
  </div>;

}

export default App;
