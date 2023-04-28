import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//components
import Navbar from "./comps/navbar"
import LandingPage from "./page/landingPage"
import Homepage from "./page/Homepage/Homepage"
// import GoogleLoginPage from "./comps/googleLogin"
// import ItemTest from "./comps/cartShop/itemcarttest"
import CartPage from "./page/panier/CartPage"

function App() {
   return (
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home/*' element={<Homepage />} />

             <Route path='/cart' element={<CartPage />} /> 
            {/* fait planter l'appli en ce moment a fixer pour voir si ca marche.  */}
            
            
            

            
         </Routes>
      </BrowserRouter>
   )
}

export default App
