'use client'

import { NextFont } from "@next/font";
import { FiHeart } from "react-icons/fi";
import {useState} from 'react'
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

const Catalogue = (props: IBanner) => {

  
  const {primaryFont} = props
  // const [selection, setSelection] = useState(false)
  
  // const button_selection = () => {
  //   setSelection(!selection)
  // }
    
  //Metemos el catalogo en un state para poder modificarlo
  const [Fav, setFav] = useState<ICatalogue[]>(CatalogueItems)

  //hacemos una funcion que va recibir un item al hacer click
  const FavoriteEnable = (selected: ICatalogue) => {  
    //creamos constante la cual va mapear el catalogo 
    const newfav = Fav.map(item => { 
      //si item.id es igual al selected.id
      if (item.id === selected.id) {
        //me retorna los datos del item y favorite lo pasa al contrario de item.favorite
        return {  
          ...item,
          favorite: !item.favorite
        }

        //en caso de que no sea igual me retorna el item
      }else {
        return item  
      }
    })

    //seteamos Fav con el nuevo catalogo
    setFav(newfav)
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

            {/*Mapeamos el catalogo*/}
            {Fav.map((item) => (
              <div key={item.id} className={Styles.Target}>
                <div className={Styles.containLikeButton}>
                  {!item.favorite? <FiHeart onClick={()=>FavoriteEnable(item)} className={Styles.like_button} /> : 
                    <BsFillHeartFill onClick={()=>FavoriteEnable(item)} className={Styles.liked_button}/>
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