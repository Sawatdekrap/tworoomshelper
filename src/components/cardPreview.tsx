import React from 'react';
import styled from 'styled-components';

import { CardItf } from 'constants/cards';
import { imageFromCard } from 'utilities';

interface CardPreviewItf {
  card: CardItf,
}

const CardPreviewContainer = styled.div`
  flex: 0 1 100px;
  margin: 8px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4%;

    :hover {
      opacity: 0.6;
    }
  }
`;

export const CardPreview = ({
  card,
}: CardPreviewItf) => {
  return (
    <CardPreviewContainer>
      <img src={imageFromCard(card)} />
    </CardPreviewContainer>
  );
};
