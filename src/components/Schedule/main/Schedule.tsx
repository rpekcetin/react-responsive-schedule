import React, { useState } from 'react'
import '../css/Schedule.css'
import DateButton from '../components/DateButton'
import { IDateArray, IScheduleProps } from '../types/types'
import ScheduleNav from '../components/ScheduleNav'
import "../../Css/Flex-Grid.css";
import "@fontsource/quicksand";
import NoteCard from '../components/NoteCard'

const Schedule = (props: IScheduleProps) => {
    const currentYear: number = new Date().getFullYear();
    const currentMonth: number = new Date().getMonth() + 1;
    const currentDay: number = new Date().getDate()
    const currentFullDate = `${currentDay}.${currentMonth}.${currentYear}`
    //const [day, setDay] = useState<number>(currentDay)
    const [month, setMonth] = useState<number>(currentMonth ?? 0)
    const [year, setYear] = useState<number>(currentYear ?? 0)
    const [dayCount, setDayCount] = useState<number>(new Date(year, month, 0).getDate() ?? 0)
    const [array, setArray] = useState<IDateArray[]>([])

    const [previousDayCount, setPreviousDayCount] = useState<number>(new Date(month === 1 ? year - 1 : year, month === 1 ? 12 : month - 1, 0).getDate() ?? 0)
    const [previousArray, setPreviousArray] = useState<IDateArray[]>([])
    const [previousCount, setPreviousCount] = useState<number>(0)

    const [nextDayCount, setNextDayCount] = useState<number>(new Date(month === 12 ? year + 1 : year, month === 12 ? 1 : month + 1, 0).getDate() ?? 0)
    const [nextCount, setNextCount] = useState<number>(0)
    const [nextArray, setNextArray] = useState<IDateArray[]>([])

    const [animate, setAnimate] = useState<'animate-prev' | 'animate-next' | ''>('')

    const [mode, setMode] = useState<'dark' | 'light' | ''>('')

    const [noteVisibility, setNoteVisibility] = useState<boolean>(false)
    const [clickedNote, setClickedNote] = useState<boolean>(false)
    const [selectedDay, setSelectedDay] = useState<IDateArray>(
        {
            key: "current-selected",
            date: currentDay,
            day: new Date(`${currentMonth}.${currentDay}.${currentYear}`).toLocaleString('en-us', { weekday: 'long' }),
            year: currentYear,
            month: currentMonth
        }
    )

    const [currentNote, setCurrentNote] = useState<string>('')

    const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const daysListReview = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    React.useEffect(() => {
        setArray([])
        setPreviousArray([])
        setNextArray([])
        setDayCount(new Date(year, month, 0).getDate())
        setNextDayCount(new Date(month === 12 ? year + 1 : year, month === 12 ? 1 : month + 1, 0).getDate())
        setPreviousDayCount(new Date(month === 1 ? year - 1 : year, month === 1 ? 12 : month - 1, 0).getDate())
        let newArray = []

        if (new Date(`${month}.${1}.${year}`).toLocaleString('en-us', { weekday: 'long' }) !== 'Monday') {
            setPreviousCount(daysList.findIndex((el) => el === new Date(`${month}.${1}.${year}`).toLocaleString('en-us', { weekday: 'long' })))
            for (let index = 1; index <= previousDayCount; index++) {
                previousArray.push({
                    key: `date-button-${index}`,
                    date: index,
                    day: new Date(`${month === 1 ? 12 : month - 1}.${index}.${month === 1 ? year - 1 : year}`).toLocaleString('original', { weekday: 'long' }),
                    year: month === 1 ? year - 1 : year,
                    month: month === 1 ? 12 : month - 1
                })
            }
        } else {
            setPreviousCount(0)
        }

        for (let index = 1; index <= dayCount; index++) {
            newArray.push({
                key: `date-button-${index}`,
                date: index,
                day: new Date(`${month}.${index}.${year}`).toLocaleString('original', { weekday: 'long' }),
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
                    day: new Date(`${month === 12 ? 1 : month + 1}.${index}.${month === 12 ? year + 1 : year}`).toLocaleString('original', { weekday: 'long' }),
                    year: month === 12 ? year + 1 : year,
                    month: month === 12 ? 1 : month + 1
                })
            }
        } else {
            setNextCount(0)
        }
        setArray([...newArray])
        setNextArray([...nextArray])
        setPreviousArray([...previousArray])
        newArray = []
    }, [month, dayCount])

    const handleSelectedDay = (item: IDateArray) => {
        setSelectedDay(item)
        setClickedNote(true)
        setTimeout(() => {
            setNoteVisibility(true)
        }, 250);
        setTimeout(() => {
            setClickedNote(false)
        }, 500);
    }

    return (
        <div className={`schedule-box`}>
            <div className={mode === 'dark' ? 'dark-box' : mode === '' ? '' : 'light-box'} />
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
                className={`schedule ${clickedNote ? 'note-box' : null}`}
            >
                {
                    noteVisibility ? (
                        <NoteCard
                            noteVisibility={noteVisibility}
                            setNoteVisibility={setNoteVisibility}
                            month={currentMonth}
                            year={currentMonth}
                            selectedDay={selectedDay}
                            currentNote={currentNote}
                            mode={mode}
                            setCurrentNote={setCurrentNote}
                            setClickedNote={setClickedNote}
                        />
                    ) : (
                        <>
                            <ScheduleNav
                                onClickPreviousMonth={props.onClickPreviousMonth}
                                onClickNextMonth={props.onClickNextMonth}
                                years={year}
                                month={month}
                                setMonth={setMonth}
                                setYears={setYear}
                                setAnimate={setAnimate}
                                mode={mode}
                                setMode={setMode}
                                currentMonth={props?.currentMonth}
                                setCurrentMonth={props?.setCurrentMonth}
                            />
                            <div className={`date-button-container ${animate}`}>
                                {daysListReview?.map((data: string, index: number) => {
                                    return (
                                        <div className='container-item' key={`day-list-${index}`}>
                                            <DateButton className={mode === 'dark' ? 'DarkDateButton customDate' : 'DateButton customDate'} label={data} id={`days-button-${index}`} />
                                        </div>
                                    )
                                })}
                                {previousArray?.map((data: IDateArray, index: number) => {
                                    return (
                                        <div className='container-item' onClick={() => handleSelectedDay(data)} key={data.key}>
                                            <DateButton className={`previous-button ${mode === 'dark' ? 'DarkDateButton previous-button-dark' : 'DateButton'}`} id={`prev-button-${index}`} label={data?.date} />
                                        </div>
                                    )
                                }).slice((previousDayCount - previousCount), previousDayCount)}
                                {array?.map((data: IDateArray, index: number) => {
                                    return (
                                        <div className='container-item' onClick={() => handleSelectedDay(data)} id={`current-button-${index}`} key={data.key}>
                                            <DateButton label={data?.date} className={`${mode === 'dark' ? 'DarkDateButton' : 'DateButton'} ${currentFullDate === `${data.date + '.' + data.month + '.' + data.year}` ? mode === 'dark' ? 'current-dark-date-button' : 'current-date-button' : ''}`} />
                                        </div>
                                    )
                                })}
                                {nextArray?.map((data: IDateArray, index: number) => {
                                    return (
                                        <div className='container-item' onClick={() => handleSelectedDay(data)} key={data.key}>
                                            <DateButton className={`next-button ${mode === 'dark' ? 'DarkDateButton next-button-dark' : 'DateButton'}`} id={`next-button-${index}`} label={data?.date} />
                                        </div>
                                    )
                                }).slice(0, nextCount)}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Schedule