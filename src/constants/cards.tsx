import { Team, CardType } from 'constants/common';

export interface CardItf {
    team: Team;
    type: CardType;
};

export const RED_CARDS: CardItf[] = [
    {team: Team.RED, type: CardType.AGENT},
    {team: Team.RED, type: CardType.AMBASSADOR},
    {team: Team.RED, type: CardType.ANGEL},
    {team: Team.RED, type: CardType.BASIC},
    {team: Team.RED, type: CardType.BLIND},
    {team: Team.RED, type: CardType.BOMBER},
    {team: Team.RED, type: CardType.BOUNCER},
    {team: Team.RED, type: CardType.CLOWN},
    {team: Team.RED, type: CardType.CONMAN},
    {team: Team.RED, type: CardType.COYBOY},
    {team: Team.RED, type: CardType.CRIMINAL},
    {team: Team.RED, type: CardType.CUPID},
    {team: Team.RED, type: CardType.DEALER},
    {team: Team.RED, type: CardType.DEMON},
    {team: Team.RED, type: CardType.DRBOOM},
    {team: Team.RED, type: CardType.ENFORCER},
    {team: Team.RED, type: CardType.ENGINEER},
    {team: Team.RED, type: CardType.IMMUNOLOGIST},
    {team: Team.RED, type: CardType.MARTYR},
    {team: Team.RED, type: CardType.MAYOR},
    {team: Team.RED, type: CardType.MEDIC},
    {team: Team.RED, type: CardType.MIME},
    {team: Team.RED, type: CardType.MUMMY},
    {team: Team.RED, type: CardType.NEGOTIATOR},
    {team: Team.RED, type: CardType.PAPARAZZO},
    {team: Team.RED, type: CardType.PARANOID},
    {team: Team.RED, type: CardType.PSYCHOLOGIST},
    {team: Team.RED, type: CardType.SECURITY},
    {team: Team.RED, type: CardType.SHYGUY},
    {team: Team.RED, type: CardType.SPY},
    {team: Team.RED, type: CardType.THUG},
    {team: Team.RED, type: CardType.TINKERER},
    {team: Team.RED, type: CardType.USURPER},
];

export const BLUE_CARDS: CardItf[] = [
    {team: Team.BLUE, type: CardType.AGENT},
    {team: Team.BLUE, type: CardType.AMBASSADOR},
    {team: Team.BLUE, type: CardType.ANGEL},
    {team: Team.BLUE, type: CardType.BASIC},
    {team: Team.BLUE, type: CardType.BLIND},
    {team: Team.BLUE, type: CardType.BOUNCER},
    {team: Team.BLUE, type: CardType.CLOWN},
    {team: Team.BLUE, type: CardType.CONMAN},
    {team: Team.BLUE, type: CardType.COYBOY},
    {team: Team.BLUE, type: CardType.CRIMINAL},
    {team: Team.BLUE, type: CardType.DEALER},
    {team: Team.BLUE, type: CardType.DEMON},
    {team: Team.BLUE, type: CardType.DOCTOR},
    {team: Team.BLUE, type: CardType.ENFORCER},
    {team: Team.BLUE, type: CardType.ERIS},
    {team: Team.BLUE, type: CardType.INVINCIBLE},
    {team: Team.BLUE, type: CardType.MAYOR},
    {team: Team.BLUE, type: CardType.MEDIC},
    {team: Team.BLUE, type: CardType.MIME},
    {team: Team.BLUE, type: CardType.MUMMY},
    {team: Team.BLUE, type: CardType.NEGOTIATOR},
    {team: Team.BLUE, type: CardType.NURSE},
    {team: Team.BLUE, type: CardType.PAPARAZZO},
    {team: Team.BLUE, type: CardType.PARANOID},
    {team: Team.BLUE, type: CardType.PRESIDENT},
    {team: Team.BLUE, type: CardType.PRESIDENTSDAUGHTER},
    {team: Team.BLUE, type: CardType.PSYCHOLOGIST},
    {team: Team.BLUE, type: CardType.SECURITY},
    {team: Team.BLUE, type: CardType.SHYGUY},
    {team: Team.BLUE, type: CardType.SPY},
    {team: Team.BLUE, type: CardType.THUG},
    {team: Team.BLUE, type: CardType.TUESDAYKNIGHT},
    {team: Team.BLUE, type: CardType.USURPER},
];

export const GREEN_CARDS: CardItf[] = [
    {team: Team.GREEN, type: CardType.LEPRECHAUN},
    {team: Team.GREEN, type: CardType.ZOMBIE},
];

export const GREY_CARDS: CardItf[] = [
    {team: Team.GREY, type: CardType.AGORAPHOBE},
    {team: Team.GREY, type: CardType.AHAB},
    {team: Team.GREY, type: CardType.ANARCHIST},
    {team: Team.GREY, type: CardType.BOMBBOT},
    {team: Team.GREY, type: CardType.BUTLER},
    {team: Team.GREY, type: CardType.CLONE},
    {team: Team.GREY, type: CardType.DECOY},
    {team: Team.GREY, type: CardType.GAMBLER},
    {team: Team.GREY, type: CardType.HOTPOTATO},
    {team: Team.GREY, type: CardType.INTERN},
    {team: Team.GREY, type: CardType.JULIET},
    {team: Team.GREY, type: CardType.MAID},
    {team: Team.GREY, type: CardType.MASTERMIND},
    {team: Team.GREY, type: CardType.MI6},
    {team: Team.GREY, type: CardType.MINION},
    {team: Team.GREY, type: CardType.MISTRESS},
    {team: Team.GREY, type: CardType.MOBY},
    {team: Team.GREY, type: CardType.NUCLEARTYRANT},
    {team: Team.GREY, type: CardType.PRIVATEEYE},
    {team: Team.GREY, type: CardType.QUEEN},
    {team: Team.GREY, type: CardType.RIVAL},
    {team: Team.GREY, type: CardType.ROBOT},
    {team: Team.GREY, type: CardType.ROMEO},
    {team: Team.GREY, type: CardType.SNIPER},
    {team: Team.GREY, type: CardType.SURVIVOR},
    {team: Team.GREY, type: CardType.TARGET},
    {team: Team.GREY, type: CardType.TRAVELER},
    {team: Team.GREY, type: CardType.VICTIM},
    {team: Team.GREY, type: CardType.WIFE},
];

export const OTHER_CARDS: CardItf[] = [
    {team: Team.OTHER, type: CardType.DRUNK},
];

export const ALL_CARDS: CardItf[] = [
    ...RED_CARDS,
    ...BLUE_CARDS,
    ...GREEN_CARDS,
    ...GREY_CARDS,
    ...OTHER_CARDS,
];
