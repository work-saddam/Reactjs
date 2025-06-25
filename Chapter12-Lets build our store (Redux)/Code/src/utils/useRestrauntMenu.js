import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

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

  return resInfo;
};

export default useRestrauntMenu;
