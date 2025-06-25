import RestaurantCart, { WithOfferLabel } from "./RestaurantCart";
import { useContext, useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //whenever the state variable is update, react re-render the components.
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCartOffer = WithOfferLabel(RestaurantCart);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 style={{ marginTop: "100px", height: "69vh" }}>
        Looks like you're offline!! Please check your internet connection
      </h1>
    );

  // Conditional rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4 flex justify-center flex-col sm:flex-row sm:pt-4">
        <div className="Search">
          <input
            type="text"
            className="border border-black rounded-sm p-1 max-w-40 sm:max-w-60"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="mx-4 px-4 py-2 bg-orange-100 rounded-lg hover:bg-orange-200"
            onClick={() => {
              const searchRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(searchRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="mt-4 sm:mt-0 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
              const filterList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilterRestaurant(filterList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="flex items-center mx-2 mt-4 sm:mt-0">
          <label>UserName: </label>
          <input
            className="border border-black mx-2 p-1 rounded-sm"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRestaurant.map((restraunt) => {
          //whenever we map on any component, always give key, & it should be unique
          return (
            <Link
              key={restraunt.info.id}
              to={"/restaurant/" + restraunt.info.id}
            >
              {restraunt.info?.aggregatedDiscountInfoV3 ? (
                <RestaurantCartOffer resData={restraunt} />
              ) : (
                <RestaurantCart resData={restraunt} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
