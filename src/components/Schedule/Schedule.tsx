import React, { useState } from 'react'
import './Schedule.css'
import DateButton from './components/DateButton/DateButton'
import { IDateArray, IScheduleProps } from './types'
import ScheduleNav from './components/ScheduleNav/ScheduleNav'
import "../Css/Flex-Grid.css";

const Schedule = (props: IScheduleProps) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const currentDay = date.getDate()
    const [day, setDay] = useState<number>(currentDay)
    const [month, setMonth] = useState<number>(currentMonth)
    const [year, setYear] = useState<number>(currentYear)
    const [dayCount, setDayCount] = useState<number>(new Date(year, month, 0).getDate())
    const [array, setArray] = useState<IDateArray[]>([])

    const [previousDayCount, setPreviousDayCount] = useState<number>(new Date(month === 1 ? year - 1 : year, month === 1 ? 12 : month - 1, 0).getDate())
    const [previousArray, setPreviousArray] = useState<IDateArray[]>([])
    const [previousCount, setPreviousCount] = useState<number>(0)

    const [nextDayCount, setNextDayCount] = useState<number>(new Date(month === 12 ? year + 1 : year, month === 12 ? 1 : month + 1, 0).getDate())
    const [nextArray, setNextArray] = useState<IDateArray[]>([])
    const [nextCount, setNextCount] = useState<number>(0)

    React.useEffect(() => {
        const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        if (new Date(`${month}.${1}.${year}`).toLocaleString('en-us', { weekday: 'long' }) !== 'Monday') {
            setPreviousCount(daysList.findIndex((el) => el === new Date(`${month}.${1}.${year}`).toLocaleString('en-us', { weekday: 'long' })))
            for (let index = 1; index <= previousDayCount; index++) {
                previousArray.push({
                    key: `date-button-${index}`,
                    date: index,
                    day: new Date(`${month === 1 ? 12 : month - 1}.${index}.${month === 1 ? year - 1 : year}`).toLocaleString('en-us', { weekday: 'long' }),
                    year: month === 1 ? year - 1 : year,
                    month: month === 1 ? 12 : month - 1
                })
            }
        }

        for (let index = 1; index <= dayCount; index++) {
            array.push({
                key: `date-button-${index}`,
                date: index,
                day: new Date(`${month}.${index}.${year}`).toLocaleString('en-us', { weekday: 'long' }),
                year,
                month
            })
        }

        if (new Date(`${month}.${dayCount}.${year}`).toLocaleString('en-us', { weekday: 'long' }) !== 'Sunday') {
            setNextCount(6 - daysList.findIndex((el) => el === new Date(`${month}.${dayCount}.${year}`).toLocaleString('en-us', { weekday: 'long' })))
            for (let index = 1; index <= nextDayCount; index++) {
                nextArray.push({
                    key: `date-button-${index}`,
                    date: index,
                    day: new Date(`${month === 12 ? 1 : month + 1}.${index}.${month === 12 ? year + 1 : year}`).toLocaleString('en-us', { weekday: 'long' }),
                    year: month === 12 ? year + 1 : year,
                    month: month === 12 ? 1 : month + 1
                })
            }
        }
        setArray([...array])
    }, [0])

    return (
        <div style={{ maxWidth: '450px' }}>
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
                <ScheduleNav years={year} month={month} setMonth={setMonth} setYears={setYear} />
                <div className='date-button-container'>
                    {previousArray?.map((data: IDateArray, index: number) => {
                        return (
                            <div className='container-item' key={data.key}>
                                <DateButton label={data?.date} />
                            </div>
                        )
                    }).slice((previousDayCount - previousCount), previousDayCount)}
                    {array?.map((data: IDateArray, index: number) => {
                        return (
                            <div className='container-item' key={data.key}>
                                <DateButton label={data?.date} />
                            </div>
                        )
                    })}
                    {nextArray?.map((data: IDateArray, index: number) => {
                        return (
                            <div className='container-item' key={data.key}>
                                <DateButton label={data?.date} />
                            </div>
                        )
                    }).slice(0, nextCount)}
                </div>
            </div>
        </div>
    )
}

export default Schedule