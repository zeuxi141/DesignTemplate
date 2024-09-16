import React from "react";
import logo from './assets/logo.svg';
import menu from './assets/icon-menu.svg';
import close from './assets/icon-menu-close.svg';
import imageGrowing from './assets/image-gaming-growth.jpg';
import imageRetro from './assets/image-retro-pcs.jpg';
import imageTop from './assets/image-top-laptops.jpg';
import imageWeb from './assets/image-web-3-desktop.jpg';
import imageMobile from './assets/image-web-3-mobile.jpg';

function App() {
  return (
    <>
      <div className="p-3 overflow-x-hidden md:px-16 md:py-7 lg:px-24 xl:px-44 2xl:px-96">
        <header className="flex justify-between items-center mt-5 mb-7 lg:mt-9 lg:mb-11 2xl:mb-28 2xl:mt-32">
          <div className="w-full">
            <img src={logo} alt="Logo" className="md:w-1/6 lg:w-[11%]"/>
          </div>
          <div className="peer md:hidden">
            <img src={menu} alt="Menu_Icon" />
          </div>
          <nav className="fixed bg-gray-50 h-screen top-0 right-[-100%] w-[65%] p-8 gap-32 peer-hover:right-0 transition-all duration-300 ease-in-out opacity-0 peer-hover:opacity-100 flex  flex-col justify-start items-end md:relative md:right-0  md:opacity-100 md:h-0 md:p-0">
            <div className="md:hidden">
              <img src={close} alt="Close"/>
            </div>
            <ul className="flex flex-col justify-start w-full items-start gap-4 font-medium text-gray-800 md:flex-row *:transition-all *:duration-300 *:ease-in-out md:text-gray-400 lg:justify-end *:cursor-pointer">
              <li className="hover:text-orange-600">Home</li>
              <li className="hover:text-orange-600">News</li>
              <li className="hover:text-orange-600">Popular</li>
              <li className="hover:text-orange-600">Trending</li>
              <li className="hover:text-orange-600">Categories</li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="lg:flex lg:justify-center lg:gap-5 xl:gap-8 2xl:gap-20">
            <section className="lg:w-[65%]">
              <div>
                <img src={imageMobile} alt="MobileImage" className="md:hidden"/>
                <img src={imageWeb} alt="WebImage" className="hidden md:block"/>
              </div>
              <div className="flex flex-col justify-center items-start gap-5 pt-5 lg:flex-row lg:gap-3 lg:pt-12 xl:pt-16">
                <h1 className="text-4xl font-extrabold lg:w-[40%]">The Bright Future of Web 3.0?</h1>
                <div className="lg:w-[60%]">
                  <p className="text-gray-500 mb-5">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                  <button className="mb-5 bg-red-500 font-bold p-3 px-7 tracking-[0.2rem] uppercase hover:bg-gray-900 hover:text-gray-100 transition-all duration-300 ease-in-out">Read More</button>
                </div>
              </div>
            </section>
            <section className="bg-gray-900 text-gray-100 p-5 lg:w-[35%]">
              <h2 className="text-yellow-400 font-bold text-4xl pb-5">New</h2>
              <ul className="flex flex-col justify-center items-start gap-6 *:flex *:flex-col *:justify-center *:items-start *:border-b *:border-gray-400 *:pb-6 *:gap-1">
                <li className="group">
                  <h3 className="text-lg font-bold group-hover:text-yellow-400 transition-all duration-300 ease-in-out">Hydrogen VS Electric Cars</h3>
                  <p className="text-gray-400">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>
                <li className="group">
                  <h3 className="text-lg font-bold group-hover:text-yellow-400 transition-all duration-300 ease-in-out">The Downsides of AI Artistry</h3>
                  <p className="text-gray-400">What are the possible adverse effects of on-demand AI image generation?</p>
                </li>
                <li className="border-none pb-0 group">
                  <h3 className="text-lg font-bold group-hover:text-yellow-400 transition-all duration-300 ease-in-out">Is VC Funding Drying Up?</h3>
                  <p className="text-gray-400">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </li>
              </ul>
            </section>
          </div>
        </main>
        <footer className="mt-14 lg:mt-20 xl:mt-28 2xl:mt-40">
          <ul className="flex flex-col justify-center gap-10 *:w-full lg:flex-row">
            <li className="flex justify-between gap-5 items-center group ">
              <img src={imageRetro} alt="Retro_PCs" className="w-[30%] lg:w-[40%]"/>
              <div>
                <h4 className="text-3xl font-bold text-orange-600">01</h4>
                <h5 className="font-bold text-lg group-hover:text-orange-600 transition-all duration-300 ease-in-out">Reviving Retro PCs</h5>
                <p className="text-gray-600">What happens when old PCs are given modern upgrades?</p>
              </div>
            </li> 
            <li className="flex justify-between gap-5 items-center group ">
              <img src={imageTop} alt="Top_Laptops" className="w-[30%] lg:w-[40%]"/>
              <div>
                <h4 className="text-3xl font-bold text-orange-600">02</h4>
                <h5 className="font-bold text-lg group-hover:text-orange-600 transition-all duration-300 ease-in-out">Top 10 Laptops of 2022</h5>
                <p className="text-gray-600">Our best picks for various needs and budgets.</p>
              </div>
            </li>
            <li className="flex justify-between gap-5 items-center group  ">
              <img src={imageGrowing} alt="Growth_Of_Gaming" className="w-[30%] lg:w-[40%]"/>
              <div>
                <h4 className="text-3xl font-bold text-orange-600">03</h4>
                <h5 className="font-bold text-lg group-hover:text-orange-600 transition-all duration-300 ease-in-out">The Growth of Gaming</h5>
                <p className="text-gray-600">How the pandemic has sparkeed fresh opportunities.</p>
              </div>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
