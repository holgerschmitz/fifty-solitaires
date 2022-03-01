import { Card, CardData } from "./Card";
import './Pile.css'

export interface CardDisplayProperties extends CardData {
    faceUp: boolean;
    open: boolean;
}

export type PileData = Array<CardDisplayProperties>;

export enum Direction {
    east = 'east',
    west = 'west',
    north = 'north',
    south = 'south'
}

export interface PileProperties {
    pile: PileData;
    direction: Direction;
}

const margins: {[key: string]: [string, number, number]} = {
    east: [ 'left', 15, 2],
    west: [ 'left', -15, -2],
    north: [ 'top', -15, -2],
    south: [ 'top', 15, 2],
}

export function Pile({pile, direction}: PileProperties) {
    const marginSpec = margins[direction]; 
    return <div className={`card-pile card-pile-${direction}`}>
        {pile.map(function cardMapper(this: {offset: number}, card, index) {
            const cardStyle = {
                [marginSpec[0]]: `${this.offset}%`
            }
            this.offset += card.open ? marginSpec[1] : marginSpec[2];
            return <Card 
                className={`card ${card.open ? 'open' : ''}`}
                suit={card.suit} 
                value={card.value} 
                faceUp={card.faceUp}
                key={index}
                style={cardStyle} />
        }, {offset: 0})}
    </div>
}