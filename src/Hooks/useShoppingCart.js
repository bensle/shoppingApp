import useLocalStorage from './useLocalStorage';
export default function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useLocalStorage('ShoppingCart', []);

  //----- removes a product from cart -> function is on cartlistitem-----//
  function removeProductFromCart(id) {
    setShoppingCart(shoppingCart.filter((product) => product._id !== id));
    // onHandleClick();
  }
  function deleteCart(event) {
    setShoppingCart([]);
  }
  return { setShoppingCart, removeProductFromCart, deleteCart, shoppingCart };
}
