import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductList from './ProductList';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ProductList',
  component: ProductList,
  argTypes: {},
  args: {
    title: 'Defaul title',
    withButtons: false,
    children:
      'This is a long text, i like pancakes and biking around the city centre',
  },
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

export const DefaultList = Template.bind({});

export const ListWithButtons = Template.bind({});

ListWithButtons.args = {
  withButtons: true,
};
