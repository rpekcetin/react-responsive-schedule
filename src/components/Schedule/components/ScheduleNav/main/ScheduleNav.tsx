import React, { useState } from 'react'
import ChevronRight from '../icons/ChevronRight'
import ChevronLeft from '../icons/ChevronLeft'
import { IScheduleNavProps } from '../types/types'
import '../css/index.css'
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'

const ScheduleNav = (props: IScheduleNavProps) => {
    const { month, setMonth, years, setYears } = props
    const date = new Date(years, month - 1, 1)
    const monthString = date.toLocaleString('original', { month: 'long' })
    const [active, setActive] = useState(true)

    const handleNextMonth = () => {
        if (month === 12) {
            setYears(years + 1)
            setMonth(1)
        } else {
            setMonth(month + 1)
        }
        props.setAnimate('animate-next')
        setActive(false)
        setTimeout(() => {
            props.setAnimate('')
            setActive(true)
        }, 1050);
    }

    const handlePreviousMonth = () => {
        if (month === 1) {
            setYears(years - 1)
            setMonth(12)
        } else {
            setMonth(month - 1)
        }
        props.setAnimate('animate-prev')
        setActive(false)
        setTimeout(() => {
            props.setAnimate('')
            setActive(true)
        }, 1050);
    }

    const handleMode = () => {
        props.setMode(props.mode === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='container'>
            <div className='mode-container' onClick={handleMode}>
                {props.mode !== 'light' ? (<Sun />) : (<Moon />)}
            </div>
            <div className='flex-item'>
                <div className='container'>
                    <div onClick={active ? handlePreviousMonth : undefined} className='button-previous'>
                        <ChevronLeft />
                    </div>
                    <div className='flex-item'>
                        <span className='nav-month'>{monthString}</span>
                        <span className='nav-year'>{props.years}</span>
                    </div>
                    <div onClick={active ? handleNextMonth : undefined} className='button-next'>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleNav