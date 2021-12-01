import React from 'react';

import { Card, CardProperties, CardSuit, CardValue } from '../components/Card';

export default {
  component: Card,
  title: 'Components/Card',
};

interface StoryCardProperties extends CardProperties {
  style: { [key: string]: string}
}

function Template(args: StoryCardProperties) {
  return <div style={args.style}><Card {...args} /></div>
};

export const Large = Template.bind({});

(Large as any).args = {
  suit: CardSuit.spades, 
  value: CardValue.ace,
  style: {
    width: 380,
    height: 560,
    backgroundColor: '#008800',
    padding: 10
  }
};

export const Small = Template.bind({});

(Small as any).args = {
  suit: CardSuit.spades, 
  value: CardValue.ace,
  style: {
    width: 200,
    height: 290,
    backgroundColor: '#008800',
    padding: 10
  }
};
