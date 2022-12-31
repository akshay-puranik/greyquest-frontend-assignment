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
      <div className="wallContainer"></div>
      <div className="avatarContainer">
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          alt="avatar image"
        />
      </div>
      <div className="nameContainer hero">
        <p className="heading">Name</p>
        <p>{name}</p>
      </div>
      <div className="userNameContainer hero">
        <p className="heading">Username</p>
        <p>{username}</p>
      </div>
      <div className="emailContainer flex">
        <p className="heading">Email</p>
        <p>{email.toLowerCase()}</p>
      </div>
      {/* <div className="addressContainer flex">
        <p className="heading">Address</p>
        <p>{fullAddress}</p>
      </div> */}
      <div className="phoneContainer flex">
        <p className="heading">Phone</p>
        <p>{phone}</p>
      </div>
      <div className="websiteContainer flex">
        <p className="heading">Website</p>
        <p>
          <a href={"#"}>{website}</a>
        </p>
      </div>
      <div className="detailsContainer flex">
        <DetailsButton id={id} />
      </div>
    </div>
  );
};

export default UserCard;
