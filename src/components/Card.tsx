import React from 'react';
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


export interface CardProperties {
  suit: CardSuit;
  value: CardValue;
}

export function Card({suit, value}: CardProperties) {
  return <svg className="card-component">
    <use xlinkHref={`${playingCards}#${value.toLowerCase()}-${suit.toLowerCase()}`}></use>
  </svg>
}
