import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import type React from 'react'
import { type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        onChange,
        autofocus,
        placeholder,
        ...otherProps
    } = props
    const ref = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true)
            ref.current?.focus()
        }
    }, [autofocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.value.length)
    }

    const onBlur = () => {
        setIsFocused(false)
    }

    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
        const target = e.target as HTMLInputElement
        setCaretPosition(target?.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            { placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                { isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 7}px` }}
                    />
                )}
            </div>
        </div>
    )
})
