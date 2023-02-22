'use client'

import { NextFont } from "@next/font";

export interface INavbar {
  primaryFont : NextFont 
}

const Navbar = (props : INavbar) => {

  const { primaryFont } = props

  return (
    <div>
      <h2 className={primaryFont.className}>
        NAVBARR
      </h2>        
    </div>
  );
}
 
export default Navbar;