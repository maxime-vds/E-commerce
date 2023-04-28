import  { FC } from "react";

interface CartProps {
  cartItems: string[];
}
const Cart: FC<CartProps> = ({ cartItems }) => {
    return (
      <div className="cart">
        <h2>Panier</h2>
        {cartItems.length === 0 && <p>Votre panier est vide.</p>}
        {cartItems.length > 0 && (
          <ul>
            {cartItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;
  //le panier