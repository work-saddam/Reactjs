import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log(data)
  const [showItems, setShowItems] = useState(true);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      {/*Accordion Header */}
      <div
        className="flex justify-between my-4 mx-2 text-lg cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span className="text-sm"> {showItems ? "▲" : "▼"} </span>
      </div>
      {/*Accordion Body */}
      {showItems && <ItemList items={data?.itemCards} />}
      <div className="bg-gray-100 h-3"></div>
    </div>
  );
};

export default RestaurantCategory;
