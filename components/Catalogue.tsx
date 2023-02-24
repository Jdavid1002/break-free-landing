'use client'

import { NextFont } from "@next/font";
import { FiHeart } from "react-icons/fi";
import {BsFillHeartFill} from 'react-icons/bs'
import Image, { StaticImageData } from 'next/image'
import {CatalogueItems} from './functions/CatalogueItems'
import { FiltersItems } from "./functions/Filters";

import Styles from './Catalogue.module.css'


interface IBanner {
  primaryFont: NextFont;
}

export interface IFilters {
  id: number
  name: string
}

export interface ICatalogue { 
  id: number
  image: StaticImageData
  price: string
  favorite: boolean
  name: string
}

const Catalogue = (props:IBanner) => {
  const {primaryFont} = props
  // const [selection, setSelection] = useState(false)

  // const button_selection = () => {
  //   setSelection(!selection)
  // }

  const setFav = (item:ICatalogue) => {  
    if (item.favorite === false) {  
      
    }
  }
  
  return (
    <div className={`${primaryFont.className} ${Styles.Catalogue}`}>
      <div className={Styles.ContainFiltersTargets}>
        <div className={Styles.filter_container}>
          {/*Cristian*/}
          {FiltersItems.map((item) => (
            <button 
              key={item.id}
              className={`${primaryFont.className} ${Styles.filter_button}`}
            >
              {item.name}
            </button>
          ))}
        </div>


        <div className={Styles.ContainTargets}>
          <div className={Styles.TargetTitle}>
            <h2 className={Styles.Title}>New arrivals</h2>
            <p>View more</p>
          </div>
          <div className={Styles.ContainTarget}>
            {CatalogueItems.map((item) => (
              <div key={item.id} className={Styles.Target}>
                <div className={Styles.containLikeButton}>
                  {!item.favorite ? <FiHeart onClick={()=>setFav(item)} className={Styles.like_button} /> : 
                    <BsFillHeartFill onClick={()=>setFav(item)} className={Styles.liked_button}/>
                  }
                </div>
                <Image
                  className={Styles.imageTarget}
                  alt="images"
                  src={item.image}
                />
                <div className={Styles.containPrice}>
                  <p>{item.name}</p>
                  <p className={Styles.Price}>{item.price} COP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogue