import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./css/about.css";

const About = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="container">
          <h1>About</h1>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
