import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, cancelEditService } from '../actions/actionCreators';

function ServiceAdd() {
  const [isEditing, setEditing] = useState(false);
  const service = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  // отвечает за появление/исчезновение кнопки cancel
  useEffect(() => {
    if (service.name !== '' || service.price !== '') {
      setEditing(true);
    } else {
      setEditing(false);
    }
  }, [service.name, service.price]);

  const handleChange = (evt) => {
    let { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // без имени нельзя добавить, без цены можно
    if (service.name === '') {
      return;
    }
    dispatch(addService(service.name, service.price));
    // очистка формы
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
  };

  const handleCancel = () => {
    // очистка формы
    dispatch(changeServiceField('name', ''));
    dispatch(changeServiceField('price', ''));
    dispatch(cancelEditService());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={service.name} />
      <input name="price" onChange={handleChange} value={service.price} />
      <button type="submit">Save</button>
      {isEditing && (
        <button type="reset" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default ServiceAdd;
