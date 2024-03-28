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
    </>

  );
};

export default NavBar;
