import styled from 'styled-components';
import { useState } from 'react';

export default function SearchBar(shoppingItems) {
  const shoppingArray = shoppingItems.shoppingItems;

  const [searchInput, setSearchInput] = useState(''); //input field
  const [shoppingList, setShoppingList] = useState([]);
  const [results, setResults] = useState([]);

  function onSubmit(event) {
    event.preventDefault();
    setSearchInput(event.target.value);

    const result = shoppingArray.filter((product) =>
      product.name.en.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    setResults(result);
  }

  console.log('result', results);

  return (
    <SearchForm>
      <StyledSearchHeading>What do you want to buy?</StyledSearchHeading>
      <label htmlFor="foodSearch">
        <HiddenSpan>Search food</HiddenSpan>
      </label>
      <SearchInput
        type="text"
        name="search"
        id="foodSearch"
        placeholder="search..."
        autoComplete="off"
        onChange={onSubmit}
      />
      <StyledList>
        {searchInput !== '' &&
          results.map((product) => (
            <ListItem key={product._id}>{product.name.en}</ListItem>
          ))}
      </StyledList>
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
