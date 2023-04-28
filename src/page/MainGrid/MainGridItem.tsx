import Button from "../panier/Button";
import CartPage from "../panier/CartPage";
import { useState } from "react";


type MainGridItemProps = {
  image: string
  id: number
  onClick: () =>  void
}


const MainGridItem = ({image, id, onClick} : MainGridItemProps) => {


  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (id:number) => {
    // Ajouter l'article au panier ici
    setCartItems((prevCartItems) => [...prevCartItems, id]);

    console.log(cartItems)
  };
    return (
        <div className='GridItem relative' onClick={onClick}>
          <div className='picture-wrapper h-[14rem] overflow-hidden'>
            <img src={image} className=""/>
          </div>
          <div className='item-description text-xs'>
            <p>item descriptions</p>
            <p>item descriptions</p>
            <p>prix : 100 eurodollars</p>
            <button className="bg-red-500"> Bouton</button>
            <Button onClick={()=> handleAddToCart (id)}>Ajouter au panier</Button>
           {/* <CartPage cartItems={cartItems} />  */}
            
            
    
          </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 h-[14rem] bg-black opacity-0 hover:opacity-10 
        hover:transition-all duration-300 ease-in'></div>
        </div>
    );
  }
  
  export default MainGridItem;
  