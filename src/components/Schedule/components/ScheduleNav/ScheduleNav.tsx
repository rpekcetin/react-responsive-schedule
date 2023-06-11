import React from 'react'
import ChevronRight from './icons/ChevronRight'
import ChevronLeft from './icons/ChevronLeft'
import { IScheduleNavProps } from './types'

const ScheduleNav = (props: IScheduleNavProps) => {
    const date = new Date(props.years, props.month, 10)
    const month = date.toLocaleString('default', { month: 'long' })
    return (
        <div>
            <div>
                {month} {props.years}
            </div>
            <div>
                <ChevronLeft />
                <ChevronRight />
            </div>
        </div>
    )
}

export default ScheduleNav