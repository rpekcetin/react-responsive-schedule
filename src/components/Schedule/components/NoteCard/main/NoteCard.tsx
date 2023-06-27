import React from 'react'
import '../css/index.css'
import { INoteProps } from '../types/types'


const NoteCard = (props: INoteProps) => {
    const titleFullDate: string = new Date(`${props?.selectedDay?.month}.${props?.selectedDay?.date}.${props?.selectedDay?.year}`).toLocaleString('original', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div>
            <div className='title'>
                <span className='date'>
                    {titleFullDate}
                </span>
                {' '}
                <span className='day'>
                    {props?.selectedDay?.day}
                </span>
            </div>
        </div>
    )
}

export default NoteCard