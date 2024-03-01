import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';
import AvatarStories from './storybook.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarStories,
};
export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarStories,
};
