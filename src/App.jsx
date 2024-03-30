import "./App.css";
import Header from "./components/header";
import Logos from "./components/logos";
import Services from "./components/services";
import MakeYourWebsite from "./components/make-your-website";
import DevelopmentMakeFlexible from "./components/development-make-flexible";
import Nav from "./components/nav";
import Blog from "./components/blog-boxes";
import Testimonial from "./components/testimonial";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

function App() {
  return (
    <body className="bg-white">
      <div class="bg-[#ECF7FB]">
        <Nav />
      </div>
      <div class="bg-[#ECF7FB] pb-[100px] max-lg:pb-[70px] max-md:pb-[400px] max-sm:mb-[300px]">
        <Header />
      </div>
      <div className="mt-[120px] max-sm:mt-[-190px]">
        <Logos />
      </div>
      <div className="pb-3 max-sm:pb-[200px]">
        <Services />
      </div>
      <div class="bg-[#d3e0ec38] pt-[40px] max-lg:mt-20 max-md:mt-[600px] max-sm:mt-[400px]">
        <MakeYourWebsite />
        <div class="xl:mt-[-100px] pb-[100px]">
          <DevelopmentMakeFlexible />
        </div>
        <div className="bg-white max-md:pt-[350px] max-sm:pt-1">
          <Blog />
          <div className="bg-white max-md:px-10 max-md:pt-[1600px]">
            <Testimonial />
          </div>
          <Subscribe />
          <div className="bg-white max-md:mx-[10px]">
            <Footer />
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
