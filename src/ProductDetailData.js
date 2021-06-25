//color page imports
import colorTwo from "./imgs/colortwo.jpg";
import colorThree from "./imgs/colorThree.jpg";
import colorFour from "./imgs/colorFour.jpg";
import colorFive from "./imgs/colorFive.jpg";

//roofing imports
import charcoalGrey from "./imgs/product/charcoalGrey.jpg";
import agedRedWood from "./imgs/product/agedRedWood.jpg";
import driftwood from "./imgs/product/driftwood.jpg";
import dualblack from "./imgs/product/dualBlack.jpg";
import dualBrown from "./imgs/product/dualBrown.jpg";
import dualGrey from "./imgs/product/dualGrey.jpg";
import earthToneCedar from "./imgs/product/earthToneCedar.jpg";
import harvardSlate from "./imgs/product/harvardSlate.jpg";
import weatherWood from "./imgs/product/weatherwood.jpg";
import tabBlack from "./imgs/product/3tabBlack.jpg";
import tabGrey from "./imgs/product/3tabGrey.jpg";

//barns

export default function productDetailData(product) {
  const blankImgSrc = "https://dummyimage.com/720x600/F3F4F7/8693ac";

  switch (product) {
    case "color":
      return {
        title: "Color options",
        mainParagraph:
          "We work with Scherwin-Williams and Benjamin Moore to meet all possible color needs. If the color exists then we can get it for you.",
        secondParagraph:
          "Color match your house, or color your build something bold to stand out. ",
        pictures: [
          {
            imgUrl: colorTwo,
            phrase:
              "This is a Deluxe 8' x 12' x 8' Shed. Options include custom paint, windows with grids, and flowerboxes.  ",
            id: 1,
            buildId: "19-144",
          },
          {
            imgUrl: colorThree,
            phrase:
              "This is a Premium 8' x 10' x 7' Shed. Options include custom paint, a pressure treated wood skirt, 3' doouble doors, and an overhang.",
            id: 2,
            buildId: "19-162",
          },
          {
            imgUrl: colorFour,
            phrase:
              "This is a Premium 12' x 5' x 6' Lean 2. Options include custom paint, ramp, and 3' double doors.",
            id: 3,
            buildId: "20-236",
          },
          {
            imgUrl: colorFive,
            phrase:
              "This is a Premium 12' x 16' x 8' Mini Barn. Options include a sliding window in the gable peak, 3' double doors, a ramp, an overhang, custom paint, and a pressure treated wood skirt.",
            id: 4,
            buildId: "20-129",
          },
        ],
      };
    case "loft":
      return {
        title: "Lofts",
        mainParagraph:
          "Lofts are a great way to trade head space for floor space. Lofts can be used for a lot of different things, but no matter how you use it you’ll be making the most of your space. ",
        secondParagraph: "Take your space to the next level!",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "deck":
      return {
        title: "Decks",
        mainParagraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        secondParagraph: "Excepteur sint occaecat cupidatat non proident",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "door":
      return {
        title: "Doors",
        mainParagraph:
          "We can create or order any door you might need for your shed. You can choose the door hardware you want to on your structure to make sure that it matches your style, and operates exactly how you want!",
        secondParagraph:
          " Double Doors, Man Doors, French Doors, Recycled Doors, and Door Hardware",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "skirt":
      return {
        title: "Skirt",
        mainParagraph:
          "A pressure treated wood skirt can help reduce the likelihood of a critter making a home. ",
        secondParagraph: "Reduce the chance for critters to make a home.",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "siding":
      return {
        title: "Siding",
        mainParagraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        secondParagraph: "Custom siding to match your house or stand out.",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "interior":
      return {
        title: "Interior",
        mainParagraph:
          "Adding a tongue and groove pine package to your structure is an amazing way to give the interior and clean, high end, and finished look. It will set you apart from the other structures with unfinished walls or drywall. Tongue and groove pine can be added to any shed, mini barn, or lean 2.",
        secondParagraph: "Tongue & Groove pine",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "windows":
      return {
        title: "Windows",
        mainParagraph:
          "Put a window in almost any wall in any place. We can customize your lighting solution and tailor it to any need.",
        secondParagraph:
          "Windows are great for letting in light and ventilation, as well as adding visual appeal.",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "shelves":
      return {
        title: "Shelves & Benches",
        mainParagraph:
          "Shelves and benches are a great way to add some usable flat surfaces to your shed, mini barn, lean 2, etc. Whether you need to add shelves for storage or a bench to work at, these high quality surfaces with make your structure even better!",
        secondParagraph: "Flat surfaces to work on",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "ramps":
      return {
        title: "Ramps",
        mainParagraph:
          "Ramps make it easier to not only get in and out of your structure, but it also makes it much easier to get heavy things in and out as well. Whether you’re storing furniture, or driving a riding lawn mower in and out, a ramp is sure to help save your back.",
        secondParagraph: "Custom or metal ramps",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "flowerboxes":
      return {
        title: "Flowerboxes",
        mainParagraph:
          "Flower boxes can be attached to the bottom of any window giving you a great place to grow beautiful flowers. Not only do these boxes add a great look to any structure, but the flowers you grow will also make your structure look even more amazing!",
        secondParagraph: "Don't forget about your green thumb",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "pegboard":
      return {
        title: "Pegboard",
        mainParagraph:
          "Sem et tortor consequat id porta nibh venenatis. Hac habitasse platea dictumst quisque sagittis purus sit. Quis viverra nibh cras pulvinar mattis.",
        secondParagraph:
          "Pegboard can be added to walls to help with storage and organization!",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "weathervane":
      return {
        title: "Weathervanes",
        mainParagraph:
          "Amet purus gravida quis blandit turpis cursus. Ligula ullamcorper malesuada proin libero nunc. Adipiscing bibendum est ultricies integer quis auctor elit. Scelerisque fermentum dui faucibus in ornare. Justo laoreet sit amet cursus sit. Semper eget duis at tellus at urna condimentum mattis.",
        secondParagraph:
          "Tempor nec feugiat nisl pretium fusce id velit. Nisl tincidunt eget nullam non nisi. ",
        pictures: [
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 1,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 2,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 3,
          },
          {
            imgUrl: blankImgSrc,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
          },
        ],
      };
    case "roof":
      return {
        title: "roofing options",
        mainParagraph:
          "Our basic option for roofing is 30 year 3-tab asphalt roofing shingles in black or light grey. We also offer IKO Cambridge dimensional roofing as our go to option for upgrading the look of a roof. The dimensional roofing comes standard in our Deluxe and Premium models. Custom metal roofing is avilabile as well. ",
        secondParagraph:
          "3-Tab Asphalt, IKO Cambridge dimensional Shingles, or Metal roofs",
        pictures: [
          {
            imgUrl: dualblack,
            phrase:
              "Perfect Paring: Grey or neutral siding or stone; white trim.",
            id: 1,
            buildId: "IKO Cambridge: Dual Black",
          },
          {
            imgUrl: charcoalGrey,
            phrase:
              "Perfect Paring: Log, beige stone or brick (especially red) facings; brown trim.",
            id: 2,
            buildId: "IKO Cambridge: Charcoal Grey",
          },
          {
            imgUrl: agedRedWood,
            phrase:
              "Perfect Pairing: Log, beige stone or brick (especially red) facings; brown trim.",
            id: 3,
            buildId: "IKO Cambridge: Aged Redwood",
          },
          {
            imgUrl: driftwood,
            phrase:
              "Perfect Pairing: Log, wood siding, stone or brick facings; brown or black trim",
            id: 4,
            buildId: "IKO Cambridge: Driftwood",
          },
          {
            imgUrl: dualBrown,
            phrase:
              "Perfect Pairing: Log, beige stone or brick (especially red) facings; brown trim.",
            id: 5,
            buildId: "IKO Cambridge: Dual Brown",
          },
          {
            imgUrl: dualGrey,
            phrase:
              "Perfect Pairing: White or grey stone, brick or siding; black, white or grey trim.",
            id: 6,
            buildId: "IKO Cambridge: Dual Grey",
          },
          {
            imgUrl: earthToneCedar,
            phrase:
              "Perfect Pairing: Log, beige stone or brick facings; brown trim.",
            id: 7,
            buildId: "IKO Cambridge: Earthtone Cedar",
          },
          {
            imgUrl: harvardSlate,
            phrase:
              "Perfect Pairing: White or grey stone, brick or siding; black, white or grey trim.",
            id: 8,
            buildId: "IKO Cambridge: Harvard Slate",
          },
          {
            imgUrl: weatherWood,
            phrase:
              "Perfect Pairing: Log, beige stone or brick (especially red) facings; brown trim.",
            id: 9,
            buildId: "IKO Cambridge: Weatherwood",
          },
          {
            imgUrl: tabBlack,
            phrase: "Standard color option for any of our sheds.",
            id: 10,
            buildId: "3-Tab Black",
          },
          {
            imgUrl: tabGrey,
            phrase: "Standard color option for any of our sheds.",
            id: 11,
            buildId: "3-Tab Grey",
          },
        ],
      };
    default:
      break;
  }
}
