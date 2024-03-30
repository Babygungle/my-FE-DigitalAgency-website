import smileyDeveloper from "./pics/smiley-developer.png";

export default function DevelopmentMakeFlexible() {
  return (
    <div>
      <section className="text-container text-wrap mr-[500px] max-lg:mr-[500px] max-md:mx-3 max-md:px-11 max-sm:mr-0 py-20 pl-[120px] max-lg:pl-[63px]">
        <p className="mt-[250px] max-md:mt-[870px] max-sm:mt-[600px] pb-40 text-blue-950 text-3xl font-bold leading-snug">
          Development Make<br></br>
          Flexible for Your<br></br>
          Best Demand!
        </p>
        <p
          className="mt-[-120px] mr-[149px] max-md:mr-0 text-blue-950 text-base font-normal
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
        className="w-35 h-16 left-20 ml-[120px] mt-[-70px] mb-[10px] py-5 px-7 drop-shadow-2xl bg-[#404C99] rounded-2xl text-center text-white text-base font-bold
        max-lg:ml-[60px] max-md:ml-[60px] max-md:mt-[-100px] max-md:mr-40 max-md:mb-[-100px] max-sm:mb-[-100px] hover:bg-[#404C85] focus:ring-4 focus:ring-blue-950 "
      >
        Learn More
      </button>
      <div class="px-3">
        <div
          class="circle-1 rounded-full w-[390px] h-[390px] bg-[#FE6240]
      ml-[700px] mt-[-460px] max-xl:ml-[610px] max-lg:ml-[400px] max-lg:mt-[-550px] max-lg:w-[360px] max-lg:h-[360px] max-md:mt-[-830px] max-sm:mt-[-860px] max-sm:ml-[80px] max-sm:absolute min-md:h-auto
      max-md:w-[300px] max-md:h-[300px] max-md:ml-[170px] max-md:text-sm"
        ></div>
        <div
          class="circle-2 rounded-full w-[390px] h-[390px] border border-[#CDE4EB] z-0 flex
      ml-[736px] mt-[-380px] max-xl:ml-[630px] max-lg:ml-[420px] max-lg:mt-[-350px] max-lg:w-[360px] max-lg:h-[360px] max-md:mt-[-300px] max-sm:mt-[-850px] max-sm:ml-[110px] max-sm:absolute min-md:h-auto
      max-md:w-[300px] max-md:h-[300px] max-md:ml-[200px] max-md:text-sm"
        ></div>
        <img
          src={smileyDeveloper}
          className="w-[350px] h-auto absolute ml-[720px] mt-[-360px] max-xl:ml-[630px] max-lg:ml-[390px] max-md:mt-[-330px] max-md:ml-[140px] max-sm:ml-[80px] max-sm:w-[300px] max-sm:mt-[-840px] max-sm:absolute z-20"
        ></img>
        <div
          class="box-border border-white rounded-md drop-shadow-xl h-[110px] w-[180px] text-[14px] p-2 border-2 bg-white z-20 px-4 pt-15 mt-[-30px] ml-[890px] max-xl:ml-[800px] max-lg:ml-[570px] max-lg:mt-[-20px] max-md:mt-[-10px] min-md:h-auto
        max-md:w-[180px] max-md:ml-[390px] max-md:text-sm max-sm:ml-[250px] max-sm:mt-[-610px] max-sm:absolute max-sm:w-[165px]"
        >
          <svg
            class="w-[60px] h-auto mt-5 text-[#FD7B27] absolute"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.6 16.7c.2.3.5.5.9.6a1.4 1.4 0 0 0 1.7-.8c.2-.6-.4-1.3-1.2-1.5-.8-.2-1.4-.8-1.2-1.5a1.4 1.4 0 0 1 1.7-.7c.4 0 .7.2.9.5m-1.4 4v.6m0-5.9v.7M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
            />
          </svg>
          <p className="mx-14 my-[30px] text-[13px] absolute">
            Increasement<br></br>$ 25,000
          </p>
        </div>
      </div>
    </div>
  );
}
