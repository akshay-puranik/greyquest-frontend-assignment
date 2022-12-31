import React from "react";
import DetailsButton from "../../00-atoms/00-buttons/details_button/DetailsButton";
import "./styles.scss";

const UserCard = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  const add = Object.values(address);
  add.pop();
  const fullAddress = add.join(" | ");

  return (
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
        <p>{fullAddress}</p>
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
      <div className="detailsContainer flex">
        <DetailsButton />
      </div>
    </div>
  );
};

export default UserCard;
