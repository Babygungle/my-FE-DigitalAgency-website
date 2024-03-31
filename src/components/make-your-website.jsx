import webReponsivePic from "./pics/web-responsive.png";
import americanMan from "./pics/american-man.jpg";
import chineseWoman from "./pics/chinese-woman.jpg";
import koreanMan from "./pics/korean-man.jpg";
import thaiGirl from "./pics/thai-girl.jpg";

export default function MakeYourWebsite() {
  return (
    <div>
      <section className="text-container text-wrap ml-[600px] max-lg:ml-[500px] max-md:ml-[40px] py-12 px-3">
        <p className="mt-8 max-md:mt-[370px] max-sm:mt-[400px] pb-40 text-blue-950 text-3xl font-bold leading-snug">
          Make Your Website<br></br>
          Design more Creative<br></br>& Professional!
        </p>
        <p
          className="mt-[-120px] mr-[150px] max-md:mr-[90px] text-blue-950 text-base font-normal
        leading-8"
        >
          Professionally evolve web-enabled resources and error-free.
          Interactively provide access to unique architectures rather than
          customized functionalities. Enthusiastically maintain user friendly
          processes through scalable process improvements. Conveniently foster
          mission-critical collaboration and idea-sharing
        </p>
      </section>
      <button
        className="w-35 h-16 left-20 ml-[610px] mt-[-70px] mb-[10px] py-5 px-7 drop-shadow-2xl bg-[#404C99] rounded-2xl text-center text-white text-base font-bold
        max-lg:ml-[500px] max-md:ml-[50px] max-md:mt-[-100px] max-md:mr-40 max-md:mb-[-100px] max-sm:mb-[-100px] hover:bg-[#404C85] focus:ring-4 focus:ring-blue-950 "
      >
        Learn More
      </button>
      <div
        class="circle-1 rounded-full w-[400px] h-[400px] bg-[#FFAD1E] -z-1 flex
      ml-[130px] mt-[-400px] max-lg:ml-[60px] max-lg:mt-[-500px] max-md:mt-[-770px] max-sm:mt-[-870px] max-sm:ml-[100px] max-sm:absolute min-md:h-auto
      max-md:w-[300px] max-md:h-[300px] max-md:ml-[170px] max-md:text-sm"
      ></div>
      <img
        src={webReponsivePic}
        className="items-center w-[440px] h-auto flex ml-[100px] mt-[-320px] max-lg:ml-[30px] max-md:mt-[-260px] max-md:ml-[100px] max-sm:ml-[40px] max-sm:w-[400px] max-sm:mt-[-830px] max-sm:absolute z-20"
      ></img>
      <div
        class="box-border border-white rounded-md drop-shadow-xl h-[120px] w-[200px] text-[14px] p-2 border-2 bg-white z-20 px-4 pt-15 mt-[10px] ml-[370px] max-lg:ml-[270px] max-lg:mt-[30px] max-md:mt-[-10px] min-md:h-auto
        max-md:w-[200px] max-md:ml-[390px] max-md:text-sm max-sm:ml-[250px] max-sm:mt-[-590px] max-sm:absolute max-sm:w-[190px]"
      >
        <p className="mt-2 mb-2">People Who Trusted Us!</p>

        <img
          src={americanMan}
          className="rounded-full absolute w-auto h-10 -z-10"
        ></img>
        <img
          src={chineseWoman}
          className="rounded-full absolute w-auto h-10 z-10 ml-8 mt-[-0.5px]"
        ></img>
        <img
          src={koreanMan}
          className="rounded-full absolute w-auto h-10 z-20 ml-[60px] mt-[-0.5px]"
        ></img>
        <img
          src={thaiGirl}
          className="rounded-full absolute w-auto h-10 z-30 ml-[90px] mt-[-0.5px]"
        ></img>
        <div class="rounded-full absolute bg-gray-100 w-10 h-10 text-center z-40 ml-[120px] mt-[-0.5px] pt-2 text-bold">
          +
        </div>
      </div>
    </div>
  );
}
