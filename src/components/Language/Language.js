import styled from 'styled-components';
export default function Language({ onClick }) {
  return (
    <Styleddiv>
      <Button onClick={() => onClick('en')}>Englisch</Button>
      <Button onClick={() => onClick('de')}>German</Button>
    </Styleddiv>
  );
}

const Styleddiv = styled.div`
  display: flex;
  gap: 5px;
  justify-content: flex-end;
`;
const Button = styled.button`
  padding: 4px 8px;
  border: none;
  background-color: white;
  border-radius: 10px;
  font-family: inherit;
`;
