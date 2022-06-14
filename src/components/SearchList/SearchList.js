import styled from 'styled-components';
import useSearchForm from '../../Hooks/useSearchForm';
import useSearchList from '../../Hooks/useSearchList';

export default function SearchList({ language }) {
  const { results, searchInput } = useSearchForm();
  const [addNewProductToCart] = useSearchList();

  console.log('LIST', searchInput);

  return (
    <>
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
    </>
  );
}

const StyledSearchHeading = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
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
