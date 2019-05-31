import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';
const ItemForm = (props) => {
  return (
    <div className="control-group">
      <div className="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
        <label>{props.children.label}</label>
        { 
          (props.children.type && <Input>{props.children}</Input>) 
          || <TextArea>{props.children}</TextArea>}
        <p className="help-block text-danger"></p>
      </div>
    </div>
  )
}

export default ItemForm;