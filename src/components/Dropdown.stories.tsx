import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {},
  args: {
    title: 'Defaul title',
    withButtons: false,
    children:
      'This is a long text, i like pancakes and biking around the city centre',
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});

let value = 'A';
const setValue = (newVal: string) => {
  value = newVal;
};

Default.args = {
  items: ['A', 'B', 'C'],
  value,
  setValue,
};
