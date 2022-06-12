import styled from 'styled-components';
import { useState } from 'react';

export default function SearchBar(shoppingItems) {
  const shoppingArray = shoppingItems.shoppingItems;

  const [searchInput, setSearchInput] = useState('');
  const [shoppingCart, setShoppingCart] = useState([]);
  const [results, setResults] = useState([]);

  function filteredProduct(input) {
    let reg = new RegExp(input, 'i');
    input
      ? setResults(shoppingArray.filter((item) => item.name.en.match(reg)))
      : setResults([]);
    setSearchInput(input);
  }

  function addNewProductToCart(id) {
    const newCartProduct = results.find((product) => product._id === id);
    if (!shoppingCart.includes(newCartProduct))
      setShoppingCart([...shoppingCart, newCartProduct]);
    setSearchInput('');
  }

  function removeProductFromCart(id) {
    setShoppingCart(shoppingCart.filter((product) => product._id !== id));
  }

  console.log('results', results);
  console.log('Shop', shoppingCart);

  return (
    <SearchForm>
      <StyledSearchHeading>What do you want to buy?</StyledSearchHeading>
      <label htmlFor="foodSearch">
        <HiddenSpan>Search food</HiddenSpan>
      </label>
      <SearchInput
        value={searchInput}
        type="text"
        name="search"
        id="foodSearch"
        placeholder="search..."
        autoComplete="off"
        onChange={(event) => filteredProduct(event.target.value)}
      />

      <StyledList>
        {results.map((product) => (
          <ListItem
            onClick={() => addNewProductToCart(product._id)}
            key={product._id}
          >
            {product.name.en}
          </ListItem>
        ))}
      </StyledList>

      <ul>
        {shoppingCart.map((product) => (
          <li
            onClick={() => removeProductFromCart(product._id)}
            key={product._id}
          >
            {product.name.en}
          </li>
        ))}
      </ul>
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
    background-color: black;
    color: white;
  }
`;
