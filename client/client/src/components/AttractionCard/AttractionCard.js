import React, { useState, useEffect } from "react";
import "./AttractionCard.scss";
import favouriteIcon from "../../assets/icons/favourite-filled.png";
import unfavouriteIcon from "../../assets/icons/favourite-outlined.png";

export default function AttractionCard(props) {
  const [fav, setFav] = useState(false);
  const handleClick = (id) => {
    setFav(!fav);
    //props.onClick(id);
  };
  /*const selectedCategory = (e) => {
    props.selectedCategory(e.target.value);
  };*/
  return (
    <div className="card" key={props.item.id}>
      <div className="card-ribbon">
        <div className="card-ribbon-text">{props.item.type}</div>
      </div>
      <img src="https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80" alt="img" />
      <button className="card-favourite" onClick={() => handleClick(props.item.id)}>
          {fav ? (
            <img src={favouriteIcon} alt="fuvorite" />
          ) : (
            <img src={unfavouriteIcon} alt="unfuvorite" />
          )}
        </button>
      <div class="card-info">
        <div className="card-name">{props.item.name}</div>
        <div className="card-id card-detail-with-title">
          <h3 className="card-info-title">מספר מזהה:</h3>
          <span className="card-info-content">{props.item.id}</span>
        </div>
        <div className="card-address card-detail-with-title">
          <h3 className="card-info-title">כתובת:</h3>
          <span className="card-info-content">{props.item.address}</span>
        </div>
        <div className="card-location card-detail-with-title">
          <h3 className="card-info-title">מרחק ממיקומך:</h3>
          <span className="card-info-content">
            {parseFloat(props.item.dis).toFixed(2)}
          </span>
        </div>
        <div className="card-open-hours">
          <h3 className="card-info-title">שעות פתיחה:</h3>
          <ul className="card-info-content">
            {props.item.openHours
              .replace("</br>", "\n")
              .split(",")
              .map((item) => (
                <li>{item}</li>
              ))}
          </ul>
        </div>
        <a
          className="card-link"
          href={props.item.link}
          target="_blank"
          rel="noreferrer"
        >
          קפצו לבקר באתר שלנו
        </a>
      </div>
    </div>
  );
}
