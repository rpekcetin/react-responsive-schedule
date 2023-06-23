import React from 'react'
import { IDateButtonProps } from './types'
import './index.css'

const DateButton = (props: IDateButtonProps) => {
    return <button id={props.id} className={`DateButton ${props.className}`}>{props.label}</button>
}

export default DateButton