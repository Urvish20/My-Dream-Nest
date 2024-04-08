import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const AboutPage = () => {
  return (
    <>
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-brand-blue/50 sm:bg-brand-blue/10 sm:bg-gradient-to-r sm:from-brand-blue/70 sm:to-white/5"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl xl:text-6xl font-heading  text-white sm:text-left">
              About Us
            </h1>

            <p className="mt-4 max-w-md sm:text-md font-content text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              nunc a mi condimentum fermentum. Integer id nisi id tortor
              scelerisque consequat. Nam dapibus felis non orci pulvinar, at
              convallis mi pharetra. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Vivamus sit amet
              suscipit arcu. Curabitur id ligula nisl. Ut accumsan libero id
              nulla mollis suscipit. Integer in dui efficitur, molestie dolor
              et, pharetra felis. Sed non est magna. Duis at est risus.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/contact"
                className="block w-full rounded bg-brand-blue px-12 py-3 text-sm font-heading uppercase text-white shadow hover:bg-white hover:text-brand-blue duration-300 ease-in-out sm:w-auto"
              >
                Contact Us
              </Link>

              <Link
                to="/"
                className="block w-full rounded hover:bg-brand-blue px-12 py-3 text-sm font-heading uppercase hover:text-white shadow bg-white text-brand-blue duration-300 ease-in-out sm:w-auto"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
