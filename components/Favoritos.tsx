"use client";

// import "bootstrap/dist/css/bootstrap.min.css"
import useLocalStorage from "use-local-storage";
import Modal from "react-modal";
import styles from "@/components/Favoritos.module.css";
import { NextFont } from "@next/font";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image, { StaticImageData } from 'next/image'

export interface IFavoritos {
  primaryFont: NextFont;
}

interface ICatalogue {
  id: number;
  image: StaticImageData;
  price: string;
  favorite: boolean;
  name: string;
}

function Favoritos(props: any) {
  const { primaryFont } = props;
  const { modalIsOpen } = props;
  const { closeModal } = props;

  const [catalogueFav] = useLocalStorage("CatalogueFav", "");

  const Favs = JSON.parse(catalogueFav);

  console.log(catalogueFav);
  

  return (
    <div>
      <Modal
        className={styles.modal}
        overlayClassName={styles.Overlay}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className={styles.modal_header}>
          <h2 className={primaryFont.className}>Mirá tus favoritos!</h2>
          <button className={styles.close_button} onClick={closeModal}>
            <AiOutlineCloseCircle />
          </button>
        </div>
 
        {Favs.map((item: ICatalogue) => (
          <div key={item.id} className={styles.fav_cards}>
            <Image 
              className={styles.fav_image}
              alt="item image"
              src={item.image}
            />
            <div>
              <p className={primaryFont.className}>{item.name}</p>
              <p className={primaryFont.className}>{item.price} COP</p>
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
}

export default Favoritos;
