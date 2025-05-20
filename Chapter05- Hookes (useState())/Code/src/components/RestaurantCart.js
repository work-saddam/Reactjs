import { CDN_URL } from "../utils/constants";

const RestaurantCart = (props) => {
  // console.log(props)   // =>Object
  const { resData } = props; //we can also directly destructure on the fly, on above line
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
  } = resData?.data;

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
      <h5>{avgRating + " stars"}</h5>
      <h5>{costForTwoString}</h5>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurantCart;
