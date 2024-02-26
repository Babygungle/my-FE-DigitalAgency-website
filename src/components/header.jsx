import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-10 placeholder-yellow-900">
      <a href="/">
        <span class="text-3xl text-[#404C99] font-bold">Agency</span>
      </a>
      <nav class="bg-[#ECF7FB] font-sans justify-between border-gray-200 px-4 lg:px-6 py-12">
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse  bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-7 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>

              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/service">Service</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/blog">Blog</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/pricing">Pricing</a>
                </li>
                <button
                  className="my-8 max-lg:hidden max-md:hidden text-blue-950 hover:bg-gray-50 focus:ring-4 focus:ring-blue-950 
                font-medium rounded-lg text-sm px-4 py-3 lg:py-4 mr-0 border-[1.8px] border-blue-950"
                >
                  <a href="#">Log in</a>
                </button>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-5 lg:flex text-xl text-[#183B56] absolute left-40 px-16 top-10 ">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </nav>
      <div>
        <button
          className="flex max-md:visible max-sm:invisible max-md:mr-[-10px] max-sm:mr-80 space-x-8 items-center text-blue-950 hover:bg-gray-50 focus:ring-4 focus:ring-blue-950 
                font-medium rounded-lg text-sm px-3 lg:px-8 py-3 lg:py-4 mr-4 border-[1.8px] border-blue-950"
        >
          <a href="#">Log in</a>
        </button>
      </div>

      <section className="text-landing">
        <p
          className="flex text-wrap justify-start mt-30 mr-80 py-20 pr-80 pl-20 pb-40 text-blue-950 text-5xl max-md:text-xl 
        max-md:text-wrap max-md:mx-auto max-md:pr-5 max-md:py-5 max-md:pl-4 max-md:pt-80 max-md:pb-3
        font-black leading-snug drop-shadow-xl"
        >
          We help you <br></br>
          to build your Business
        </p>
        <p
          className="text-wrap justify-start mt-[-220px] mr-80 py-20 pr-60 pl-20 text-blue-950 text-base font-normal
        max-md:text-nowrap max-md:pr-8 max-md:pl-4 max-md:pt-60 max-sm:text-nowrap
        leading-snug"
        >
          Enthusiastically extend extensive customer service <br></br>
          before best-of-breed convergence completely.
        </p>
      </section>
      <button
        className="w-35 h-16 left-20 ml-20 mt-[-50px] mb-[20px] py-5 px-7 drop-shadow-2xl bg-[#404C99] rounded-2xl text-center text-white text-base font-bold
        max-md:ml-3 max-md:mt-[-100px] max-md:mr-40 max-md:mb-[-100px] max-sm:mb-[-100px] hover:bg-[#404C85] focus:ring-4 focus:ring-blue-950 "
      >
        Get a Quotes
      </button>
      <div class="image-container">
        <div
          className="px-7 h-auto w-[550px] mt-[-510px] ml-[500px] max-lg:ml-[270px] max-lg:mt-[-550px] max-md:mt-[-510px] max-sm:mt-[-540px] min-md:h-auto
        max-md:w-[300px] max-md:ml-[130px] max-sm:ml-[130px]"
        >
          <img
            class="h-auto w-90 rounded-lg"
            src="https://freepngimg.com/thumb/girl/139335-mobile-using-girl-happy-phone.png"
            alt="image description"
          ></img>
        </div>
        <div class="box-border border-white rounded-md drop-shadow-xl h-[90px] w-[180px] text-[15px] p-4 border-2 bg-white z-10 px-3 pt-15 mt-[-350px] ml-[550px] max-lg:ml-[340px] max-lg:mt-[-400px] max-md:mt-[-200px] max-sm:mt-[-240px] min-md:h-auto
        max-md:w-[130px] max-md:ml-[60px] max-md:text-sm">
        ⭐⭐⭐⭐⭐<br></br>
        20k+ Customer Review
      </div>
      <div class="box-border border-white rounded-md drop-shadow-xl h-[90px] w-[160px] text-[15px] p-4 border-2 bg-white z-10 px-4 pt-15 ml-[1000px] mt-[-20px] max-lg:ml-[730px] max-lg:mt-[80px] max-md:mt-[-30px] max-sm:mt-[60px] max-sm:ml-[40px] min-md:h-auto
        max-md:w-[120px] max-md:h-[80px] max-md:ml-[450px] max-md:text-sm">
        Project Done<br></br>
        3,258 ↗️
      </div>
      <div class="circle-1 rounded-full w-[400px] h-[400px] border border-gray-400 -z-10
      ml-[650px] mt-[-260px] max-lg:ml-[430px] max-lg:mt-[-300px] max-md:mt-[-200px] max-sm:mt-[-240px] max-sm:ml-[40px] min-md:h-auto
      max-md:w-[300px] max-md:h-[300px] max-md:ml-[170px] max-md:text-sm"></div>
      <div class="circle-2 rounded-full w-[300px] h-[300px] border border-gray-400 -z-10
      ml-[700px] mt-[-360px] max-lg:ml-[480px] max-lg:mt-[-340px] max-md:mt-[-260px] max-sm:mt-[-260px] max-sm:ml-[79px] min-md:h-auto
      max-md:w-[220px] max-md:h-[220px] max-md:ml-[210px] max-md:text-sm"></div>
      </div>
    </div>
  );
}
