import React from 'react';

import Toggle from './index';

export default {
    title: 'Toggle/Default',
    component: Toggle,
    argTypes: {},
};

const Template = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Online',
    
};

