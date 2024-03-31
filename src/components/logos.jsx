import burgerLogo from "./pics/burger-logo.png";
import italianRestaurantLogo from "./pics/italian-logo.png";
import supermarketLogo from "./pics/supermarket-logo.png";
import brandDesign from "./pics/brand-01.png"
import brandCaley from "./pics/brand-04.png"
import brandHarrison from "./pics/brand-06.png"

export default function Logos() {
    return (
        <div className="logo container grayscale-[100%] justify-between flex-row flex px-16 max-md:gap-9 max-sm:flex-wrap">
            <img
            class="h-20 w-auto max-md:h-20"
            src={burgerLogo}
          ></img>
            <img
            class="h-20 w-auto max-md:h-20"
            src={italianRestaurantLogo}
          ></img>
            <img
            class="h-20 w-auto max-md:h-20"
            src={supermarketLogo}
          ></img>
          <img
            class="h-14 w-auto pt-3 max-md:h-10"
            src={brandCaley}
          ></img>
          <img
            class="h-14 w-auto pt-3 max-md:h-10"
            src={brandDesign}
          ></img>
          <img
            class="h-14 w-auto pt-3 max-md:h-10"
            src={brandHarrison}
          ></img>
        </div>
    )
}