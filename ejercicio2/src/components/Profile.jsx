import React from "react";
import reactLogo from "../assets/react.svg";
import "./ProfileCard.css";

function ProfileCard({ nombre, edad, profesion, ciudad }) {
  return (
    <div className="profile-card">
      
      <div className="profile-img-container">
        <img src={reactLogo} alt="profile" className="profile-img" />
      </div>

      <div className="profile-body">
        <h5 className="profile-name">{nombre}</h5>
        <p className="profile-profesion">{profesion}</p>

        <p className="profile-info">
          <strong>Edad:</strong> {edad} <br />
          <strong>Ciudad:</strong> {ciudad}
        </p>

        <button className="profile-btn">Ver perfil</button>
      </div>

    </div>
  );
}

export default ProfileCard;