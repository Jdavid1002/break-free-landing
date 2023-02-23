import { NextFont } from "@next/font";


interface IBanner {
  primaryFont: NextFont;
}


const Catalogue = (props:IBanner) => {

  const {primaryFont} = props

  return (
    <div className={primaryFont.className}>
      <div>
        {/*Cristian*/}
      </div>


      <div>
        {/*Maicol*/}


      </div>
    </div>
  );
}

export default Catalogue