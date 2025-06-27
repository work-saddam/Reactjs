import RestaurantCart from "./RestaurantCart";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// React Hooks: (simple JS utility function.)
//  -useState() - To manage states. Returns a stateful value and an updater function to update it.
//  -useEffect() - To manage side-effects like API calls, subscriptions, timers, mutations, and more.
//  -useContext() - To return the current value for a context.

// useState() is used to maintain the state in our React application.
// It takes the initial state as an argument and returns the current state value and a function to update that value.
//whenever the state variable is update, react re-render the components.

// useEffect() takes two argument, 1st callback function, 2nd  dependecy array
//  callback function runs after rendering that componenet.

const Body = () => {
  //whenever the state variable is update, react re-render the components.
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://food-reactjs-server.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filterRestaurant.map((restraunt) => {
          //whenever we map on any component, always give key, & it should be unique
          return <RestaurantCart key={restraunt.info.id} resData={restraunt} />;
        })}
      </div>
    </div>
  );
};

export default Body;
