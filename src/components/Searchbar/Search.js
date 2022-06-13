import styled from 'styled-components';
import { useState } from 'react';
import { useRef } from 'react';

export default function SearchBar({
  shoppingItems,
  shoppingCart,
  setShoppingCart,
  language,
  onHandleClick,
}) {
  // const shoppingArray = shoppingItems.shoppingItems;
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const refInput = useRef();

  //----- sets the focus back to input after click-----//

  //-----Language is EN - if input  -> setResult with filterd base array-----//
  function filteredProductEN(input) {
    const inputRegEN = new RegExp(input, 'i');
    input
      ? setResults(
          shoppingItems.filter((product) => product.name.en.match(inputRegEN))
        )
      : setResults([]);
    setSearchInput(input);
  }
  //----- Language is DE - if input  -> setResult with filterd base array-----//
  function filteredProductDE(input) {
    const inputRegDE = new RegExp(input, 'i');
    input
      ? setResults(
          shoppingItems.filter((product) => product.name.de.match(inputRegDE))
        )
      : setResults([]);
    setSearchInput(input);
  }

  //----- add new Product to cart -> function is on listitem-----//
  function addNewProductToCart(id) {
    const newCartProduct = results.find((product) => product._id === id);
    if (!shoppingCart.includes(newCartProduct))
      setShoppingCart([...shoppingCart, newCartProduct]);
    setSearchInput('');
    // onHandleClick();
  }

  return (
    <SearchForm aria-labelledby="searchHeading">
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

      <StyledList>
        {searchInput && results == '' ? (
          language === 'en' ? (
            <SytledParagraph>
              We could not find what you were looking for. For that we are truly
              sorry!
            </SytledParagraph>
          ) : (
            <SytledParagraph>
              Wir konnten das, was Du suchst leider nicht finden! Es tut uns
              wirklich leid!
            </SytledParagraph>
          )
        ) : (
          results.map((product) => (
            <ListItem
              onClick={() => addNewProductToCart(product._id)}
              key={product._id}
            >
              {language === 'en' ? product.name.en : product.name.de}
            </ListItem>
          ))
        )}
      </StyledList>
    </SearchForm>
  );
}

//------------Styled Comp------------
const StyledSearchHeading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
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

const SytledParagraph = styled.p`
  text-align: center;
  font-size: 1.2rem;
  border: solid 2px;
  color: red;
  border-radius: 10px;
  font-weight: bold;
  padding: 5px;
  background-color: white;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: gold;
  margin-top: 10px;
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
