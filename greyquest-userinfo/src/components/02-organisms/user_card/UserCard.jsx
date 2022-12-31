import React from "react";
import DetailsButton from "../../00-atoms/00-buttons/details_button/DetailsButton";
import "./styles.scss";

const UserCard = () => {
  const obj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  const { id, name, username, email, address, phone, website, company } = obj;

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
        <p><a href={website}>{website}</a></p>
      </div>
      <div className="detailsContainer flex">
        <DetailsButton/>
      </div>
    </div>
  );
};

export default UserCard;
