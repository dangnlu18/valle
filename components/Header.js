import React from "react";
import Image from "next/image";

function Header() {
  return (
  <header>
    <div className="relative flex items-center h-10 cursor-pointer">
        <Image 
            src='https://links.papareact.com/qd3'
            layout="fill"
            objectFit="contain"
            objectPosition="left"

        />
    </div>
    <div>SEARCH</div>
    <div>BUTTONS</div>

  </header>

  )
}

export default Header;
