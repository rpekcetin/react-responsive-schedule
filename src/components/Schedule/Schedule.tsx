import React, { useState } from 'react'
import './Schedule.css'
import DateButton from './DateButton/DateButton'
import { IDateArray, ScheduleProps } from './types'

const Schedule = (props: ScheduleProps) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate()
    const [day, setDay] = useState<number>(currentDay)
    const [month, setMonth] = useState<number>(currentMonth)
    const [year, setYear] = useState<number>(currentYear)
    const [dayCount, setDayCount] = useState<number>(new Date(year, month, 0).getDate())
    const [array, setArray] = useState<IDateArray[]>([])

    React.useEffect(() => {
        for (let index = 1; index <= dayCount; index++) {
            array.push({
                key: `date-button-${index}`,
                date: index,
                year,
                month
            })
        }
        setArray([...array])
    }, [0])

    return (
        <div
            id={props.id}
            style={{
                ...props.style,
                padding: props.p,
                paddingTop: props.pt,
                paddingBottom: props.pb,
                paddingRight: props.pr,
                paddingLeft: props.pl,
                margin: props.m,
                marginTop: props.mt,
                marginBottom: props.mb,
                marginRight: props.mr,
                marginLeft: props.ml
            }}
            className={`schedule ${props.className}`}
        >
            {array?.map((data: IDateArray) => {
                return (
                    <DateButton label={data?.date} key={data.key} />
                )
            })}
        </div>
    )
}

export default Schedule