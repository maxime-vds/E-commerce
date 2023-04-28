import { FC } from "react";
import Cart from "./CartPage";

interface CartPageProps {
  cartItems: string[];
}

const CartPage: FC<CartPageProps> = ({ cartItems }) => {
  return (
    <>
    <div className="border border-red-700 m-4">
      <h1 className="text-3xl text-center m-5 p-4 bg-blue-300">Page de panier/ Cart</h1>

      {/* <Cart cartItems={cartItems} /> */}
      <p>Items list</p>


    </div>
    <div>
      <button className="border border-blue-600 bg-blue-600 text-white px-4 m-3 hover:bg-blue-500"> checkout </button>
    </div>
    </>
  );
};

export default CartPage;
//page afffiche article 