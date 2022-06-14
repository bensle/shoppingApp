import useSearchForm from './useSearchForm';
import useShoppingCart from './useShoppingCart';

export default function useSearchList() {
  const { results, setSearchInput } = useSearchForm();
  const { shoppingCart, setShoppingCart } = useShoppingCart([]);

  //----- add new Product to cart -> function is on listitem-----//
  function addNewProductToCart(id) {
    const newCartProduct = results.find((product) => product._id === id);
    if (!shoppingCart.includes(newCartProduct))
      setShoppingCart([...shoppingCart, newCartProduct]);
    setSearchInput('');
    // onHandleClick();
  }
  return [addNewProductToCart];
}
