import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    // Scrolls to top
    window.scrollTo(0, 0);
  }, []);

  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { cloudinaryImageId, name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="max-w-3xl mx-auto my-5 px-2">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-3">{name}</h1>
        <h3 className="font-semibold mb-1">
          {" "}
          {avgRating}⭐ ● {costForTwoMessage}
        </h3>
        <h3 className="mb-8">{cuisines.join(", ")}</h3>
      </div>
      <div className="res-menu">
        <hr></hr>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(showIndex === index ?null :index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
