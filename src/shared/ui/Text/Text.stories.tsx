import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import theme from '@storybook/addon-interactions/dist/ts3.9/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { OutlineDark } from 'shared/ui/Button/Button.stories';
import { Text, TextTheme } from './Text';

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
