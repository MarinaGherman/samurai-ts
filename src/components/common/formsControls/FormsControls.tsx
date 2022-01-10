import React from 'react'
import s from './FormsControls.module.css'

const FormControl =({input, meta, child, ...props}: any)=> {
    const hasErr =  meta.touched &&  meta.error
    return (
        <div className={s.formControl + " " + (hasErr ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasErr &&  <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}
export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}