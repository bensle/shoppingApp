import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from './components/Heading/Heading';
import SearchBar from './components/Searchbar/Search';

export default function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

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

  return (
    <AppContainer>
      <Heading />
      <SearchBar shoppingItems={shoppingItems} />

      {/* <StyledList>
        {shoppingItems.map(({ name, _id }) => (
          <ListItem key={_id}>{name.en}</ListItem>
        ))}
      </StyledList> */}
    </AppContainer>
  );
}

//------------Styled Comp------------
const AppContainer = styled.div`
  background-color: gold;
  margin: 20px;
`;
