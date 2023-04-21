

 export default function Navbar (){
    return (
      <>
        <nav className="flex justify-between items-center py-4 bg-white text-white">
          <div className="pl-4">
            <a href="#" className="text-black text-2xl font-bold pl-20">
              E-meuble
            </a>
          </div>
          <div className="flex justify-center flex-1 space-x-10">
            <a href="#" className="text-black px-4 py-2 hover:bg-gray-300">
              Home
            </a>
            <a href="#" className="text-black px-4 py-2 hover:bg-gray-300">
              Shop
            </a>
            <a href="#" className="text-black px-4 py-2 hover:bg-gray-300">
              Cart
            </a>
          </div>
          <div className="text-black pr-20">
            <a href="" className="px-1">Panier</a>
            <a href="" className="px-1">coeur</a>
            <a href=""className="px-1">User</a>
            
          </div>
        </nav>
      </>
    );
 }