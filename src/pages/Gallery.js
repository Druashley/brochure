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
import color from "../imgs/barns/19-211-PB081206.JPG";
import siding from "../imgs/siding.jpg";
import interior from "../imgs/interior.jpg";
import roof from "../imgs/roof.jpg";
import barn from "../imgs/barns/19-220-DB121608.jpg";
import shedMain from "../imgs/sheds/19-193-DS121208.jpg";
import coop from "../imgs/coops/19-334-CC86L.jpg";

import React from "react";

export default function Gallery() {
  const images = [
    { imageUrl: shedMain, type: "sheds", url: "shed" },
    { imageUrl: barn, type: "barns", url: "barn" },
    { imageUrl: coop, type: "coops", url: "coop" },
    { imageUrl: color, type: "color", url: "color" },
    { imageUrl: roof, type: "roofs", url: "roof" },
    { imageUrl: windows, type: "windows", url: "windows" },
    { imageUrl: lofts, type: "lofts", url: "loft" },
    { imageUrl: deck, type: "decks", url: "deck" },
    { imageUrl: doors, type: "doors", url: "door" },
    { imageUrl: shed, type: "skirts", url: "skirt" },
    { imageUrl: siding, type: "siding", url: "siding" },
    { imageUrl: interior, type: "interior", url: "interior" },
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
