import React from 'react'
import ChevronRight from './icons/ChevronRight'
import ChevronLeft from './icons/ChevronLeft'
import { IScheduleNavProps } from './types'
import './index.css'

const ScheduleNav = (props: IScheduleNavProps) => {
    const { month, setMonth, years, setYears } = props
    const date = new Date(years, month - 1, 1)
    const monthString = date.toLocaleString('original', { month: 'long' })

    const handleNextMonth = () => {
        if (month === 12) {
            setYears(years + 1)
            setMonth(1)
        } else {
            setMonth(month + 1)
        }
    }

    const handlePreviousMonth = () => {
        if (month === 1) {
            setYears(years - 1)
            setMonth(12)
        } else {
            setMonth(month - 1)
        }
    }

    return (
        <div className='container'>
            <div className='flex-item'>
                <span className='nav-month'>{monthString}</span>
                <span className='nav-year'>{props.years}</span>
            </div>
            <div className='flex-item'>
                <div className='container'>
                    <div onClick={handlePreviousMonth} className='button-previous'>
                        <ChevronLeft />
                    </div>
                    <div onClick={handleNextMonth} className='button-next'>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleNav