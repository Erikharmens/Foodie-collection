// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'success',
        'info',
        'warning',
        'danger',
        'dark',
      ],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    size: 'md',
    disabled: false,
    children: 'This is button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
};
