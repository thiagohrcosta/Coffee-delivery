import CoffeTag from "../CoffeeTag";
import { CoffeeCardContainer } from "./styles";

import CoffeeExpress from "../../../../assets/images/coffee_express.svg";

export default function CoffeCard({title, description, price, tags}: any) {
  return (
    <CoffeeCardContainer>
      <img src={CoffeeExpress} alt="Coffe Express" />

      <div className="tags">
        {
          tags.map((tag: any) => {
            return (
              <CoffeTag
                tag={tag}
              />
            )
          })
        }
      </div>
      <h2>{title}</h2>
      <p>{description}</p>

      <div>
        <p>R$ <span>{price}</span></p>
      </div>

    </CoffeeCardContainer>
  )
}
