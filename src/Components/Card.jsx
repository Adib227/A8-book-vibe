import { Link } from "react-router-dom";


const Card = ({card}) => {
  const { bookid, bookname, image, author, category, rating  } = card;
  // console.log(card);
  return (
    <Link to={`/bookdetails/${bookid}`}>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img  src={image} alt="Shoes" className="rounded-xl h-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{bookname}</h2>
        <p>{author}</p>
        <div className="card-actions">
          <h4>{category}</h4>
          <h4>{rating}</h4>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Card;