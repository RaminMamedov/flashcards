import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  argTypes: { onChange: { action: 'text changes' } },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputDefault: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputDisabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputWithError: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const InputPassword: Story = {
  args: {
    label: 'Input',
    placeholder: 'Password',
    type: 'password',
  },
}

export const InputPasswordWithError: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Password',
    type: 'password',
  },
}

export const InputSearch: Story = {
  args: {
    placeholder: 'Input search',
    search: true,
    type: 'search',
  },
}

export const InputSearchWithError: Story = {
  args: {
    error: 'Error!',
    placeholder: 'Input search',
    search: true,
    type: 'search',
  },
}
