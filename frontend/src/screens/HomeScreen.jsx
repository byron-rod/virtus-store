import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import BookList from "../components/BookList";
import axios from "axios";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // use axios to fetch data from the backend
    const fetchBooks = async () => {
      const { data } = await axios.get("/api/books");
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <main>
        <section>
          <Hero books={books} />
        </section>
        <section>
          <About />
        </section>
        <section>
          <BookList books={books} />
        </section>
      </main>
    </>
  );
};

export default HomeScreen;
