import React, {useState} from 'react';

import { Team } from 'constants/common';
import { BLUE_CARDS, RED_CARDS, GREEN_CARDS, GREY_CARDS, OTHER_CARDS } from 'constants/cards';
import { ConfigHeader } from 'components/configHeader';
import { ConfigRow } from 'components/configRow';

export interface configPageItf {

};

export const ConfigPage = ({

}: configPageItf) => {
  const [title, setTitle] = useState<string>("Demo Title");
  const [description, setDescription] = useState<string>("Here is a demo description Here is a demo description here is a demo description");

  return (
    <>
      <ConfigHeader
        title={title}
        description={description}
      />
      <ConfigRow team={Team.BLUE} allCards={BLUE_CARDS} />
      <ConfigRow team={Team.RED} allCards={RED_CARDS} />
      <ConfigRow team={Team.GREY} allCards={GREY_CARDS} />
      <ConfigRow team={Team.GREEN} allCards={GREEN_CARDS} />
      <ConfigRow team={Team.OTHER} allCards={OTHER_CARDS} />
    </>
  );
};
