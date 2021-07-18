import React from 'react';
import styled from 'styled-components';

import { ConfigPage } from 'pages/configPage';
import { BLACK, WHITE } from 'constants/style';

const Body = styled.div`
  background-color: ${BLACK};
  color: ${WHITE};
`;

function App() {
  return <Body>
    <ConfigPage />
  </Body>
}

export default App;
