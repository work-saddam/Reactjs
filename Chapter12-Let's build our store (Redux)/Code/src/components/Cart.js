import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="max-w-3xl mx-auto my-5 px-2" style={{minHeight:"70vh"}}>
      <div className="flex items-center mb-4">
        <h1 className="font-bold text-3xl pb-2">Cart</h1>
        <div>
          <button onClick={handleClearCart} className="mx-4 px-2 py-1 bg-black text-white rounded-lg">
            Clear Cart
          </button>
        </div>
      </div>
      {cartItems.length === 0 && (<p className="text-lg">Cart is empty. Add item to the cart!</p>)}
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
