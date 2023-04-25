//icons
import burgerMenu from "/burger.svg"

import MediaQuery from "react-responsive"
import { useState } from "react"

export default function Navbar() {
   const [BurgerMenu, setBurgerMenu] = useState<boolean>(false)

   return (
      <nav className='flex justify-between bg-yellow-200 text-white py-2 px-2'>
         <div>
            <a href='#' className='text-black text-2xl font-bold'>
               E-meuble
            </a>
         </div>

         <MediaQuery minWidth={1024}>
            <div className='flex justify-center flex-1 space-x-10'>
               <a href='#' className='text-black px-4 py-2 hover:bg-gray-300'>
                  Home
               </a>
               <a href='#' className='text-black px-4 py-2 hover:bg-gray-300'>
                  Shop
               </a>
               <a href='#' className='text-black px-4 py-2 hover:bg-gray-300'>
                  Cart
               </a>
            </div>
            <div className='text-black pr-20'>
               <a href='' className='px-1'>
                  Panier
               </a>
               <a href='' className='px-1'>
                  coeur
               </a>
               <a href='' className='px-1'>
                  User
               </a>
            </div>
         </MediaQuery>

         <MediaQuery maxWidth={1024}>
            <div
               className='p-1 hover:bg-slate-100 rounded-full'
               onClick={() =>
                  BurgerMenu ? setBurgerMenu(false) : setBurgerMenu(true)
               }
            >
               {/* mieux d'utiliser un sidebar ? */}
               <img src={burgerMenu} alt='burger-menu' />
               {BurgerMenu && (
                  <div className='relative'>
                     <h2>Links</h2>
                  </div>
               )}
            </div>
         </MediaQuery>
      </nav>
   )
}
