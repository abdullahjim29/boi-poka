import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const menuLinks = <>
  <NavLink to='/'><li><a>Home</a></li></NavLink>
  <NavLink to='/listedbooks'><li><a>Listed Books</a></li></NavLink>
  <NavLink to='/pagestoread'><li><a>Pages to Read</a></li></NavLink>
  </>
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3"
            >
            {
              menuLinks
            }
            </ul>
          </div>
          <Link to="/"><a className="text-2xl font-bold cursor-pointer">BOI-POKA</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {
              menuLinks
            }
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#4dbbde] text-white">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
