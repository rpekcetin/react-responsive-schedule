import React from 'react'
import { INoteProps } from '../types/types'
import Chevron from '../icons/chevron'
import '../css/index.css'

const NoteCard = (props: INoteProps) => {
    const titleFullDate: string = new Date(`${props?.selectedDay?.month}.${props?.selectedDay?.date}.${props?.selectedDay?.year}`).toLocaleString('original', { month: 'long', day: 'numeric', year: 'numeric' })

    const handleBack = () => {
        props.setNoteVisibility(false)
    }

    return (
        <div className='container-note'>
            <div className='back-note' onClick={handleBack}>
                <Chevron />
            </div>
            <div className='title-note'>
                <span className='date-note'>
                    {titleFullDate}
                </span>
                {' '}
                <span className='day-note'>
                    {props?.selectedDay?.day}
                </span>
            </div>
            <div className='textarea-note'>
                <textarea rows={5} />
            </div>
        </div>
    )
}

export default NoteCard