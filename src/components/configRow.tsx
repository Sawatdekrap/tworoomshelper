import React from 'react';
import styled from 'styled-components';

import { Team } from 'constants/common';
import { CardItf } from 'constants/cards';
import { teamNameFromTeam } from 'utilities';
import { CardPreview } from 'components/cardPreview';

interface configRowItf {
  team: Team;
  allCards: CardItf[];
};

const CardCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  border-radius: 4px;
`;

export const ConfigRow = ({
  team,
  allCards,
}: configRowItf) => {
  return (
    <div>
      <h1>{teamNameFromTeam(team)}</h1>
      <CardCollection>
        {allCards.map((card, idx) => <CardPreview key={idx.toString()} card={card} />)}
      </CardCollection>
    </div>
  );
};
