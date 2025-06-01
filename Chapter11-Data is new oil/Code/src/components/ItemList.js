import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex flex-col sm:flex-row sm:justify-between mb-4 py-2 pl-4 border-b"
        >
          <div className="">
            {/* {item?.card?.info?.isVeg ?"veg" :"non-veg"} */}
            <h3 className="font-bold text-lg">{item?.card?.info?.name}</h3>
            <h4 className="font-semibold text-base pb-2">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </h4>
            {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
              <p className="font-semibold text-base mb-2">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐
              </p>
            ) : (
              <p></p>
            )}
            <p className="max-w-lg mb-8 sm:mb-4 pb-4 pr-2 h-12 overflow-hidden">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-40 flex flex-col items-center">
            <div className="h-36 w-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                alt="item image"
                src={CDN_URL + item?.card?.info?.imageId}
              ></img>
            </div>
            <div className="-mt-4 z-10 mb-4">
              <button className=" bg-white text-green-600 font-bold px-8 py-1 rounded shadow-md hover:bg-gray-200">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
