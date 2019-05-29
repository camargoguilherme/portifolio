import React from 'react';

const TextArea = (props) =>{
  return (
    <textarea className={props.children.className} id={props.children.id} rows={props.children.rows} placeholder={props.children.label} required="required" data-validation-required-message={props.children.message}></textarea>
  );
}
export default TextArea;