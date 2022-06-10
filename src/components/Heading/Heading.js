import styled from 'styled-components';

export default function Heading() {
  return <StyledHeading>Shopping List</StyledHeading>;
}

const StyledHeading = styled.h1`
  text-align: center;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 1.5rem;
  background-color: white;
  border-radius: 12px;
`;
