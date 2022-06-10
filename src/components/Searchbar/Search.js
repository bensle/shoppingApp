import styled from 'styled-components';
import { useState } from 'react';

export default function SearchBar(shoppingItems) {
  const [search, setSearch] = useState('');
  console.log('inputfiled', search);
  return (
    <SearchForm>
      <StyledSearchHeading>What do you want to buy?</StyledSearchHeading>
      <label htmlFor="foodSearch"></label>
      <SearchInput
        type="text"
        name="search"
        id="foodSearch"
        placeholder="search..."
        onChange={(event) => setSearch(event.target.value)}
      />

      {/* <button type="submit">Search</button> */}
    </SearchForm>
  );
}

const StyledSearchHeading = styled.h2`
  text-align: center;
  font-size: 1rem;
`;

const SearchForm = styled.form`
  display: grid;
  gap: 2px;
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
  height: 30px;
  text-align: center;
  font-family: inherit;
  border-radius: 15px;
  border-style: none;
`;

// const SearchButton = styled.button`
//   font-family: inherit;
//   width: 9rem;
//   padding: 0.3rem;
//   font-weight: bold;
//   border: solid 2px white;
//   border-radius: 10px;
//   background-color: grey;
//   width: 100%;
// `;
