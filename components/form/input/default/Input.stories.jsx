import React from 'react';

import Input from './index';

export default {
    title: 'Input/Default',
    component: Input,
    argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: 'First Name',
    label: 'First Name',
    placeholder: 'First Name',
    type:'text',
    
};

