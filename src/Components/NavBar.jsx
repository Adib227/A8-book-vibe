import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <><div className="navbar bg-base-100 lg:p-8 fixed z-10">
      <div className="navbar-start">
        <div className="btn btn-ghost text-base lg:text-xl font-bold">
          <Link to='/'>
            <h1>Book Vibe</h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="grid lg:flex">
          <NavLink to='/' className="btn btn-ghost text-sm lg:text-lg text-[#23BE0A] border-[#23BE0A]">
            Home
          </NavLink>
          <NavLink to='/listedbook' className="btn btn-ghost text-sm lg:text-lg">
            Listed Books
          </NavLink>
          <NavLink to='/pagetoread' className="btn btn-ghost text-sm lg:text-lg">
            Pages to Read
          </NavLink>
          <NavLink to='/islamicbook' className="btn btn-ghost text-sm lg:text-lg">
            Islamic Book
          </NavLink>
          <NavLink to='/ebook' className="btn btn-ghost text-sm lg:text-lg">
            E Book
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-success text-white">Sign In</button>
        <button className="btn btn-info text-white">Sign Up</button>
      </div>
    </div>



      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>

  );
};

export default NavBar;
