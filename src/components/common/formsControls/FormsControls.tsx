import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    const hasErr =  meta.touched &&  meta.error
    return (
        <div className={s.formControl + " " + (hasErr ? s.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {
                hasErr &&  <span className={s.errorSpan}>{meta.error}</span>
            }

        </div>
    )
}