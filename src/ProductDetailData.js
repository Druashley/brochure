import colorTwo from "./imgs/colortwo.jpg";
import colorThree from "./imgs/colorThree.jpg";
import colorFour from "./imgs/colorFour.jpg";
import colorFive from "./imgs/colorFive.jpg";

export default function productDetailData(product) {
  const blankImgSrc = "https://dummyimage.com/720x600/F3F4F7/8693ac";

  switch (product) {
    case "color":
      return {
        title: "Color options",
        mainParagraph:
          "We work with Scherwin-Williams and Benjamin Moore to meet all possible color needs. If the color exists then we can get it for you.",
        secondParagraph:
          "Color match your house or color your build something bold to stand out.",
        pictures: [
          {
            imgUrl: colorTwo,
            phrase:
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            id: 1,
          },
          {
            imgUrl: colorThree,
            phrase:
              "Elementum eu facilisis sed odio morbi quis commodo odio aenean.",
            id: 2,
          },
          {
            imgUrl: colorFour,
            phrase:
              "Viverra vitae congue eu consequat. Sed adipiscing diam donec adipiscing tristique risus. Sed id semper risus in. Eget nunc scelerisque viverra mauris in aliquam sem.",
            id: 3,
          },
          {
            imgUrl: colorFive,
            phrase:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            id: 4,
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
    default:
      break;
  }
}