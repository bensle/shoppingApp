import styled from 'styled-components';
import useSearchForm from '../../Hooks/useSearchForm';
// import { useRef } from 'react';

export default function SearchForm({ language }) {
  const { filteredProductDE, filteredProductEN, searchInput } = useSearchForm();
  // const refInput = useRef();
  console.log('SearchForm', searchInput);
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
        // ref={refInput}
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
