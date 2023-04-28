import { FC } from "react";
import Cart from "./Cart";

interface CartPageProps {
  cartItems: string[];
}

const CartPage: FC<CartPageProps> = ({ cartItems }) => {
  return (
    <div>
      <h2>Page de panier</h2>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
