import { Team } from 'constants/common';
import { CardItf } from 'constants/cards';
import IMAGE_BY_KEY from 'constants/images';

export const teamNameFromTeam = (team: Team) => {
  switch (team) {
    case Team.RED:
      return "Red";
    case Team.BLUE:
      return "Blue";
    case Team.GREEN:
      return "Green";
    case Team.GREY:
      return "Grey";
      case Team.OTHER:
        return "Other";
    default:
      throw "Invalid Team";
  };
};

export const imageFromCard = (card: CardItf) => {
  const key = `${card.type}_${card.team}`;
  return IMAGE_BY_KEY[key];
};
