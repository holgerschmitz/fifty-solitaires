import { Tableau, TableauProperties, PileDisplayProperties } from '../components/Tableau';
import { Direction } from '../components/Pile';
import { CardSuit, CardValue } from '../components/Card';

export default {
  component: Tableau,
  title: 'Components/Tableau',
};

interface StoryTableauProperties extends TableauProperties {
  style: { [key: string]: string}
}

const pileOpen: PileDisplayProperties = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: true, open: true },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: true, open: true },
    { suit: CardSuit.diamonds, value: CardValue.eight, faceUp: true, open: true },
  ], 
  direction: Direction.south,
  row: 1,
  col: 1
}

const pileClosed: PileDisplayProperties = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: true, open: false },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: true, open: false },
    { suit: CardSuit.diamonds, value: CardValue.eight, faceUp: true, open: false },
  ], 
  direction: Direction.south,
  row: 1,
  col: 2
}

const pileMixed: PileDisplayProperties = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: true, open: false },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: true, open: false },
    { suit: CardSuit.diamonds, value: CardValue.eight, faceUp: true, open: false },
    { suit: CardSuit.hearts, value: CardValue.jack, faceUp: true, open: true },
    { suit: CardSuit.spades, value: CardValue.four, faceUp: true, open: true },
    { suit: CardSuit.hearts, value: CardValue.seven, faceUp: true, open: true },
  ], 
  direction: Direction.east,
  row: 3,
  col: 1
}

const pileFaceUpAndDown: PileDisplayProperties = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: false, open: true },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: false, open: true },
    { suit: CardSuit.spades, value: CardValue.four, faceUp: true, open: true },
    { suit: CardSuit.hearts, value: CardValue.seven, faceUp: true, open: true },
  ], 
  direction: Direction.west,
  row: 1,
  col: 8
};

function Template(args: StoryTableauProperties) {
  return <div style={({
      display: 'flex',
      justifyContent: "center",
      width: "100%",
    })}>
      <div style={args.style}><Tableau {...args} /></div>
    </div>
};

export const SolitaireTableau = Template.bind({});

(SolitaireTableau as any).args = {
  piles: [
      pileClosed,
      pileOpen,
      pileMixed,
      pileFaceUpAndDown
  ],
  rows: 5,
  cols: 8,
  style: {
    width: '100%',
    backgroundColor: '#444444',
    padding: 10
  }
};
