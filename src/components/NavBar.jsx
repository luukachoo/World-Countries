import { BsMoon } from "react-icons/bs"

// eslint-disable-next-line react/prop-types
const NavBar = ({toggleDarkMode}) => {
  return (
  <nav className="flex justify-between items-center py-4 px-4 lg:px-24 shadow-md bg-white dark:bg-[#2b3945]">
        <h1 className="lg:text-2xl font-bold">Where in the world?</h1>
        <button onClick={toggleDarkMode} className="flex items-center gap-2 text-sm font-medium cursor-pointer"><BsMoon  className="font-bold"/> Dark Mode</button>
    </nav>

  )
}

export default NavBar