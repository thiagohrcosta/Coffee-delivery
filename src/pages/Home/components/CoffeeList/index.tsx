import CoffeCard from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

import CoffeeExpress from "../../../../assets/images/coffee_express.svg";
import CoffeeAmerican from "../../../../assets/images/coffee_american.svg";
import CoffeeCreamy from "../../../../assets/images/coffee_creamy.svg";
import CoffeeCold from "../../../../assets/images/coffee_cold.svg";

const coffeeList = [
  {
    id: 1,
    image: CoffeeExpress,
    name: "Expresso Traidicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
    tags: ["TRADICIONAL"]
  },
  {
    id: 2,
    image: CoffeeAmerican,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
    tags: ["TRADICIONAL"]
  },
  {
    id: 3,
    image: CoffeeCreamy,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
    tags: ["TRADICIONAL"]
  },
  {
    id: 4,
    image: CoffeeCold,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
    tags: ["TRADICIONAL", "GELADO"]
  },
]
export default function CoffeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <div className="coffee-container">
        {
          coffeeList.map((coffee) => {
            return (
              <CoffeCard
                key={coffee.id}
                image={coffee.image}
                title={coffee.name}
                description={coffee.description}
                price={coffee.price}
                tags={coffee.tags}
              />
            )

          })
        }
      </div>
    </CoffeeListContainer>
  )
}
