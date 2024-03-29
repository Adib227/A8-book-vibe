import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const { book, image, bookname, author, category, review, tags, totalpages, publisher, year_of_publishing, rating } = useLoaderData();
  const handleToast = () => { toast("Added to read list") }
  const handleToastOne = () => { toast("Added to Wishlist")}
  return (
    <div className="hero bg-base-200 rounded-xl w-[425px] mx-auto lg:w-[1200px] lg:mx-auto mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold">{bookname}</h1>
          <h3 className="font-medium py-5">By :{author}</h3>
          <hr className="lg:w-[700px] my-3" />
          <h3 className="font-medium py3">{category}</h3>
          <hr className="lg:w-[700px] my-3" />
          <p>Review : {review}</p>
          <p className="btn bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl my-3">#{tags}</p>
          <hr className="lg:w-[700px] my-3" />
          <div className="space-y-4">
            <div className="flex gap-x-20">
              <p className="">Number of Pages :</p>
              <p className="font-medium ">{totalpages}</p>
            </div>
            <div className="flex gap-x-20">
              <p className="">Publisher :</p>
              <p className="font-medium ml-14">{publisher}</p>
            </div>
            <div className="flex gap-x-20">
              <p className="">Year of Publishing:</p>
              <p className="font-medium ">{year_of_publishing}</p>
            </div>
            <div className="flex gap-x-20">
              <p className="">Rating :</p>
              <p className="font-medium ml-20">{rating}</p>
            </div>
          </div>
          <div className="space-x-8 mt-8">
            <button onClick={handleToast} className="btn btn-ghost border-[#1313134D] ">Read</button>

            <button onClick={handleToastOne} className="btn bg-[#50B1C9] text-white">Wishlist</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;