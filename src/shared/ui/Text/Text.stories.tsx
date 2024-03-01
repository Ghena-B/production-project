import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextSize, TextTheme } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Here is a title',
    text: 'text example is here',
};
export const Error = Template.bind({});
Error.args = {
    title: 'Here is a title',
    text: 'text example is here',
    theme: TextTheme.ERROR,
};
export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Here is a title',
    text: 'text example is here',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Here is a title',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text example is here',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Here is a title',
    text: 'text example is here',
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Here is a title',
};
OnlyTitleDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'text example is here',
};
OnlyTextDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Here is a title',
    text: 'text example is here',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Here is a title',
    text: 'text example is here',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Here is a title',
    text: 'text example is here',
    size: TextSize.S,
};
