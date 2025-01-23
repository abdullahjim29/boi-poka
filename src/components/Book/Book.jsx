const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    review,
    totalPages,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className="card bg-base-100 border-2 p-4">
        <figure className="bg-base-200 p-10">
          <img className="h-[200px]" src={image} alt={bookName} />
        </figure>
        <div className="mt-6 flex items-center gap-10 ml-4">
          {tags.map((tag) => (
            <>
              <div className="bg-base-200 px-5 py-2 rounded-full text-[#23BE0A] font-semibold">
                {tag}
              </div>
            </>
          ))}
        </div>
        <div className="card-body space-y-3">
          <h2 className="card-title font-bold text-3xl line-clamp-1">{bookName}</h2>
          <p className="text-gray-700 text-xl">By : {author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-xl font-semibold">{category}</p>
            </div>
            <div className="flex  gap-2 text-xl font-semibold">
              <p className="">{rating}</p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-100"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
