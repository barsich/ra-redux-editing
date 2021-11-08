import { v4 as uuidv4 } from 'uuid';
import {
  ADD_SERVICE,
  CANCEL_EDIT_SERVICE,
  EDIT_SERVICE,
  REMOVE_SERVICE,
} from '../actions/actionTypes';

const initialState = {
  services: [
    { id: uuidv4(), name: 'Замена стекла', price: '21000' },
    { id: uuidv4(), name: 'Замена дисплея', price: '25000' },
    { id: uuidv4(), name: 'Постановка зачета', price: 'Бесплатно' },
    { id: uuidv4(), name: 'Отправка на доработку', price: '50' },
  ],
  currentlyEditing: {
    id: '',
    name: '',
    price: '',
  },
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      if (state.currentlyEditing.id) {
        return {
          ...state,
          services: state.services.map((service) => {
            if (service.id === state.currentlyEditing.id) {
              return { id: service.id, name, price };
            }
            return service;
          }),
          currentlyEditing: { id: '', name: '', price: '' },
        };
      } else {
        return {
          ...state,
          services: [...state.services, { id: uuidv4(), name, price: price }],
        };
      }
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return { ...state, services: state.services.filter((service) => service.id !== id) };
    case EDIT_SERVICE:
      const { service } = action.payload;
      const editableId = service.id;
      const editableName = service.name;
      const editablePrice = service.price;
      return {
        ...state,
        currentlyEditing: { id: editableId, name: editableName, price: editablePrice },
      };
    case CANCEL_EDIT_SERVICE:
      return {
        ...state,
        currentlyEditing: { id: '', name: '', price: '' },
      };
    default:
      return state;
  }
}
