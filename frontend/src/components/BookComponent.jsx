// src/BookComponent.js
import React from "react";
import book1 from "../assets/books/book1.jpg"; // Importing book image
import "../styles/BookComponent.css"; // Importing CSS for styling

const BookComponent = () => {
  return (
    <div className="book-container">
      <div className="book-image">
        <img src={book1} alt="Chain of Gold" />
        <div className="book-thumbnails">
          <img src={book1} alt="thumbnail1" />
          <img src={book1} alt="thumbnail2" />
          <img src={book1} alt="thumbnail3" />
        </div>
      </div>
      <div className="book-details">
        <h1>Chain of Gold: The Last Hours #1</h1>
        <h2>Cassandra Clare</h2>
        <div className="rating">
          <span>⭐️⭐️⭐️⭐️☆</span>
          <span>4.5</span>
        </div>
        <div className="price">$12.49</div>
        <p>
          From #1 New York Times and USA TODAY bestselling author Cassandra
          Clare comes the first novel in a brand-new trilogy where evil hides in
          plain sight and love cuts deeper than any blade. Chain of Gold is a
          Shadowhunters novel.
        </p>
        <div className="book-meta">
          <p>Publisher: Margaret K. Books</p>
          <p>Publication date: March 3, 2020</p>
          <p>Language: English</p>
          <p>Reading age: 14+</p>
          <p>Print length: 592 pages</p>
          <p>Dimensions: 6 × 1.8 × 9 inches</p>
        </div>
        <div className="actions">
          <button>Add to cart</button>
          <button>Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
