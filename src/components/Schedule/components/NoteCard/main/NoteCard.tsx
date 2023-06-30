import React from 'react'
import { INoteProps } from '../types/types'
import '../css/index.css'
import Plus from '../icons/plus'
import Trash from '../icons/trash'
import Close from '../icons/close'

const NoteCard = (props: INoteProps) => {
    const {
        selectedDay,
        mode,
        currentNote,
        setCurrentNote,
        setNoteVisibility
    } = props

    //this object get selected full date and then create string date format 
    const titleFullDate: string = new Date(`${selectedDay?.month}.${selectedDay?.date}.${selectedDay?.year}`).toLocaleString('original',
        {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        }
    )

    //this func close note area and return calendar when user click chevron icon
    const handleBack = () => {
        setNoteVisibility(false)
    }

    //this func update state when user write something inside textarea
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentNote(e.target.value)
    }

    //this func clear current note when click trash icon
    const handleClear = () => {
        setCurrentNote('')
    }

    return (
        <div className={`container-note ${mode}`}>
            <div className='navbar-note'>
                <div className={`trash-note ${mode}`} onClick={handleClear}>
                    <Trash />
                </div>
                <div className='title-note'>
                    <span className={`date-note ${mode}`}>
                        {titleFullDate}
                    </span>
                    {' '}
                    <span className={`day-note ${mode}`}>
                        {selectedDay?.day}
                    </span>
                </div>
                <div className={`back-note ${mode}`} onClick={handleBack}>
                    <Close />
                </div>
            </div>
            <div className={`textarea-note ${mode}`}>
                <textarea rows={5} value={currentNote} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e)} />
            </div>
            <div className={`plus-note ${mode}`}>
                <Plus />
            </div>
        </div>
    )
}

export default NoteCard