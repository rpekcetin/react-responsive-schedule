import React from 'react'
interface DateButtonProps {
    label: string | number
    className?: string
}

const DateButton = (props: DateButtonProps) => {
    return <button className={props.className}>{props.label}</button>
}

export default DateButton