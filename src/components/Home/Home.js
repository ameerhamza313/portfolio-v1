import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Ameerhamza Sanadi</span>
            </h1>
            <h2>
              <span className="custom">a</span>
              <span>
                <Typewriter
                  words={[" Full Stack Web Developer.", " MERN Stack Developer."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
