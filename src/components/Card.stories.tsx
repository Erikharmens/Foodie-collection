import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Card',
  component: Card,
  argTypes: {},
  args: {
    title: 'Defaul title',
    withButtons: false,
    children:
      'This is a long text, i like pancakes and biking around the city centre',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});

export const CardWithButtons = Template.bind({});

CardWithButtons.args = {
  withButtons: true,
};
