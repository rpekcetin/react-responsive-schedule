import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'
import Schedule from '../main/Schedule';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: any = {
    title: 'Components/Schedule',
    component: Schedule,
    tags: ['autodocs'],
    argTypes: {
        currentMonthProp: { description: 'Handle current month with react hooks.', defaultValue: null, control: { type: null } },
        setCurrentMonthProps: { control: { type: null } },
        onClickClear: { table: { disable: true }, control: { type: null } },
        onClickAdd: { control: { type: null } },
        onClickClose: { control: { type: null } },
        onClickDay: { control: { type: null } },
        onClickPreviousMonth: { control: { type: null } },
        onClickNextMonth: { control: { type: null } },
    }
} satisfies Meta<typeof Schedule>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const World: Story = {
    args: {
    },
};