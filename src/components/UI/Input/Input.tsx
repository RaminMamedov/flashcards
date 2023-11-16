import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  forwardRef,
  useState,
} from 'react'

import { ClosedEyeIcon } from '@/assets-icons/icons-components/ClosedEyeIcon'
import { OpenEyeIcon } from '@/assets-icons/icons-components/OpenEyeIcon'
import { SearchIcon } from '@/assets-icons/icons-components/SearchIcon'
import { Label } from '@/components/UI/Label/Label'
import { Typography } from '@/components/UI/Typography'
import { clsx } from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  error?: string
  id?: string
  label?: string
  onChangeValue?: (value: string) => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    className,
    error,
    id,
    label,
    onChange,
    onChangeValue,
    onEnter,
    onKeyDown,
    placeholder,
    search,
    type,
    ...restProps
  } = props

  const showPasswordHandler = () => {
    setShowPassword(prevState => !prevState)
  }

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onChangeValue?.(e.target.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onEnter?.(e)
    }
    onKeyDown?.(e)
  }

  const classNames = {
    error: clsx(s.error),
    input: clsx(s.input, !!error && s.error, search && s.hasSearchIcon, className),
    inputWrapper: clsx(s.inputWrapper, !!restProps.value && s.active),
    label: clsx(s.label, className),
    root: clsx(s.root, className),
    searchIcon: clsx(s.searchIcon),
  }

  const getInputType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
    if (type === 'password' && showPassword) {
      return 'text'
    } else {
      return type
    }
  }
  const inputType = getInputType(type, showPassword)

  return (
    <div className={classNames.root}>
      {label && <Label className={classNames.label} htmlFor={id} title={label} />}
      <div className={classNames.inputWrapper}>
        {search && <SearchIcon className={classNames.searchIcon} />}
        <input
          className={classNames.input}
          id={id}
          onChange={onChangeValueHandler}
          onKeyDown={onKeyPressHandler}
          placeholder={placeholder}
          ref={ref}
          type={inputType}
          {...restProps}
        />
        {type === 'password' && (
          <button className={s.showPassword} onClick={showPasswordHandler} type={'button'}>
            {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
          </button>
        )}
      </div>
      {!!error && (
        <Typography as={'span'} className={classNames.error} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
})
