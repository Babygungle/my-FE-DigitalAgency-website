import burgerLogo from "./pics/burger-logo.png";
import italianRestaurantLogo from "./pics/italian-logo.png";
import supermarketLogo from "./pics/supermarket-logo.png";

export default function Logos() {
    return (
        <div className="logo container grayscale-[80%] justify-between flex-row flex px-20">
            <img
            class="h-40 w-auto max-md:h-20"
            src={burgerLogo}
          ></img>
            <img
            class="h-40 w-auto max-md:h-20"
            src={italianRestaurantLogo}
          ></img>
            <img
            class="h-40 w-auto max-md:h-20"
            src={supermarketLogo}
          ></img>
        </div>
    )
}