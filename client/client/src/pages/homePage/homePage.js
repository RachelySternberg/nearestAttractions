import React, { useState } from "react";
import "./homePage.scss";
import NearestAttractionsBtn from "../../components/nearestAttractionsBtn/nearestAttractionsBtn";
import { connect } from "react-redux";
import { setLocation } from "../../redux/actions";

function mapStateToProps(state) {
  return {
    myLocation: state.location,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setLoc: (loc) => {
    dispatch(setLocation(loc));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function HomePage(props) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [nearestAttractionsBtn, setNearestAttractionsBtn] = useState(false);
  const { myLocation, setLoc } = props;

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);

          setLoc({ x: position.coords.latitude, y: position.coords.longitude });
          setNearestAttractionsBtn(true);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div className="home">
      <div className="home-introduction">
        בא נצא לגלות את כל האטרקציות הקרובות לאזורך
      </div>
      <button className="button" onClick={getLocation}>
        הצג מיקום
      </button>
      <div className="home-location">
        מיקומך הנוכחי:
        <span className="home-location-line">Y: {myLocation.y}</span>,
        <span className="home-location-line">X: {myLocation.x}</span>
      </div>
      {nearestAttractionsBtn && (
        <NearestAttractionsBtn lat={myLocation.x} lng={myLocation.y} />
      )}
      {/* <button onClick={<NearestAttractionsBtn/>}>Nearest Attractions</button> */}
    </div>
  );
});
