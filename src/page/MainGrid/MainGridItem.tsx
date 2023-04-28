import Button from "../panier/Button";
import CartPage from "../panier/Cart";
import { useState } from "react";


type MainGridItemProps = {
  image: string
  onClick: () =>  void
}


const MainGridItem = ({image, onClick} : MainGridItemProps) => {


  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = () => {
    // Ajouter l'article au panier ici
    setCartItems([...cartItems, "Article ajouté au panier"]);

    console.log(Button)
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
            <Button onClick={handleAddToCart}>Ajouter au panier</Button>
            {/* <CartPage cartItems={cartItems} /> 
            
            souci du site bug et plante car souci niveau du doom ? 
            
            */}
    
          </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 h-[14rem] bg-black opacity-0 hover:opacity-10 
        hover:transition-all duration-300 ease-in'></div>
        </div>
    );
  }
  
  export default MainGridItem;
  