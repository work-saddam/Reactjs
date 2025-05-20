import RestaurantCart from "./RestaurantCart";
import resList from "../utils/mockdata";
import { useState } from "react";

// React Hooks: (simple JS utility function.)
//  -useState() - To manage states. Returns a stateful value and an updater function to update it.
//  -useEffect() - To manage side-effects like API calls, subscriptions, timers, mutations, and more.
//  -useContext() - To return the current value for a context.

// useState() is used to maintain the state in our React application.
// It takes the initial state as an argument and returns the current state value and a function to update that value.

const Body = () => {
  // local State Variable:- Super Powerfull variable
  //whenever the state variable is update, react re-render the components.
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurant(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restraunt) => {
          //whenever we map on any component, always give key, & it should be unique
          return <RestaurantCart key={restraunt.data.id} resData={restraunt} />;
        })}
      </div>
    </div>
  );
};

export default Body;
