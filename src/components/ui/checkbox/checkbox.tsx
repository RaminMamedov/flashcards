import { FC } from 'react'

import Check from '@/assets/icons/components/Check'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange: (checked: boolean) => void
  required?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  disabled,
  id,
  label,
  onChange,
  required,
}) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: s.container,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
            required={required}
          >
            {checked && (
              <CheckboxRadix.Indicator asChild className={classNames.indicator} forceMount>
                <div style={{ width: '18px', height: '18px' }}>
                  <Check size={18} />
                </div>
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
