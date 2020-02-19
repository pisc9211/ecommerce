import React from 'react';

import { FormGroupContainer, StyledFormInput, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroupContainer>
    <StyledFormInput className='form-input' onChange={handleChange} {...otherProps} />
    {
      label ? 
      (<FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >
        {label}
      </FormInputLabel>)
      : null
    }
  </FormGroupContainer>
)

export default FormInput;