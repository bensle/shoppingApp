import styled from 'styled-components';
import Heading from './components/Heading/Heading';
import SearchForm from './components/Searchbar/SearchForm';
import SearchList from './components/SearchList/SearchList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Language from './components/Language/Language';
import useLocalStorage from './Hooks/useLocalStorage';

export default function App() {
  const [language, setLanguage] = useLocalStorage('Language', 'en');

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
      <SearchForm language={language} />
      <SearchList language={language} />
      <ShoppingCart language={language} />
    </AppContainer>
  );
}

//------------Styled Comp------------
const AppContainer = styled.div`
  background-color: gold;
  margin: 20px;
`;
