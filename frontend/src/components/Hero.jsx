import React, { useState } from "react";
import books from "../books.js"; // import your books data

const Hero = ({ handleOrderPopup }) => {
  const [book, setBook] = useState(books[0]); // start with the first book

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[650px] bg-secondary flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold ml-6 p-4">
                {book.name}
                <p className="text-sm p-8">por {book.author}</p>{" "}
              </h1>
              <p className="text-sm ml-6 px-6">{book.description}</p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-third from-primary to-secondary hover:scale-105 py-2 px-4 rounded-md ml-6"
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 mt-12">
              <div className="h-[300px] sm:h-[450px] flex justify-center items-center">
                <img
                  src={book.image}
                  alt="book img"
                  className="w-[300px] h-[450px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>

              <div className="flex lg:top-1/2 lg:-translate-y-1/2 lg:py-2 absolute -bottom-[60px] lg:-right-1">
                <div className="flex flex-row lg:flex-col lg:mr-24 gap-4">
                  {books.map((item) => (
                    <img
                      src={item.image}
                      onClick={() => setBook(item)}
                      alt={book.name}
                      className="max-w-[130px] h-[130px] object-contain inline-block hover:scale-105 duration-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
