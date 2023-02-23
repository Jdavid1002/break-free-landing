import { NextFont } from "@next/font";
import Styles from './Catalogue.module.css'

interface IBanner {
  primaryFont: NextFont;
}


const Catalogue = (props:IBanner) => {

  const {primaryFont} = props

  return (
    <div className={`${primaryFont.className} ${Styles.Catalogue}`}>
      <div className={Styles.ContainerTarget}> 
        <div>
          {/*Cristian*/}
          filters
        </div>

        <div>
          <div> 
            <h2>New arrivals</h2>  
            <p>View more</p>
          </div>

          <div> 
            targets
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue