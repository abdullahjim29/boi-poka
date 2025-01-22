import { Link } from "react-router-dom";
import image from '/books.png'

const Banner = () => {
  return (
    <div className="hero bg-base-200 px-20 py-10 rounded-2xl my-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={image}
          className="max-w-sm rounded-lg w-full bg-[#F2F2F2]"
        />
        <div className="space-y-10">
          <h1 className="text-4xl md:text-5xl font-bold w-full md:w-full lg:w-10/12 lg:leading-tight">Books to freshen up your bookshelf</h1>
          <div><Link to='/listedbooks'><button className="btn bg-[#23BE0A] text-white">View The List</button></Link></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
