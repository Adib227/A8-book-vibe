const NavBar = () => {
  return (
    <div className="navbar bg-base-100 p-12 fixed z-10">
      <div className="navbar-start">
        <div className="btn btn-ghost text-xl font-bold">
          <h1>Book Vibe</h1>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-lg text-[#23BE0A] border-[#23BE0A]">Home</a>
        <a className="btn btn-ghost text-lg">Listed Books</a>
        <a className="btn btn-ghost text-lg">Pages to Read</a>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-success text-white">Sign In</button>
        <button className="btn btn-info text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
