import React from 'react'
import s from './FormsControls.module.css'
import {Field} from "redux-form";
import {TextField, Checkbox} from "@mui/material";

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
    return <FormControl {...props}><TextField style={{'margin': "10px", 'width':'50%'}} {...input} {...restProps}  variant="standard"/></FormControl>
}
export const Check = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <Checkbox {...input} {...restProps} defaultChecked /> </FormControl>
}

export const createField = (placeholder:string,component:any,name:string,validate:any,props?:any) => (
    <div>
        <Field type="text"
               placeholder={placeholder}
               component={component}
               name={name}
               validate={validate}
               {...props}
        />
    </div>)

