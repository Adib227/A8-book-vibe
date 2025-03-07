import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 fixed z-10 p-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink to="/" className="text-lg rounded-lg font-bold text-[#38b762] border-2 px-2 border-[#38b762]font-normal">Home</NavLink>
              <NavLink to="/listedbook" className=" rounded-lg font-bold text-black  px-2  text-lg ">Listed Books</NavLink>
              <NavLink to="/pagetoread" className=" rounded-lg font-bold text-black  px-2  text-lg ">Pages to Read</NavLink>
              <NavLink to="/islamicbook" className=" rounded-lg font-bold text-black  px-2  text-lg ">Islamic Book</NavLink>
              <NavLink to="/ebook" className=" rounded-lg font-bold text-black  px-2  text-lg ">E Book</NavLink>
            </ul>
          </div>
          <NavLink to="/" className="font-bold text-xl mr-4 lg:mr-0">
            Book Vibe
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink to="/" className="text-lg rounded-lg font-bold text-[#38b762] border-2 px-2 border-[#38b762] l">Home</NavLink>
              <NavLink to="/listedbook" className=" rounded-lg font-bold text-black px-2  text-lg ">Listed Books</NavLink>
              <NavLink to="/pagetoread" className=" rounded-lg font-bold text-black  px-2  text-lg ">Pages to Read</NavLink>
              <NavLink to="/islamicbook" className=" rounded-lg font-bold text-black px-2  text-lg ">Islamic Book</NavLink>
              <NavLink to="/ebook" className=" rounded-lg font-bold text-black  px-2  text-lg ">E Book</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2 lg:gap-4 lg:flex ml-8 lg:ml-0">
          <a className="btn bg-[#38b762] text-lg font-semibold text-white">Sign In</a>
          <a className="btn text-lg font-semibold text-white bg-[#5ac6d1]">Sign Up</a>
        </div>
      </div>
    </>

  );
};

export default NavBar;
