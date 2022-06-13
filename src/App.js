import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from './components/Heading/Heading';
import SearchForm from './components/Searchbar/Search';
import SearchList from './components/SearchList/SearchList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Language from './components/Language/Language';
import useLocalStorage from './Hooks/useLocalStorage';

export default function App() {
  const [language, setLanguage] = useLocalStorage('Language', 'en');
  const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useLocalStorage('ShoppingCart', []);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadShoppingItems();
    async function loadShoppingItems() {
      try {
        const response = await fetch(
          'https://fetch-me.vercel.app/api/shopping/items'
        );
        const data = await response.json();
        setShoppingItems(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  function changeLanguage(language) {
    setLanguage(language);
  }
  //----- sets the focus back to input after click-----//
  // const handleClick = () => {
  //   refInput.current.focus();
  // };

  return (
    <AppContainer>
      <Language onClick={changeLanguage} />
      <Heading />
      <SearchForm
        language={language}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        shoppingItems={shoppingItems}
        searchInput={searchInput}
        onSetSearchInput={setSearchInput}
        results={results}
        onSetResults={setResults}

        // onHandleClick={handleClick}
      />
      <SearchList
        language={language}
        searchInput={searchInput}
        results={results}
        onSetSearchInput={setSearchInput}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
      />
      <ShoppingCart
        language={language}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        // onHandleClick={handleClick}
      />
    </AppContainer>
  );
}

//------------Styled Comp------------
const AppContainer = styled.div`
  background-color: gold;
  margin: 20px;
`;
