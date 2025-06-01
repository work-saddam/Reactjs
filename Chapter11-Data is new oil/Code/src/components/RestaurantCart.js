import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
  // console.log(props)   // =>Object
  const { resData } = props; //we can also directly destructure on the fly, on above line
  const { cloudinaryImageId, name, cuisines,areaName, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-64 rounded-lg bg-gray-100 hover:shadow-2xl ">
      <div className="rounded-lg h-64 w-full overflow-hidden ">
        <img
          className="rounded-lg w-full object-contain"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3 className="text-lg font-semibold my-1 h-7 overflow-hidden">{name}</h3>
      <span className="flex gap-4">
        <h5 className="font-medium">{avgRating + "⭐"}</h5>
        {/* <h5 className="font-medium">{costForTwo}</h5> */}
        <h5 className="font-medium">{sla?.slaString}</h5>
      </span>
      <h5 className="mt-1 h-6 overflow-hidden font-light">{cuisines.join(", ")}</h5>
      <h5 className="font-light ">{areaName}</h5>
    </div>
  );
};

// Higher order Function
export const WithOfferLabel = (RestaurantCart) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader="" } = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className="absolute mx-8 my-4 px-2 text-sm z-10 bg-lime-600/70 text-white rounded-sm">{header + " "+subHeader}</label>
        <RestaurantCart {...props} />
      </div>
    );
  };
};

export default RestaurantCart;
