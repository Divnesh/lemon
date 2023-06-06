import { useReducer, useState, useEffect } from 'react';
import LandingSection from '../components/LandingSection';
import Reservations from '../components/Reservations';
import {initializeTimes, updateTimes} from '../Main/main';

function Book() {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <div>
        <LandingSection></LandingSection>
        <Reservations availableTimes={availableTimes} updateTimes={updateTimes} dispatch={dispatch}></Reservations>
    </div>
  );
}

export default Book;
