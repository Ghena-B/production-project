import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator } from '@storybook/react';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticleDetailsPage from './ArticleDetailsPage';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's New in JS for the Year 2024?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 999,
    createdAt: '23.01.2024',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'Ghena B',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                "The program traditionally called 'Hello, world!' is very simple. It outputs a phrase "
                + "like 'Hello, world!' or something similar using the features of a certain language.",
                'JavaScript is a language that allows you to run programs in different'
                + ' environments. In our case, we are talking about browsers and the server platform Node.js. If you '
                + "haven't written a single line of JS code and are reading this text in a browser "
                + 'on your desktop computer, it means you are literally seconds away from your first JavaScript '
                + 'program.',
                'There are other ways to run JS code in the browser. For example, when it comes to the typical use of '
                + 'JavaScript programs, '
                + 'they are loaded into the browser to enable the functionality of web pages. Usually, '
                + 'the code is formatted as separate files with the extension .js, which are '
                + 'then connected to web pages. However, you can also include program code directly in the '
                + "page's code. "
                + 'This is done using the <script> tag. When the browser detects such code, it executes it. Details '
                + "about the script tag can be found on the w3school.com website. In particular, let's look "
                + 'at an example '
                + 'demonstrating the interaction with a web page using JavaScript, as shown on this resource. '
                + 'You can run '
                + "this example using the tools on that resource (look for the 'Try it Yourself' button), but "
                + "we'll do it "
                + "a little differently. Specifically, we'll create a new file in a text editor (for example, "
                + 'in VS Code '
                + 'or Notepad++) called hello.html and add the following code to it:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            // eslint-disable-next-line max-len
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - screenshot of the website',
        },
    ],
};
export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
