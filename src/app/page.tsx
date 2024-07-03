import { Header } from "@/components/header";
import Image from "next/image";
import image_web from '../../public/image-web-3-mobile.jpg'
import image_laptop from '../../public/image-top-laptops.jpg'
import image_retro_pcs from '../../public/image-retro-pcs.jpg'
import image_gaming from '../../public/image-gaming-growth.jpg'


export default function Home() {
  return (
    <main className="flex w-[100vw] min-h-screen flex-col items-center justify-between p-4">
      <div className="flex flex-col gap-8 w-[70%]">
        <Header/>
        <div className="flex justify-between">
          <div >
            <Image className="w-[35rem] h-[15rem] rounded" src={image_web} alt="image web"/>
            <div className="flex justify-between mt-4">
              <p className="w-[10rem] text-3xl font-black leading-10">
                The Bright Future of Web 3.0? 
              </p>
              <section className="flex flex-col gap-4 justify-end">
                <p className="w-[20rem] text-sm">
                  We dive into the next evolution of the web that claims to put the power of the 
                  platforms back into the hands of the people. But is it really fulfilling its promise. 
                </p>
                <button className="bg-red-400 w-36 p-2 text-xs font-semibold rounded tracking-widest">R E A D M O R E</button>
              </section>
            </div>
          </div>
          
          <section className="flex flex-col gap-4 bg-blue-950 w-[20rem] py-6 px-4 rounded">
            <h1 className="text-orange-300 font-extrabold text-2xl">New</h1>
            <ul className="flex flex-col gap-6">
              <li className="border-b-2 border-gray-500 pb-4">
                <h1 className="text-white font-extrabold">Hydrogen VS Electric Cars</h1>
                <p className="text-gray-300 text-xs w-[16rem]">Will hydrogen-fueled cars ever catch up to EVs?</p>
              </li>
              <li className="border-b-2 border-gray-500 pb-4">
                <h1 className="text-white font-extrabold">The Downsides of AI Arstistry</h1>
                <p className="text-gray-300 text-xs w-[16rem]">What are the possible adverse effects of on-demand AI image generation?</p>
              </li>
              <li>
                <h1 className="text-white font-extrabold">Is VC Funding Drying Up?</h1>
                <p className="text-gray-300 text-xs w-[16rem]">Private funding by VC firms is down 50% YOY.We take a look at what thats means.</p>
              </li>
            </ul>
          </section>
        </div>
        <ul className="flex justify-center items-center gap-4">
          <li className="flex gap-4">
            <Image className="w-16" src={image_retro_pcs} alt="image"/>
            <div>
              <h1 className="font-extrabold text-4xl text-orange-400">01</h1>
              <span className="font-extrabold">Reviving Retro PCs</span>
              <p className="w-[15rem] text-xs text-gray-400">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <Image className="w-16" src={image_laptop} alt="image"/>
            <div>
              <h1 className="font-extrabold text-4xl text-orange-400">02</h1>
              <span className="font-extrabold">Top 10 Laptops of 2022</span>
              <p className="w-[15rem] text-xs text-gray-400">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <Image className="w-16" src={image_gaming} alt="image"/>
            <div>
              <h1 className="font-extrabold text-4xl text-orange-400">03</h1>
              <span className="font-extrabold">The Growth of Gaming</span>
              <p className="w-[15rem] text-xs text-gray-400">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
