import React from "react";

function MenuCard({ imgSrc, name, isActive }) {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{name}</h3>
    </div>
  );
}

export default MenuCard;
