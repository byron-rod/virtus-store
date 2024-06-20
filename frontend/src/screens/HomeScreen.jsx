import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import BookList from "../components/BookList";
import books from "../books";

const HomeScreen = () => {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <BookList component={books} />
        </section>
      </main>
    </>
  );
};

export default HomeScreen;
