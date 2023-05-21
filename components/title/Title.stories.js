import React from 'react';
import Title from './title';

export default {
    title: 'Title/Default',
    component: Title,
    argTypes: {},
};

const Template = ({ size, color, children }) => <Title size={size} color={color}>{children}</Title>;

export const Primary = Template.bind({});
Primary.args = {
    size: 'large',
    color: 'default',
    children: 'We Are The WeX',
};
export const Normal = Template.bind({});
Normal.args = {
    color: 'default',
    children: 'We Are The WeX',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    color: 'default',
    children: 'We Are The WeX',
};

