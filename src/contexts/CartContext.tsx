import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CartContextType {
  id: number;
  title: string;
  tags: string[];
  price: number;
  image: string;
  coffeeCounter: number;
}

interface CartType {
  cart: CartContextType[];

  subTotal: number
  totalOrder: number

  resetCart: () => void
  addItemToCart: (id: string) => void
  removeItemFromCart: (id: string) => void
  increaseCoffeeQuantityByOne: (id: string) => void
  decreaseCoffeeQuantityByOne: (id: string) => void
}

export const CartContext =  createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export default function CartContextProvider({ children }: CartContextProviderProps ) {
  const [cart, setCart] = useState<CartContextType[]>([
  ]);

  const addToCart = (item: CartContextType) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item: CartContextType) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addCoffeeQuantityByOne = (item: CartContextType) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, coffeeCounter: cartItem.coffeeCounter + 1 };
      }
      return cartItem;
    });
    setCart(newCart);
  };

  const removeCoffeeQuantityByOne = (item: CartContextType) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, coffeeCounter: cartItem.coffeeCounter - 1 };
      }
      return cartItem;
    });
    setCart(newCart);
  }

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, [cart]);

  return (
    <CartContext.Provider
     value={{ cart, addToCart, removeFromCart, addCoffeeQuantityByOne,  removeCoffeeQuantityByOne, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
