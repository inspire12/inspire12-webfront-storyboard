
import React from 'react';

import { Avatar } from './Avatar.jsx';

export default {
    title: 'Design System/Avatar',
    component: Avatar,
    /*
    * More on Storybook argTypes at:
    * https://storybook.js.org/docs/react/api/argtypes
    */
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['tiny', 'small', 'medium', 'large'],
        },
    },
    /*
    * More on Storybook parameters at:
    * https://storybook.js.org/docs/react/writing-stories/parameters#component-parameters
    */
    parameters: {
        componentSubtitle: 'Displays an image that represents a user or organization',
    },
};
