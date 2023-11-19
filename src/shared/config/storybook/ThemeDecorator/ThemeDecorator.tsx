import { Story } from '@storybook/react';
import theme from '@storybook/addon-interactions/dist/ts3.9/theme';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
