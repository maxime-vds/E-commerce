//icons
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import { useState, Dispatch, SetStateAction } from 'react'
//comps
import FilterButtons from '../pages/Homepage/homepage-comps/filterbuttons'
//types
type navbarProps = {
  setQuery: Dispatch<SetStateAction<string>>
  setFilterType: Dispatch<SetStateAction<string>>
}

export default function Navbar({ setQuery, setFilterType }: navbarProps) {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

  const showNav = () => {
    setBurgerMenu(!burgerMenu)
  }

  return (
    <nav className="bg-gray-100">
      <div className="flex justify-between px-72">
        <MediaQuery minWidth={1280}>
          <FilterButtons setQuery={setQuery} setFilterType={setFilterType} />
          <a href="#" className="text-2xl font-montserrat pr-20 pt-4">
            e-meuble
          </a>
          <div className="user-buttons flex justify-around w-52 pt-5">
            <div>
              <a href="" className="">
                Panier
              </a>
            </div>
            <div>
              <a href="" className="">
                coeur
              </a>
            </div>
            <div>
              <a href="" className="">
                User
              </a>
            </div>
          </div>
        </MediaQuery>
      </div>

      <div className="xl:hidden flex justify-between px-4 py-2">
        <a href="#" className="text-2xl font-montserrat">
          e-meuble
        </a>

        {burgerMenu ? (
          <i
            className="fixed right-[30px] fa fa-times text-2xl z-50 xl:hidden"
            aria-hidden="true"
            onClick={showNav}
          ></i>
        ) : (
          <i className="fa fa-bars text-3xl  xl:hidden" aria-hidden="true" onClick={showNav}></i>
        )}
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col items-center w-full pt-16 xl:hidden bg-white z-40 duration-700 ${
            burgerMenu ? 'right-[0px]' : 'right-[-100vw]'
          } `}
        >
          <Link
            to="/"
            onClick={() => setBurgerMenu(false)}
            className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl hover:underline "
          >
            Home
          </Link>
          <Link
            to="/home"
            onClick={() => setBurgerMenu(false)}
            className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            onClick={() => setBurgerMenu(false)}
            className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl"
          >
            Cart
          </Link>
          <a href="#" className="text-2xl p-6 text-black px-24 py-5 pb-7 hover:bg-gray-300 rounded-xl">
            User
          </a>
        </nav>
      </div>
    </nav>
  )
}
