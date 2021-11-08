import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterField } from '../actions/actionCreators';

function ServiceFilter() {
  const value = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    let { value } = evt.target;
    dispatch(changeFilterField(value));
  };

  return (
    <label>
      Фильтр: <input type="text" onChange={handleChange} value={value}></input>
    </label>
  );
}

export default ServiceFilter;
