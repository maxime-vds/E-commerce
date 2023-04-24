import MediaQuery from "react-responsive"

export default function Navbar() {
   return (
      <nav className='flex justify-between bg-yellow-50 text-white py-2 px-2'>
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
            <div>
               <h2 className='text-black pt-1'>burgermenu</h2>
            </div>
         </MediaQuery>
      </nav>
   )
}
