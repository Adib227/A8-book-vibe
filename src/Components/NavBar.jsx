import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <> < div className="navbar bg-base-100 lg:p-8 fixed z-10" >
      <div className="navbar-start">
        <div className="btn btn-ghost text-base lg:text-xl font-bold">
          <Link to='/'>
            <h1>Book Vibe</h1>
          </Link>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul className="flex lg:ml-[500px]">
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
      </div><div className="navbar-end gap-2">
        <a className="btn btn-success text-white">Sign In</a>
        <a className="btn btn-info text-white">Sign Up</a>
      </div >

    </div ></>

  );
};

export default NavBar;
