import GridGallery from "../components/GridGallery";
import Title from "../components/Title";

import shed from "../imgs/shed1.jpg";
import windows from "../imgs/Windows.jpg";
import shelves from "../imgs/Shelves.jpg";
import lofts from "../imgs/Lofts.jpg";
import doors from "../imgs/doors.jpg";
import ramps from "../imgs/Ramps.jpg";
import flowerboxes from "../imgs/flowerboxes.jpg";
import pegboard from "../imgs/pegboards.jpg";
import weathervane from "../imgs/weathervane.jpg";
import deck from "../imgs/deck.jpg";
import color from "../imgs/color.jpg";
import siding from "../imgs/siding.jpg";
import interior from "../imgs/interior.jpg";

import React from "react";

export default function Gallery() {
  const images = [
    { imageUrl: color, type: "color", url: "color" },
    { imageUrl: lofts, type: "lofts", url: "loft" },
    { imageUrl: deck, type: "decks", url: "deck" },
    { imageUrl: doors, type: "doors", url: "door" },
    { imageUrl: shed, type: "skirts", url: "skirt" },
    { imageUrl: siding, type: "siding", url: "siding" },
    { imageUrl: interior, type: "interior", url: "interior" },
    { imageUrl: windows, type: "windows", url: "windows" },
    { imageUrl: shelves, type: "shelves & benches", url: "shelves" },
    { imageUrl: ramps, type: "ramps", url: "ramps" },
    { imageUrl: flowerboxes, type: "flower boxes", url: "flowerboxes" },
    { imageUrl: pegboard, type: "pegboard", url: "pegboard" },
    { imageUrl: weathervane, type: "weathervanes", url: "weathervane" },
  ];

  return (
    <div>
      <Title />
      <GridGallery images={images} />)
    </div>
  );
}
