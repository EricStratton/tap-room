import React from 'react';
import PropTypes from 'prop-types';

function ReusableFrom(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input 
          type='number'
          name='price'
          placeholder='0.00' />
        <input
          type='number'
          name='abv'
          placeholder='0.0' />
        <input 
          type='number'
          name='stock'
          placeholder='124' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableFrom.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableFrom;