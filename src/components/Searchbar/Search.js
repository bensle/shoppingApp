import styled from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';

export default function SearchBar(shoppingItems) {
  const shoppingArray = shoppingItems.shoppingItems;
  const [searchInput, setSearchInput] = useState('');
  const [shoppingCart, setShoppingCart] = useState([]);
  const [results, setResults] = useState([]);
  const refInput = useRef();

  //----- sets the focus back to input after click-----//
  const handleClick = () => {
    refInput.current.focus();
  };
  //----- if input -> setResult with filterd base array.-----//
  function filteredProduct(input) {
    let inputReg = new RegExp(input, 'i');
    input
      ? setResults(shoppingArray.filter((item) => item.name.en.match(inputReg)))
      : setResults([]);
    setSearchInput(input);
  }
  //----- add new Product to cart -> function is on listitem-----//
  function addNewProductToCart(id) {
    const newCartProduct = results.find((product) => product._id === id);
    if (!shoppingCart.includes(newCartProduct))
      setShoppingCart([...shoppingCart, newCartProduct]);
    setSearchInput('');
    handleClick();
  }
  //----- removes a product from cart -> function is on cartlistitem-----//
  function removeProductFromCart(id) {
    setShoppingCart(shoppingCart.filter((product) => product._id !== id));
    handleClick();
  }

  return (
    <SearchForm>
      <StyledSearchHeading>What do you want to buy?</StyledSearchHeading>
      <label htmlFor="foodSearch">
        <HiddenSpan>Search food</HiddenSpan>
      </label>
      <SearchInput
        ref={refInput}
        value={searchInput}
        type="text"
        name="search"
        id="foodSearch"
        placeholder="search..."
        autoComplete="off"
        onChange={(event) => filteredProduct(event.target.value)}
      />

      <StyledList>
        {results.map((product, search) => (
          <ListItem
            onClick={() => addNewProductToCart(product._id)}
            key={product._id}
          >
            {product.name.en}
          </ListItem>
        ))}
      </StyledList>
      <>
        <CartHeading>Shopping Cart</CartHeading>
        <CartList>
          {shoppingCart.map((product) => (
            <CartItem
              onClick={() => removeProductFromCart(product._id)}
              key={product._id}
            >
              {product.name.en}
            </CartItem>
          ))}
        </CartList>
      </>
    </SearchForm>
  );
}

//------------Styled Comp------------
const StyledSearchHeading = styled.h2`
  text-align: center;
  font-size: 1rem;
`;

const SearchForm = styled.form`
  display: grid;
  gap: 2px;
  margin-bottom: 15px;
`;

const HiddenSpan = styled.span`
  display: none;
`;

const SearchInput = styled.input`
  height: 30px;
  text-align: center;
  font-family: inherit;
  border-radius: 15px;
  border-style: none;
  margin-bottom: 5px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: gold;
`;

const ListItem = styled.li`
  padding: 10px 15px;
  border-radius: 12px;
  background-color: white;
  flex-grow: 1;
  text-align: center;
  &:hover {
    background-color: olivedrab;
    color: white;
  }
`;

const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: gold;
`;

const CartItem = styled.li`
  padding: 10px 15px;
  border-radius: 12px;
  background-color: white;
  flex-grow: 1;
  text-align: center;
  &:hover {
    background-color: olivedrab;
    color: white;
  }
`;

const CartHeading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
`;
