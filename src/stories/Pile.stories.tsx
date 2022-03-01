import { Pile, PileProperties } from '../components/Pile';
import { CardSuit, CardValue } from '../components/Card';

export default {
  component: Pile,
  title: 'Components/Pile',
};

interface StoryPileProperties extends PileProperties {
  style: { [key: string]: string}
}



function Template(args: StoryPileProperties) {
  return <div style={({
      display: 'flex',
      justifyContent: "center",
      width: "100%",
    })}>
      <div style={args.style}><Pile {...args} /></div>
    </div>
};

export const Open = Template.bind({});

(Open as any).args = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: true, open: true },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: true, open: true },
    { suit: CardSuit.diamonds, value: CardValue.eight, faceUp: true, open: true },
], 
  direction: 'south',
  style: {
    width: 200,
    height: 290,
    backgroundColor: '#444444',
    padding: 10
  }
};

export const Closed = Template.bind({});

(Closed as any).args = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: true, open: false },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: true, open: false },
    { suit: CardSuit.diamonds, value: CardValue.eight, faceUp: true, open: false },
], 
  direction: 'south',
  style: {
    width: 200,
    height: 290,
    backgroundColor: '#444444',
    padding: 10
  }
};

export const Mixed = Template.bind({});

(Mixed as any).args = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: true, open: false },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: true, open: false },
    { suit: CardSuit.diamonds, value: CardValue.eight, faceUp: true, open: false },
    { suit: CardSuit.hearts, value: CardValue.jack, faceUp: true, open: true },
    { suit: CardSuit.spades, value: CardValue.four, faceUp: true, open: true },
    { suit: CardSuit.hearts, value: CardValue.seven, faceUp: true, open: true },
], 
  direction: 'south',
  style: {
    width: 200,
    height: 290,
    backgroundColor: '#444444',
    padding: 10
  }
};

export const FaceUpAndDown = Template.bind({});

(FaceUpAndDown as any).args = {
  pile: [
    { suit: CardSuit.clubs, value: CardValue.ace, faceUp: false, open: true },
    { suit: CardSuit.clubs, value: CardValue.three, faceUp: false, open: true },
    { suit: CardSuit.spades, value: CardValue.four, faceUp: true, open: true },
    { suit: CardSuit.hearts, value: CardValue.seven, faceUp: true, open: true },
], 
  direction: 'south',
  style: {
    width: 200,
    height: 290,
    backgroundColor: '#444444',
    padding: 10,
  }
};
