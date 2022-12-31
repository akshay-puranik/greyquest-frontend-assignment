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

  const { name, username, email, address, phone, website, company } = currentUser;

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="cardContainer">
      <div className="nameContainer hero">
        <p className="heading">Name:</p>
        <p>{name}</p>
      </div>
      <div className="userNameContainer hero">
        <p className="heading">Username:</p>
        <p>{username}</p>
      </div>
      <div className="emailContainer flex">
        <p className="heading">Email ID:</p>
        <p>{email}</p>
      </div>
      <div className="addressContainer">
        <p className="heading">Address:</p>
      </div>
      <div className="phoneContainer flex">
        <p className="heading">Phone:</p>
        <p>{phone}</p>
      </div>
      <div className="websiteContainer flex">
        <p className="heading">Website:</p>
        <p>
          <a href={website}>{website}</a>
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
