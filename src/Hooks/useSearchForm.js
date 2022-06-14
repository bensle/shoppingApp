import { useState } from 'react';
import useFetch from './useFetch';

export default function useSearchForm() {
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [shoppingItems] = useFetch();

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
  return {
    filteredProductDE,
    filteredProductEN,
    setSearchInput,
    results,
    searchInput,
  };
}
