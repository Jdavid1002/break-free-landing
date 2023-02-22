'use client'

import { NextFont } from "@next/font";

export interface IBanner {
  primaryFont : NextFont
}

const Banner = (props : IBanner) => {

  const { primaryFont } = props

  return (
    <div>
      <h2 className={primaryFont.className}>
        Banner 
      </h2>
    </div>
  );
}
 
export default Banner;