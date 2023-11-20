import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from './checkbox'

export default {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} as Meta<typeof Checkbox>


export const Default = {
  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(true)

    return <Checkbox {...args} checked={checked} onChange={setChecked} />
  },

  args: {
    label: 'Click here',
    disabled: false,
  },
}
