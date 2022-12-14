import { ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import CoffeTag from "../CoffeeTag";
import { CoffeeCardContainer } from "./styles";

export default function CoffeCard({title, description, price, tags, image}: any) {
  const { cart, addToCart } = useContext(CartContext);

  const [coffeeCounter, setCoffeeCounter] = useState(1);

  function handleAddCoffee() {
    setCoffeeCounter(coffeeCounter + 1);
  }

  function handleRemoveCoffee() {
    if (coffeeCounter > 1) {
      setCoffeeCounter(coffeeCounter - 1);
    }
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt="Coffe Express" />

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
      <div className="coffee-checkout">
        <p>R$ <span>{price}</span></p>
        <div className="coffee-amount">
          <span onClick={() => handleRemoveCoffee()}>-</span>
          <input type="text" value={coffeeCounter} />
          <span onClick={() => handleAddCoffee()}>+</span>
        </div>
        <div className="cart-container">
          <ShoppingCart size={32} color="#FFFFFF" weight="fill" onClick={() => {addToCart([title, description, price, tags, image, coffeeCounter])}} />
        </div>
      </div>

    </CoffeeCardContainer>
  )
}
