import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../../features/userSlice";
import "./styles.scss";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  const { currentUser, isLoading } = useSelector((state) => state.user);

  const {
    name,
    username,
    email,
    address = {},
    phone,
    website,
    company = {},
  } = currentUser;

  const { street, suite, city, zipcode, geo } = address;
  const { catchPhrase, bs } = company;

  console.log(address, company);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="pageContainer">
      <header>User Details</header>
      <div className="detailsContainer">
        <div className="imageContainer containers">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8"
            alt="avatar image"
          />
        </div>
        <div className="dataContainer containers">
          <div className="dataLeft">
            <div className="main nameContainer hero">
              <p className="heading">Name:</p>
              <p>{name}</p>
            </div>
            <div className="main userNameContainer hero">
              <p className="heading">Username:</p>
              <p>{username}</p>
            </div>
            <div className="main emailContainer flex">
              <p className="heading">Email ID:</p>
              <p>{email}</p>
            </div>
            <div className="main phoneContainer flex">
              <p className="heading">Phone:</p>
              <p>{phone}</p>
            </div>
            <div className="main websiteContainer flex">
              <p className="heading">Website:</p>
              <p>
                <a href={website}>{website}</a>
              </p>
            </div>
          </div>
          <div className="dataRight">
            <div className="main addressContainer">
              <p className="heading">Address:</p>
              <div className="addressFlex">
                <div className="headingSmall">
                  <p>Street</p>
                  <p>Suite</p>
                  <p>City</p>
                  <p>Zip Code</p>
                </div>
                <div className="addressDetails">
                  <p>{street}</p>
                  <p>{suite}</p>
                  <p>{city}</p>
                  <p>{zipcode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
