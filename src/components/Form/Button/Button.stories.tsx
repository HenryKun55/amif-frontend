import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Design System/Form/Button',
  component: Button,
} as Meta

export const Default: Story<ButtonProps> = args => <Button {...args} />
