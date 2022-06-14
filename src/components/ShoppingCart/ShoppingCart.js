import styled from 'styled-components';
import useShoppingCart from '../../Hooks/useShoppingCart';

export default function ShoppingCart({ language }) {
  const { removeProductFromCart, deleteCart, shoppingCart } = useShoppingCart(
    []
  );
  return (
    <>
      {language === 'en' ? (
        <CartHeading>Shopping Cart</CartHeading>
      ) : (
        <CartHeading>Warenkorb</CartHeading>
      )}

      <CartList>
        {shoppingCart.map((product) => (
          <CartItem
            onClick={() => removeProductFromCart(product._id)}
            key={product._id}
          >
            {language === 'en' ? product.name.en : product.name.de}
          </CartItem>
        ))}
      </CartList>
      <Styleddiv>
        {language === 'en' ? (
          <Button type="button" onClick={deleteCart}>
            Delete Cart
          </Button>
        ) : (
          <Button type="button" onClick={deleteCart}>
            Warenkorb löschen
          </Button>
        )}
      </Styleddiv>
    </>
  );
}

const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: gold;
  margin-top: 10px;
`;

const CartItem = styled.li`
  padding: 10px 15px;
  border-radius: 12px;
  background-color: olivedrab;
  color: white;
  flex-grow: 1;
  text-align: center;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const CartHeading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Styleddiv = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
const Button = styled.button`
  padding: 4px 8px;
  border: none;
  background-color: white;
  border-radius: 10px;
  font-family: inherit;
  width: 50%;
  margin-top: 20px;
  &:hover {
    background-color: crimson;
    color: white;
  }
`;
