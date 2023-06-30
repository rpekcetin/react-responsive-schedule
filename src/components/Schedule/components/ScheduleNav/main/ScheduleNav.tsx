import React, { useState } from 'react'
import ChevronRight from '../icons/ChevronRight'
import ChevronLeft from '../icons/ChevronLeft'
import { IScheduleNavProps } from '../types/types'
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'
import '../css/index.css'

const ScheduleNav = (props: IScheduleNavProps) => {
    const { month, setMonth, years, setYears, setAnimate, setMode, mode, onClickPreviousMonth, onClickNextMonth } = props
    const date = new Date(years, month - 1, 1)
    const monthString = date.toLocaleString('original', { month: 'long' })
    const [active, setActive] = useState(true)

    const handleNextMonth = () => {
        setAnimate('animate-next')
        setActive(false)
        setTimeout(() => {
            setAnimate('')
            setActive(true)
        }, 1050);
        if (month === 12) {
            setYears(years + 1)
            setMonth(1)
            return { month: 1, year: years + 1 }
        } else {
            setMonth(month + 1)
            return { month: month + 1, year: years }
        }
    }

    const handlePreviousMonth = () => {
        setAnimate('animate-prev')
        setActive(false)
        setTimeout(() => {
            setAnimate('')
            setActive(true)
        }, 1050);
        if (month === 1) {
            setYears(years - 1)
            setMonth(12)
            return { month: 12, year: years - 1 }
        } else {
            setMonth(month - 1)
            return { month: month - 1, year: years }
        }
    }

    const handleMode = () => {
        setMode(mode === 'light' ? 'dark' : mode === '' ? 'dark' : 'light')
    }

    return (
        <div className='container'>
            <div className='mode-container' onClick={handleMode}>
                {mode !== 'light' ? mode === '' ? (<Moon />) : (<Sun />) : (<Moon />)}
            </div>
            <div className='flex-item'>
                <div className='container'>
                    <div onClick={active ? handlePreviousMonth : undefined} className={`button-previous ${mode === 'dark' ? 'dark-button-prev' : ''}`}>
                        <ChevronLeft />
                    </div>
                    <div className='flex-item'>
                        <span className={`nav-month ${mode === 'dark' ? 'dark-span-month' : ''}`}>{monthString}</span>
                        <span className={`nav-year ${mode === 'dark' ? 'dark-span' : ''}`}>{years}</span>
                    </div>
                    <div onClick={active ? handleNextMonth : undefined} className={`button-next ${mode === 'dark' ? 'dark-button-next' : ''}`}>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleNav