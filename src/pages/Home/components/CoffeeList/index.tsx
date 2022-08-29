import CoffeCard from "../CoffeeCard";
import { CoffeeListContainer } from "./styles";

export default function CoffeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeCard
        title={"Expresso tradicional"}
        description={"O tradicional café feito com água quente e grãos moídos"}
        price={"9,90"}
        tags={["TRADICIONAL"]}
      />
    </CoffeeListContainer>
  )
}
