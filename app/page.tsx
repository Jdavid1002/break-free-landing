import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Catalogue from '../components/Catalogue'
import {Open_Sans} from "@next/font/google";
import { NextFont } from "@next/font";


const primaryFont : NextFont = Open_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <main>
      {/*DEVELOPMENT*/}
      <Navbar primaryFont={primaryFont} />
      <Banner primaryFont={primaryFont} />
      <Catalogue primaryFont={primaryFont}/>
    </main>
  );
}
