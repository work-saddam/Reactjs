import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
  // console.log(props)   // =>Object
  const { resData } = props;    //we can also directly destructure on the fly, on above line
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-64 rounded-lg bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="rounded-lg h-64 w-full overflow-hidden ">
        <img
          className="rounded-lg w-full object-contain"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="text-lg font-semibold my-1 h-8 overflow-hidden">{name}</h3>
      <h5 className="h-6 overflow-hidden">{cuisines.join(", ")}</h5>
      <span>
        <h5 className="font-medium">{avgRating + " stars"}</h5>
        <h5 className="font-medium">{costForTwo}</h5>
        <h5 className="font-medium">{sla?.slaString}</h5>
      </span>
    </div>
  );
};

export default RestaurantCart;
