import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
  argTypes: {},
  args: {
    title: 'Defaul title',
    withButtons: false,
    children:
      'This is a long text, i like pancakes and biking around the city centre',
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const DefaultList = Template.bind({});

export const ListWithButtons = Template.bind({});

ListWithButtons.args = {
  withButtons: true,
};
