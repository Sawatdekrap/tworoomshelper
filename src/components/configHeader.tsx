import React from 'react';
import styled from 'styled-components';

import { ICON_PLAYER } from 'constants/icons';

const ConfigHeaderStyled = styled.div`
  width: 100%;
  
  h1 {
    font-size: 64px;
    display: inline-block;
    min-width: 50%;
    text-overflow: ellipsis;
    margin-bottom: 0;
  }
  img {

  }
  p {
  }
`;

export interface configHeaderItf {
  title: string;
  description: string;
};

export const ConfigHeader = ({
  title,
  description,
}: configHeaderItf) => {
  return <ConfigHeaderStyled>
    <span>
      <h1>{title}</h1>
      {ICON_PLAYER}
      XX
    </span>
    <p>{description}</p>
  </ConfigHeaderStyled>;
};
