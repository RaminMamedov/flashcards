import { Meta, StoryObj } from '@storybook/react'

import { Label } from '../Label'

const meta = {
  component: Label,
  tags: ['autodocs'],
  title: 'Components/Label',
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const LabelDefault: Story = {
  args: {
    title: 'Label',
  },
}

export const LabelDefaultWithOtherColor: Story = {
  args: {
    color: 'var(--color-dark-100)',
    title: 'Label',
  },
}
