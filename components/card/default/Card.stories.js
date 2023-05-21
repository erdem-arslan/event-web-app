import React from 'react';

import Card from './index';

export default {
    title: 'Cards/Default',
    component: Card,
    argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: {
        "title": "irure cillum sit ad sit voluptate",
        "image": "https://placehold.co/600x400",
        "date": "2022-09-18T11:36:49.552Z",
        "description": "Lorem ea in ex quis officia sint do amet pariatur dolore laboris ",
        "location": "Maslak Arena",
        "id": "c419fe48-5641-47e2-a245-766773bc7a62"
    }
};
