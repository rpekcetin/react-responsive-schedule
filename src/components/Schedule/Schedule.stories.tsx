import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'
import Schedule from './Schedule';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: any = {
    title: 'Xyz/Schedule',
    component: Schedule,
    tags: ['autodocs'],
} satisfies Meta<typeof Schedule>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const World: Story = {
    args: {
        label: 'Hello World',
        children: (<div>lebogle</div>)
    },
};