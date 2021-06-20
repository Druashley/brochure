import React, { useEffect } from "react";
import productDetailData from "../ProductDetailData";

export default function ProductDetail({ product }) {
  const { title, mainParagraph, secondParagraph } = productDetailData(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section>
        <div className="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              loading="lazy"
              src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            ></img>
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
              {title}
            </h2>
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black title-font">
              {secondParagraph}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-blueGray-700">
              {mainParagraph}
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap overflow-hidden container mx-auto">
        <div className="md:m-4">
          <img
            className="object-cover object-center w-full mb-8 lg:h-48 md:h-36"
            src="https://dummyimage.com/720x400/F3F4F7/8693ac"
            alt="blog"
          ></img>
        </div>
        <div className="md:m-4">
          <img
            className="object-cover object-center w-full mb-8 lg:h-48 md:h-36"
            src="https://dummyimage.com/720x400/F3F4F7/8693ac"
            alt="blog"
          ></img>
        </div>
        <div className="md:m-4">
          <img
            className="object-cover object-center w-full mb-8 lg:h-48 md:h-36"
            src="https://dummyimage.com/720x400/F3F4F7/8693ac"
            alt="blog"
          ></img>
        </div>
        <div className="md:m-4">
          <img
            className="object-cover object-center w-full mb-8 lg:h-48 md:h-36"
            src="https://dummyimage.com/720x400/F3F4F7/8693ac"
            alt="blog"
          ></img>
        </div>
      </div>
    </div>
  );
}
