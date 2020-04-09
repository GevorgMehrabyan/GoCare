import React from 'react';
import './Fields.scss';
import { Input, Radio } from 'antd';
import "antd/dist/antd.css";


export const textField = ({
    input,
    type,
    prefix,
    placeholder,
    meta: { touched, error, }
}) => (
        <div className='input__wrapp'>
            <Input autoComplete={input.name} {...input} prefix={prefix} placeholder={placeholder} type={type} />
            {<span className={(touched && error) ? 'warning' : 'hidden'}>{error}</span>}
        </div>
    );

export const radioField = (props) => {
    return <div className='radio_wrapper'>
        <Radio {...props} id={props.name}>{props.label}</Radio>
    </div>
}