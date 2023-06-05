import { useReducer, useState, useEffect } from 'react';
import LandingSection from '../components/LandingSection';
import Reservations from '../components/Reservations';
import { fetchAPI } from '../API/api';

const updateTimes = (state, action) => {
  state = fetchAPI(new Date(action.type));
  return state;
}

function Book() {

  const initializeTimes = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  // useEffect((date) => {
  //   fetchAPI(date)
  //   .then((response) => console.log(response))
  //   .catch((error) => console.log(error));
  // });

  return (
    <div>
        <LandingSection></LandingSection>
        <Reservations availableTimes={availableTimes} updateTimes={updateTimes} dispatch={dispatch}></Reservations>
    </div>
  );
}

export default Book;
