const Listedbook = () => {
  return (
    <div className="pt-16">
      <h1 className=" p-6 lg:w-[1200px] lg:mx-auto text-center font-bold text-3xl bg-base-200 rounded-2xl">Books</h1>
      <div>
        <div className="dropdown dropdown-bottom lg:w-[1200px] mx-auto text-center bg-white bg-center ml-36 lg:ml-[360px] mt-10">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By <span><img src="src/assets/Frame (4).png" alt="" /></span></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mx-auto lg:ml-[500px]">
            <li><a>Rating</a></li>
            <li><a>Number of pages</a></li>
            <li><a>Publisher year</a></li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Listedbook;