import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CircleBtn = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 25px;
  border: none;
  border-radius: 100%;
  background-color: #61dafb;
`;

function App() {
  const numFromReduxStore = 3;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {numFromReduxStore}
        <BtnWrapper>
          <CircleBtn>+</CircleBtn>
          <CircleBtn>-</CircleBtn>
        </BtnWrapper>
      </header>
    </div>
  );
}

export default App;
