import { Link } from "react-router-dom";


const Card = ({ card }) => {
  const { bookid, bookname, image, author, category, rating, tags } = card;
  return (
    <Link to={`/bookdetails/${bookid}`}>
      <div className="card w-[400px] bg-base-100 shadow-xl border-2 transition hover:scale-105">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl h-64 lg:h-80" />
        </figure>
        <div className="card-body items-center text-center">
          <p className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl">{tags}</p>
          <h2 className="card-title text-lg lg:text-2xl font-semibold lg:font-bold">{bookname}</h2>
          <p className="text-lg lg:text-xl font-normal lg:font-semibold mt-3">{author}</p>

          <div className="card-actions grid">
            <hr className="w-60 border-dashed my-3" />
            <div className="flex justify-between">
              <h4>{category}</h4>
              <h4>{rating}</h4>
            </div>
          </div>
        </div>
      </div>
      </Link>
      
  );
};

export default Card;