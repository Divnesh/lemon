import { renderHook, fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/Reservations';
import Book from './pages/Book'
import { useReducer } from "react";
import {initializeTimes, updateTimes} from './Main/main';

test('Renders the BookingForm heading', () => {
    const availableTimes = []
    const mockFn = jest.fn();
    render(<BookingForm  availableTimes={availableTimes} updateTimes={mockFn} dispatch={mockFn}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});


test("initializeTimes function", () => {
    const result = initializeTimes;
    expect(result.length).toBeGreaterThan(0);
})

test("updateTimes function", () => {
    let state = [];
    const result = updateTimes(state, {type: '06-06-2023'});
    expect(result.length).toBeGreaterThan(0);
})