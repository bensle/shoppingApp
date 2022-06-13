import styled from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';

export default function SearchForm({
  shoppingItems,
  shoppingCart,
  setShoppingCart,
  language,
  searchInput,
  onSetSearchInput,
  results,
  onSetResults,
}) {
  // const shoppingArray = shoppingItems.shoppingItems;

  const refInput = useRef();

  //-----Language is EN - if input  -> setResult with filterd base array-----//
  function filteredProductEN(input) {
    const inputRegEN = new RegExp(input, 'i');
    input
      ? onSetResults(
          shoppingItems.filter((product) => product.name.en.match(inputRegEN))
        )
      : onSetResults([]);
    onSetSearchInput(input);
  }
  //----- Language is DE - if input  -> setResult with filterd base array-----//
  function filteredProductDE(input) {
    const inputRegDE = new RegExp(input, 'i');
    input
      ? onSetResults(
          shoppingItems.filter((product) => product.name.de.match(inputRegDE))
        )
      : onSetResults([]);
    onSetSearchInput(input);
  }

  return (
    <Form aria-labelledby="searchHeading">
      {language === 'en' ? (
        <StyledSearchHeading id="searchHeading">
          What do you want to buy?
        </StyledSearchHeading>
      ) : (
        <StyledSearchHeading id="searchHeading">
          Was möchtest du kaufen?
        </StyledSearchHeading>
      )}

      <label htmlFor="foodSearch">
        {language === 'en' ? (
          <HiddenSpan>Search food</HiddenSpan>
        ) : (
          <HiddenSpan>Suche Lebensmittel</HiddenSpan>
        )}
      </label>

      <SearchInput
        ref={refInput}
        value={searchInput}
        type="text"
        name="search"
        id="foodSearch"
        placeholder="search..."
        autoComplete="off"
        onChange={
          language === 'en'
            ? (event) => filteredProductEN(event.target.value)
            : (event) => filteredProductDE(event.target.value)
        }
      />
      {language === 'en' ? (
        <StyledSearchHeading>Your Results</StyledSearchHeading>
      ) : (
        <StyledSearchHeading>Deine Ergebnisse</StyledSearchHeading>
      )}
    </Form>
  );
}

//------------Styled Comp------------
const StyledSearchHeading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const Form = styled.form`
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
