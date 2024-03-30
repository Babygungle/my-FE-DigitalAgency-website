import React from "react";
import barGraph from "./pics/bar-graph.png"
import shieldIcon from "./pics/shield-icon.png"

export default function Header() {
  return (
    <div>
      <section className="text-landing">
        <p
          className="flex text-wrap justify-start mt-30 mr-70 py-20 pr-20 pl-32 pb-40 text-[#183B56] text-5xl max-md:text-3xl 
        max-lg:text-4xl max-lg:ml-[-60px] max-md:text-wrap max-md:ml-[2px] max-md:mr-[6px] max-md:pl-[75px] max-md:pt-[500px] max-md:pb-3
        font-black leading-snug drop-shadow-xl"
        >
          We help you<br></br>
          to build your<br></br>
          Business
        </p>
        <p
          className="text-wrap absolute justify-start mt-[-220px] py-20 pr-[0px] pl-[130px] text-[#5A7184] text-base max-md:text-lg font-normal
         max-lg:pl-[70px] max-md:pt-60 max-md:pl-[75px] leading-snug"
        >
          Enthusiastically extend extensive customer service <br></br>
          before best-of-breed convergence completely.
        </p>
        <button
          className="w-35 h-16 ml-[130px] mt-[-50px] mb-[20px] py-5 px-7 drop-shadow-2xl bg-[#404C99] rounded-2xl text-center text-white text-base font-bold
        max-lg:ml-[70px] max-md:ml-[73px] max-md:mt-[140px] hover:bg-[#404C85] focus:ring-4 focus:ring-blue-950 "
        >
          Get a Quotes
        </button>
      </section>
      <div class="image-container px-6">
        <div
          className="px-7 h-auto w-[615px] z-0 absolute max-lg:absolute max-md:absolute max-sm:absolute mt-[-130px] ml-[400px] xl:ml-[500px] max-lg:ml-[250px] max-lg:mt-[20px] max-lg:w-[500px] max-md:mt-[30px] 
          max-sm:mt-[20px] min-md:h-auto max-md:w-[300px] max-md:ml-[150px] max-sm:ml-[100px]"
        >
          <img
            class="h-auto w-90 rounded-lg"
            src="https://freepngimg.com/thumb/girl/139335-mobile-using-girl-happy-phone.png"
            alt="image description"
          ></img>
           <img class="h-auto w-[210px] max-md:w-[140px] rounded-lg ml-[350px] mt-[-150px] max-lg:ml-[310px] max-md:ml-[230px] max-md:mt-[-40px] max-sm:ml-[150px] z-10" 
        src={barGraph}></img>
            <img class="h-auto w-[100px] rounded-lg ml-[120px] mt-[-340px] max-md:ml-[-50px] max-md:mt-[-140px] max-sm:mt-[-160px] z-10" 
        src={shieldIcon}></img>
        </div>
        <div
          class="box-border border-white rounded-md drop-shadow-xl h-[90px] w-[180px] text-[15px] p-4 border-2 bg-white z-20 px-3 pt-15 mt-[-350px] ml-[520px] xl:ml-[600px] max-lg:ml-[350px] max-lg:mt-[-380px] max-md:mt-[-650px] 
        max-sm:mt-[-680px] min-md:h-auto
        max-md:w-[170px] max-md:ml-[50px] max-md:text-sm"
        >
          ⭐⭐⭐⭐⭐<br></br>
          20k+ Customer Review
        </div>
        <div
          class="box-border border-white rounded-md drop-shadow-xl h-[90px] w-[150px] text-[15px] p-4 border-2 bg-white z-20 px-4 pt-15 ml-[840px] mt-[80px] xl:ml-[1000px] max-lg:ml-[580px] max-lg:mt-[100px] max-md:mt-[-30px] 
      max-sm:mt-[-140px] max-sm:ml-[310px] min-md:h-auto
        max-md:w-[120px] max-md:h-[80px] max-md:ml-[430px] max-md:text-sm"
        >
          Project Done<br></br>
          3,258 ↗️
        </div>
        <div
          class="circle-1 rounded-full w-[400px] h-[400px] border border-gray-400 z-0
      ml-[590px] mt-[-260px] xl:ml-[700px] max-lg:ml-[400px] max-lg:mt-[-170px] max-lg:w-[346px] max-lg:h-[346px] max-md:mt-[-160px] 
      max-sm:mt-[-60px] max-sm:ml-[80px] min-md:h-auto
      max-md:w-[350px] max-md:h-[350px] max-md:ml-[170px] max-md:text-sm"
        ></div>
        <div
          class="circle-2 rounded-full w-[300px] h-[300px] border border-gray-400 z-0
      ml-[648px] mt-[-355px] xl:ml-[745px] max-lg:ml-[450px] max-lg:mt-[-300px] max-lg:w-[250px] max-lg:h-[250px] max-md:mt-[-300px] 
      max-sm:mt-[-310px] max-sm:ml-[125px] min-md:h-auto
      max-md:w-[265px] max-md:h-[265px] max-md:ml-[210px] max-md:text-sm"
        ></div>
      </div>
    </div>
  );
}
