import React from 'react'
import Button from './index';

export default {
    title: 'WorkLyfe/Button',
    component: Button,
}

const Template = args => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
    children: 'Basic'
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'secondary',
    appearance: 'secondary'
}

export const Outlined = Template.bind({})
Outlined.args = {
    children: 'Outlined',
    appearance: 'outlined'
}

export const Transparent = Template.bind({})
Transparent.args = {
    children: 'transparent',
    appearance: 'transparent'
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Disabled',
    disabled: true
}