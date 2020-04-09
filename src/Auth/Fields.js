import React from 'react';
import './Fields.scss';
import { Input, Radio , Checkbox} from 'antd';
import "antd/dist/antd.css";
const RadioGroup = Radio.Group;

const makeField = Component => ({placeholder, defaltValue, name ,input, meta, children, hasFeedback,  label, ...rest }) => {
    return (
      <div
        className='input__wrapp'
        label={label}
        placeholder={placeholder}
        name={name}
        defaltValue={defaltValue}
      >
        <Component  value={defaltValue} placeholder={placeholder} name={name} autoComplete={input.name} {...input} {...rest} children={children} />
        <span className={(meta.touched && meta.error) ? 'warning' : 'hidden'}>{meta.error}</span>
      </div>
    );
  };


export  const textField = makeField(Input);
export  const radioField = makeField(RadioGroup);
export  const checkboxField = makeField(Checkbox);


