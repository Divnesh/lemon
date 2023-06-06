import { fetchAPI } from '../API/api';

export const updateTimes = (state, action) => {
  state = fetchAPI(new Date(action.type));
  return state;
}

export const initializeTimes = fetchAPI(new Date());