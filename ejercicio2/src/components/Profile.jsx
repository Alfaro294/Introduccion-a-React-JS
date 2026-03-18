import React from "react";

function ProfileCard({ nombre, edad, profesion, ciudad }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">

        <h5 className="card-title">{nombre}</h5>

        <p className="card-text">
          <strong>Edad:</strong> {edad} <br />
          <strong>Profesión:</strong> {profesion} <br />
          <strong>Ciudad:</strong> {ciudad}
        </p>

      </div>
    </div>
  );
}

export default ProfileCard;