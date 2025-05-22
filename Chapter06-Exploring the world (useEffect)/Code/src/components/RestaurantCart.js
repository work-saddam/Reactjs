import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
  // console.log(props)   // =>Object
  const { resData } = props; //we can also directly destructure on the fly, on above line
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-cart" style={{background: "#f0f0f0"}}>
      <div className="image">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <span>
        <h5>{avgRating + " stars"}</h5>
        <h5>{costForTwo}</h5>
        <h5>{sla?.slaString}</h5>
      </span>
    </div>
  );
};

export default RestaurantCart;
