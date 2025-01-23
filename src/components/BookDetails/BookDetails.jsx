import { useLoaderData, useParams } from "react-router-dom";
import {
  addToLocalStorage,
  getStoredBooks,
  getStoredWishlistBooks,
  wishlistAddToLS,
} from "../../BooksStored/BookStored";
import toast, { Toaster } from "react-hot-toast";

const BookDetails = () => {
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const allBooks = useLoaderData();

  const book = allBooks.find((book) => book.bookId === bookIdInt);

  const {
    bookId: id,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  const addToReadList = (id) => {
    addToLocalStorage(id);
    // localStorage.removeItem('wish-list');
  };

  const handleWishList = (id) => {
    const storedReadList = getStoredBooks();
    if (storedReadList.includes(id)) {
      toast.error("You have already read this Book");
    } else {
      wishlistAddToLS(id);
    }
  };

  return (
    <div className="my-10">
      <Toaster />
      <div className="grid grid-col lg:grid-cols-2 gap-10">
        <div className="bg-base-200 p-20 rounded-2xl flex justify-center items-center">
          <img className="h-[400px]" src={image} alt={bookName} />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <p className="text-base">By : {author}</p>
          <div className="divider"></div>
          <p className="text-base">{category}</p>
          <div className="divider"></div>
          <p>
            <span className="font-bold">Review</span> {review}
          </p>
          <div className="flex items-center gap-8">
            <p className="font-bold">Tag</p>
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="bg-base-200 px-5 py-2 rounded-full text-[#23BE0A] font-semibold"
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-2 gap-y-2">
            <p>Number of Pages:</p>
            <p className="font-bold">{totalPages}</p>
            <p>Publisher:</p>
            <p className="font-bold">{publisher}</p>
            <p>Year of Publishing:</p>
            <p className="font-bold">{yearOfPublishing}</p>
            <p>Rating:</p>
            <p className="font-bold">{rating}</p>
          </div>
          <button
            onClick={() => addToReadList(id)}
            className="btn font-bold text-black px-6 mr-6 bg-white border-black hover:bg-[#23BE0A] hover:text-white"
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(id)}
            className="btn font-bold px-6 bg-[#50B1C9] text-white hover:bg-[#23BE0A]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
