import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from './components/Heading/Heading';
import SearchBar from './components/Searchbar/Search';
import { getFromLocal, setToLocal } from './lib/localStorage';
import Language from './components/Language/Language';

export default function App() {
  const [language, setLanguage] = useState(getFromLocal('language') ?? []);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState(
    getFromLocal('shoppingCart') ?? []
  );

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

  useEffect(() => setToLocal('shoppingCart', shoppingCart), [shoppingCart]);
  useEffect(() => setToLocal('language', language), [language]);

  function changeLanguage(language) {
    setLanguage(language);
  }

  return (
    <AppContainer>
      <Language onClick={changeLanguage} />
      <Heading />
      <SearchBar
        language={language}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        shoppingItems={shoppingItems}
      />
    </AppContainer>
  );
}

//------------Styled Comp------------
const AppContainer = styled.div`
  background-color: gold;
  margin: 20px;
`;
