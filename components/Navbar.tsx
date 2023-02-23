"use client";

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

  const clickMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className={!mobile? styles.navbar : styles.navbar_mobile}>
      <div className={!mobile ? styles.logo_container : styles.logo_disable}>
        LOGO MI PAPÁ
      </div>

      <div className={!mobile? styles.right_container : styles.right_container_mobile}>
        <div className={styles.search_container}>
          <input
            className={styles.search}
            type="text"
            placeholder="Busca tus prendas favoritas, blusas, pantalones..."
          />

          <button className={styles.search_button}>
            <BiSearchAlt />
          </button>
        </div>

        <div className={styles.mobile}>
          <input
            className={mobile ? styles.search_mobile : styles.disable}
            type="text"
            placeholder="Busca tus prendas favoritas, blusas, pantalones..."
          />

          <button onClick={clickMobile} className={styles.search_button}>
            <BiSearchAlt />
          </button>
        </div>

        <button className={styles.like_button}>
          <FiHeart className={styles.heart} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className={styles.right_container}>
        <div className={styles.search_container}>
          <input
            className={!mobile? styles.search : styles.search_mobile}
            type="text"
            placeholder="Busca tus prendas favoritas, blusas, pantalones..."
          />

          <button className={styles.search_button}>
            <BiSearchAlt />
          </button>

          <button onClick={clickMobile} className={styles.search_button_mobile}  >
            <BiSearchAlt />
          </button>
        </div>

        <button className={styles.like_button}>
          <FiHeart className={styles.heart} />
        </button>

      </div> */
}
