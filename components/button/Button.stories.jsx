import React from 'react';

import Button from './index';

export default {
    title: 'Button/Default',
    component: Button,
    argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Click Me!',
    
};

export const WhiteButton = Template.bind({});
WhiteButton.args = {
  children: 'Click me',
  isWhite: true,
};



export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Click me',
  disabled: true,
};
