import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useHistory } from "react-router-dom";

export default function GridGallery({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-1 sm:w-2/3 md:w-1/2 mx-auto pt-5">
      {images &&
        images.map((shed, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: -45 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              imageUrl={shed.imageUrl}
              imageText={shed.type}
              url={shed.url}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, show, imageText, url }) {
  const history = useHistory();

  const displayProductDetail = (url) => {
    history.push(`/${url}`);
  };

  return (
    <div
      className={`relative transition ease-in duration-300 transform  ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0 "
        onClick={() => displayProductDetail(url)}
      >
        <div className="absolute inset-0 bg-black opacity-25 cursor-pointer "></div>
        <div className="mx-auto text-white z-10 self-center text-center uppercase tracking-widest text-lg md:text-2xl">
          {imageText}
        </div>
      </div>
      <img className="mx-auto" src={imageUrl} alt="" />
    </div>
  );
}
