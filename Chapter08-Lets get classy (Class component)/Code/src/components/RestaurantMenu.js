import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API, CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(
    //   json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // );
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { cloudinaryImageId, name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="restaurant-menu">
      <div className="res-name">
        <img src={CDN_URL + cloudinaryImageId}></img>
        <div className="res-summary">
          <h1>{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{costForTwoMessage}</h3>
          <h3>{avgRating} stars</h3>
        </div>
      </div>
      <div className="res-menu">
        <h2>Recommended</h2>
        <div className="menu-list">
          {itemCards.map((item) => (
            <div className="menu-item" key={item?.card?.info?.id}>
              <div className="menu-summary">
                <h3>{item?.card?.info?.name}</h3>
                <h4>
                  ₹  
                  {Math.floor(item?.card?.info?.price / 100) ||
                    Math.floor(item?.card?.info?.defaultPrice / 100)}
                </h4>
                <p>{item?.card?.info?.description}</p>
              </div>
              <img src={CDN_URL + item?.card?.info?.imageId}></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
