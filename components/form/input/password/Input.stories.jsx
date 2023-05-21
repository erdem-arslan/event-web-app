import React from 'react';

import InputPass from './index';

export default {
    title: 'Input/Password',
    component: InputPass,
    argTypes: {},
};

const Template = (args) => <InputPass {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: 'Password',
    label: 'Password',
    placeholder: 'Password',
    type:'text',
    
};

