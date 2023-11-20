import { FC, ReactNode } from 'react'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'
import { KeyboardArrowDown } from '@/assets/icons/components/KeyboardArrowDown'

import { clsx } from 'clsx'

type Option = { label: string; value: string }


type SelectProps = {
  disabled?: boolean
  description?: string
  value: Option[]
  placeholder: string
  defaultOpen?: boolean
  callback: (value: string) => void
}

export const SelectDemo: FC<SelectProps> = ({
  callback,
  value,
  placeholder,
  description,
  disabled,
}) => {
  const selectItems = value.map(item => <SelectItem value={item.value}>{item.label}</SelectItem>)

  return (
    <div>
      <Select.Root onValueChange={value => callback(value)} disabled={disabled}>
        {description && (
          <span className={clsx(s.SelectLabel, disabled && s.SelectLabelDisabled)}>
            Select a fruit…
          </span>
        )}
        <Select.Trigger className={s.SelectTrigger} disabled={false}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className={s.SelectIcon}>
            <KeyboardArrowDown size={16} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={s.SelectContent} position="popper">
            <Select.Viewport className={s.SelectViewport}>
              <Select.Group className={s.SelectGroup}>
               {selectItems}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}

type SelectItemProps = {
  children: ReactNode
  className?: string
  value: string
}

const SelectItem: FC<SelectItemProps> = ({ children, className, value, ...props }) => {
  return (
    <Select.Item {...props} className={s.SelectItem} value={value}>
      <Select.ItemText className={s.SelectItemText}>{children}</Select.ItemText>
      <Select.ItemIndicator className={s.SelectItemIndicator}></Select.ItemIndicator>
    </Select.Item>
  )
}
