import { FC } from "react";
import Cart from "./CartPage";

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
//page afffiche article 