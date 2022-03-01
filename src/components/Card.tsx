import playingCards from '../assets/playing_cards.svg';
import './Card.css';

export enum CardSuit {
  clubs = 'Clubs',
  spades = 'Spades',
  diamonds = 'Diamonds',
  hearts = 'Hearts'
}

export enum CardValue {
  ace='Ace',
  two='Two',
  three='Three',
  four='Four',
  five='Five',
  six='Six',
  seven='Seven',
  eight='Eight',
  nine='Nine',
  ten='Ten',
  jack='Jack',
  queen='Queen',
  king='King'
}

export interface CardData {
  suit: CardSuit;
  value: CardValue;
  faceUp: boolean;

}

export interface CardProperties extends React.SVGProps<SVGSVGElement>, CardData {}

export function Card({suit, value, faceUp, ...props}: CardProperties) {
  const cardId = faceUp
    ? `${playingCards}#${value.toLowerCase()}-${suit.toLowerCase()}`
    : `${playingCards}#face-down`;
  const classNames = `${props.className} card-component`;
  return <svg {...props} className={classNames} >
    <use xlinkHref={cardId}></use>
  </svg>
}
