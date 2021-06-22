import React from "react";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();

  const returnHome = () => {
    history.push("/");
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-base p-5 ">
      <div className="flex justify-between md:justify-around text-lg  md:text-2xl text-logo px-8 md:px-24 bold">
        <div onClick={returnHome} className="cursor-pointer">
          the shed guys
        </div>

        <div>541-779-7433</div>
      </div>
    </div>
  );
}
