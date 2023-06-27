import React from 'react'
import { IDateButtonProps } from '../types/types'
import '../css/index.css'

const DateButton = (props: IDateButtonProps) => {
    return <button id={props.id} className={`${props.className}`}>{props.label}</button>
}

export default DateButton