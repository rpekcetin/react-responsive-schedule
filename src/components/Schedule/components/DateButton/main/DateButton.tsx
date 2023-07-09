import React from 'react'
import { IDateButtonProps } from '../types/types'
import '../css/index.css'

const DateButton = (props: IDateButtonProps) => {
    return (
        <>
            <button id={props.id} className={`${props.className}`}>
                {props.label}
                {props.is_have ? (
                    <div className={`button-dot ${props.mode === '' || props.mode === 'light' ? 'light' : 'dark'}`} />
                ) : null}
            </button>
        </>
    )
}

export default DateButton