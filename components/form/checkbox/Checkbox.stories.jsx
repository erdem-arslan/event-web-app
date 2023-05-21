import React from 'react';

import Checkbox from './index';

export default {
    title: 'Checkbox/Default',
    component: Checkbox,
    argTypes: {},
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    id: 'rules',
    name: 'rules',
    message: "Hey there, I'm using react"
    
};

