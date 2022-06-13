import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from './components/Heading/Heading';
import SearchBar from './components/Searchbar/Search';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Language from './components/Language/Language';
import useLocalStorage from './Hooks/useLocalStorage';

export default function App() {
  const [language, setLanguage] = useLocalStorage('Language', 'en');
  const [shoppingItems, setShoppingItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useLocalStorage('ShoppingCart', []);

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

  // const handleClick = () => {
  //   refInput.current.focus();
  // };

  return (
    <AppContainer>
      <Language onClick={changeLanguage} />
      <Heading />
      <SearchBar
        language={language}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        shoppingItems={shoppingItems}
        // onHandleClick={handleClick}
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
