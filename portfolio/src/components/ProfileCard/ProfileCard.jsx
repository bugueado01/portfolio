import React from "react";
import "./profileCard.css";
import ferFoto from "./ferFoto2020.jpg";

const ProfileCard = () => {
  return (
    <div className="card card-container">
      <img src={ferFoto} className="card-img-top card-img" alt="..." />
      <div className="card-body">
        <h1 className="card-title title-profile">Hola Mundo, soy Fer</h1>
        <p className="card-text profile-description">
          {/* Frontend Developer with good experience in React libraries and React
          Native for mobile apps, working with JavaScript and TypeScript. */}
          Soy Frontend Developer con un poco de Python en mi Backend, principalmente trabajo en aplicaciones web y mobiles usando React y React Native.
        </p>
        {/* <a href="#!" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default ProfileCard;
