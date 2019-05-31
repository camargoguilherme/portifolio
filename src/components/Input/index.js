import React from 'react';

const Input = (props) =>{
  return (
    <input className={props.children.className} id={props.children.id} name={props.children.id} type={props.children.type} placeholder={props.children.label} required="required" data-validation-required-message={props.children.message} />
  );
}
export default Input;