
export default function CartContext() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <></>
  )
}
