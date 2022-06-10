import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from './components/Heading/Heading';

const initialItems = [
  {
    _id: 'c2hvcHBpbmcuaXRlbTox',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Pineapple', de: 'Ananas' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbToy',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Apples', de: 'Äpfel' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbToz',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Apricots', de: 'Aprikosen' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbTo0',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Artichokes', de: 'Artischocken' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbTo1',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Aubergine', de: 'Aubergine' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbTo2',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Oyster mushrooms', de: 'Austernpilze' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbTo3',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Avocado', de: 'Avocado' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbTo4',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Baby spinach', de: 'Babyspinat' },
  },
  {
    _id: 'c2hvcHBpbmcuaXRlbTo5',
    _type: 'shopping.item',
    category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
    name: { en: 'Bananas', de: 'Bananen' },
  },
];

export default function App() {
  const [shoppingItems, setShoppingItems] = useState(initialItems);
  useEffect(() => {
    loadShoppingItems();
    async function loadShoppingItems() {
      try {
        const response = await fetch(
          'https://fetch-me.vercel.app/api/shopping/items'
        );
        const data = await response.json();
        setShoppingItems(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <AppContainer>
      <Heading />
      <StyledList>
        {shoppingItems.map(({ name, _id }) => (
          <ListItem key={_id}>{name.en}</ListItem>
        ))}
      </StyledList>
    </AppContainer>
  );
}

//------------Styled Comp------------
const AppContainer = styled.div`
  background-color: gold;
  margin: 20px;
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
`;
