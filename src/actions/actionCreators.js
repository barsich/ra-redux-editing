import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CANCEL_EDIT_SERVICE, CHANGE_FILTER_FIELD } from './actionTypes';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function editService(service) {
  return { type: EDIT_SERVICE, payload: { service } };
}

export function cancelEditService(service) {
  return { type: CANCEL_EDIT_SERVICE, payload: { service } };
}

export function changeFilterField(value) {
  return { type: CHANGE_FILTER_FIELD, payload: { value } };
}
