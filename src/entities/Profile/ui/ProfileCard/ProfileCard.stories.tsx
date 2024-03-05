import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import avatar from '../../../../../config/storybook/static/storybook.jpg';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Ghena',
        lastname: 'B',
        username: 'Ghdsaena',
        age: 100,
        country: Country.SPAIN,
        city: 'Madrid',
        currency: Currency.EUR,
        avatar,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};
WithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'user',
            password: '123',
            error: 'Error message',
        },
    }),
];
export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
