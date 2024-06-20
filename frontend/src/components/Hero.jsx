import React, { useState } from "react";
import books from "../books.js";

const Hero = ({ handleOrderPopup }) => {
  const [book, setBook] = useState(books[0]); // start with the first book

  return (
    <>
      <div className="min-h-[550px] md:min-h-[550px] bg-secondary mt-24 flex flex-col md:flex-row border-8 border-solid xl:px-[8rem]">
        <div className="order-2 md:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center md:mb-8 md:ml-16 mx-6 order-2 md:order-1 p-4 md:p-0">
              <h1 className="text-5xl lg:text-6xl font-semibold lg:ml-16 p-4 uppercase">
                {book.name}
                <p className="text-sm pt-2 mt-2 font-semibold">
                  por {book.author}
                </p>{" "}
              </h1>
              <div className="lg:ml-16 p-4">
                <p className="text-md font-normal">{book.description}</p>
              </div>
              <div className="flex ml-4 mb-4">
                <button className="bg-third hover:bg-fourth py-2 px-4 rounded-md lg:ml-16 text-white">
                  Comprar
                </button>
              </div>
            </div>
            <div className="min-h-[550px] sm:min-h-[450px] flex justify-center items-center relative order-1 md:order-2 mt-8 md:mt-8 p-3">
              <div className="h-[400px] sm:h-[550px] flex justify-center items-center">
                <img
                  src={book.image}
                  onClick={handleOrderPopup}
                  alt="book img"
                  className="w-[300px] h-[500px] sm:h-[350px] sm:w-[400px] md:h-[500px] md:w-[300px] md:p-0 object-contain mb-12"
                />
              </div>

              <div className="flex">
                <div className="flex flex-col items-start lg:items-center lg:flex-col gap-4">
                  {books.map((item) => (
                    <img
                      key={item.name}
                      src={item.image}
                      onClick={() => setBook(item)}
                      alt={book.name}
                      className="max-w-[130px] h-[130px] md:mr-2 object-contain cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out ml-4 "
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
