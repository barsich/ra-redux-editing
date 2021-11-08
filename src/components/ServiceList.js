import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeService,
  editService,
  changeServiceField,
  cancelEditService,
} from '../actions/actionCreators';

function ServiceList() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.serviceList.services);
  const filter = useSelector((state) => state.serviceFilter);
  const filteredServices = services.filter((service) => {
    const prettyName = service.name.toLowerCase();
    const prettyFilter = filter.trim().toLowerCase();
    if (prettyFilter !== '') {
      return prettyName.includes(prettyFilter);
    } else {
      return service;
    }
  });

  const handleRemove = (id) => {
    dispatch(removeService(id));
    dispatch(cancelEditService());
  };

  const handleEdit = (service) => {
    dispatch(editService(service));
    const { name, price } = service;
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', price));
  };

  return (
    <ul>
      {filteredServices.map((service) => (
        <li key={service.id}>
          {service.name} {service.price}
          <button onClick={() => handleEdit(service)}>{`\u270E`}</button>
          <button onClick={() => handleRemove(service.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
