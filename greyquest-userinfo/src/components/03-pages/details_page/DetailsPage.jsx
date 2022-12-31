import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../../features/userSlice";

const URL = "";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  const { currentUser, isLoading } = useSelector((state) => state.user);

  return isLoading ? <div>Loading</div> : <div>hello</div>;
};

export default DetailsPage;
