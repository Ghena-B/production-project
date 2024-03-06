## Project Setup

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - run server + frontend project in dev mode

```

----

## Scripts

- `npm run start` - Start the frontend project on webpack dev server
- `npm run start:vite` - Start the frontend project on vite
- `npm run start:dev` - Start the frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Start the frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (non-minimized)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with style linter
- `npm run lint:scss:fix` - Fix scss files with style linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate JSON report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - Start Storybook
- `npm run storybook:build` - Build Storybook
- `npm run generate:slice` - Script to generate FSD slices

----

## Project Architecture

The project is written following the Feature Sliced Design methodology.

Documentation link - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Translation Management

The project uses the i18next library for translation management. Translation files are stored in public/locales.

For better workflow, it's recommended to install plugins for webstorm/vscode.

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project employs 4 types of tests:
1) Unit tests with Jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) Screenshot testing with Loki - `npm run test:ui`
4) End-to-end testing with Cypress - `npm run test:e2e`

More details about tests can be found in [testing documentation](docs/tests.md)

----

## Linting

The project uses ESLint for TypeScript code linting and Stylelint for style files linting.

Additionally, for strict control over main architectural principles, a custom ESLint plugin *eslint-plugin-ghenabujag-plugin* is used, containing 3 rules:
1) path-checker - prohibits the use of absolute imports within the same module
2) layer-imports - checks the correct usage of layers in terms of FSD (e.g., widgets cannot be used in features and entities)
3) public-api-imports - allows importing from other modules only from public API. Has auto-fix support.

More details about the plugin can be found in [here](https://www.npmjs.com/package/eslint-plugin-ghenabujag-plugin).

##### Running linters
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with style linter
- `npm run lint:scss:fix` - Fix scss files with style linter

----

## Storybook

For each component in the project, story cases are described.
Server requests are mocked using storybook-addon-mock.

The file with story cases is created next to the component with the extension .stories.tsx

Start Storybook with the command:
- `npm run storybook`

More about [Storybook](docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

```


----

## Project Configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Both builders are adapted for the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - Storybook configuration

Various scripts for refactoring/simplifying code writing/report generation, etc., are located in the `scripts` folder.

----

## CI Pipeline

GitHub Actions configuration is located in /.github/workflows.
CI runs all types of tests, project build and Storybook, and linting.


----

### Data Handling

Data interaction is done using Redux Toolkit.
Where possible, reusable entities should be normalized using EntityAdapter.

Server requests are sent using [RTK query](src/shared/api/rtkApi.ts)

For asynchronous loading of reducers (to avoid pulling them into the main bundle), [DynamicModuleLoader](src/shared/lib/components/DynanmicModuleLoader/DynamicModuleLoader.tsx) is used.

----

### Working with Feature Flags

The use of feature flags is permitted only through the helper function toggleFeatures.

It accepts an object with the following options:

{
name: the name of the feature flag,
on: a function to execute after the feature is turned on,
off: a function to execute after the feature is turned off
}

For automatic removal of a feature, use the script remove-feature.ts, which takes 2 arguments:

1. The name of the feature flag to be removed.
2. The state (on\off).

----

## Entities

- [Article](src/entities/Article)
- [Comment](src/entities/Comment)
- [Counter](src/entities/Counter)
- [Country](src/entities/Country)
- [Currency](src/entities/Currency)
- [Notification](src/entities/Notification)
- [Profile](src/entities/Profile)
- [Rating](src/entities/Rating)
- [User](src/entities/User)

## Features

- [addCommentForm](src/features/addCommentForm)
- [articleEditForm](src/features/articleEditForm)
- [articleRating](src/features/articleRating)
- [articleRecommendationsList](src/features/articleRecommendationsList)
- [AuthByUsername](src/features/AuthByUsername)
- [avatarDropdown](src/features/avatarDropdown)
- [editableProfileCard](src/features/editableProfileCard)
- [LangSwitcher](src/features/LangSwitcher)
- [notificationButton](src/features/notificationButton)
- [ThemeSwitcher](src/features/ThemeSwitcher)
