"use client";

import useLocalStorage from "use-local-storage";
import { FiHeart } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import styles from "@/components/Navbar.module.css";
import { NextFont } from "@next/font";
import { useState } from "react";


export interface INavbar {
  primaryFont: NextFont;
}

const Navbar = (props: INavbar) => {
  const { primaryFont } = props;

  const [mobile, setMobile] = useState(false);
  const [text, setText] = useLocalStorage('text_input', '')

  

  const clickMobile = () => {
    setMobile(!mobile);
  };

  
  return (
    <div className={styles.navbar}>
      <div className={`${styles.logo_container} ${styles.logo_desktop} ${primaryFont.className}`}>
        BREAK FREE
      </div>

      <div
        className={
          !mobile 
            ?`${styles.logo_container} ${styles.logo_mobile} ${primaryFont.className}`
            : styles.disable
        }
      >
        BREAK FREE
      </div>

      <div className={styles.right_container}>
        <div
          className={`${styles.search_container} ${styles.search_container_desktop}`}
        >
          <input
            className={`${styles.search} ${primaryFont.className}`}
            type="text"
            placeholder="Busca tus prendas favoritas, blusas, pantalones..."
            maxLength={50}
            onChange={(e) => setText(e.target.value)}
            
          />

          <button className={styles.search_button}>
            <BiSearchAlt />
          </button>
        </div>

        <div
          className={`${styles.search_container} ${styles.search_container_mobile}`}
        >
          <input
            className={
              mobile
                ?`${styles.search} ${styles.search_mobile} ${primaryFont.className}`
                : styles.disable
            }
            type="text"
            placeholder="Busca tus prendas favoritas, blusas, pantalones..."
            maxLength={30}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={clickMobile} className={styles.search_button}>
            <BiSearchAlt />
          </button>
        </div>

        <button className={styles.like_button}>
          <FiHeart />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
