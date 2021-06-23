import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import productDetailData from "../ProductDetailData";

export default function ProductDetail({ product }) {
  const { title, mainParagraph, secondParagraph, pictures } =
    productDetailData(product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();

  const returnHome = () => {
    history.push("/");
  };

  return (
    <div>
      <section>
        <div className="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center shadow-xl"
              alt="hero"
              loading="lazy"
              src={pictures[0].imgUrl}
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
      <div className="flex flex-wrap overflow-hidden container mx-auto justify-center">
        {pictures
          ? pictures.reverse().map((picture) => {
              return (
                <div className="md:m-4 flex flex-col" key={picture.id}>
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full mb-8"
                      src={picture.imgUrl}
                      alt="blog"
                      key={picture.id}
                    ></img>
                    <div className=" absolute right-2 bottom-0 text-gray-600 flex md:right-0">
                      <h2>{picture.buildId}</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-building-cottage"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#E60D2E"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
                        <circle cx="12" cy="9" r="2" />
                        <path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
                      </svg>
                    </div>
                  </div>

                  <p className="border border-logo px-4 py-4 mb-4 rounded shadow-lg md:w-96 mx-auto">
                    {picture.phrase}
                  </p>
                </div>
              );
            })
          : ""}
      </div>
      <div
        className="w-24 flex border-2 border-logo rounded-3xl px-4 py-2 ml-4 my-12 uppercase text-sm lg:ml-48  shadow-2xl cursor-pointer hover:bg-gray-100 "
        onClick={returnHome}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-left"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#E60D2E"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="11" y2="18" />
          <line x1="5" y1="12" x2="11" y2="6" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-building-cottage"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#E60D2E"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="3" y1="21" x2="21" y2="21" />
          <path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11" />
          <circle cx="12" cy="9" r="2" />
          <path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5" />
        </svg>
      </div>
    </div>
  );
}
