import React, { useState, useEffect } from "react";
import "./nearestAttractions.scss";
import calculateDistance from "../../utils/calculateDistance";
import CategoriesDropdown from "../../components/CategoriesDropdown/CategoriesDropdown";
import AttractionCard from "../../components/AttractionCard/AttractionCard";

// allAttractions.filter((item)=>{return item.type!=myType && item.dis<600})
export default function NearestAttractions(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState([{ lat: 0, lng: 0 }]);
  const [filter, setFilter] = useState("הצג הכל");
  //const [favs, setFavs] = useState([]);
  const setSelectedCategory = (category) => setFilter(category);
  /*const setFavourite = (id) => {
    setFavs(id)
  }*/

  useEffect(() => {
    setLocation(props.location.state);
    fetch("http://localhost:8080/getAll")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.attractionsList);
          setCategories(["הצג הכל", ...result.attractionsTypesList]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    items.forEach((element) => {
      let distance = calculateDistance(
        location.lat,
        location.lng,
        element.x,
        element.y
      );
      element.dis = distance;
      element.favorite = false;
    });
    items.sort((a, b) => a.dis - b.dis);
    return (
      <>
        <CategoriesDropdown
          categories={categories}
          selectedCategory={setSelectedCategory}
        />
        <div className="attractions-grid">
          {items
            .filter((item) => {
              if (filter === "הצג הכל") return item;
              else return item.type.includes(filter);
            })
            .map((item) => (
              <AttractionCard key={item.id} item={item}  /*onClick={setFavourite}*//>
            ))}
        </div>
      </>
    );
  }
}
