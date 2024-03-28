import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero  lg:w-[1400px] lg:mx-auto py-12 bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse gap-60">
        <img src="src/assets/pngwing 1.png" className="max-w-sm rounded-lg " />
        <div className="space-y-12">
          <h1 className="text-3xl lg:text-5xl font-bold">Books to freshen up <br />  your bookshelf</h1>
          <NavLink to='/listedbook'>
            <button className="btn btn-success text-white text-base lg:text-lg mt-10">View The List</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;