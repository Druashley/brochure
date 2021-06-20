import React from "react";

export default function Title() {
  return (
    <section className="text-gray-700 pt-12">
      <div className="container flex flex-col items-center px-5 py-2 mx-auto">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
            endless possibilities
          </h2>
          <h1 className="lg:mx-auto mb-12 text-2xl font-semibold tracking-tighter text-logo lg:w-1/2 sm:text-6xl title-font">
            The Shed Guys Digital Brochure
          </h1>
          <p className="lg:mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-1/2">
            Let our craftsmanship bring your ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
}
