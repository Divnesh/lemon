import React, {useEffect, useReducer, useState} from 'react';
import { TextField, Button, Container, FormControl, Select, InputLabel, MenuItem, Alert } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from "formik";
import {useAlertContext} from "../context/alertContext";
import { submitAPI } from '../API/api';

const occasions =[ 'Birthday', 'Anniversary', 'Other']

const Reservations = ({...props}) => {

    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            date: '',
            guests: '',
            time: '',
            occasion: ''
        },
        onSubmit: (values) => {
            let response = submitAPI(values);
            if(response){
                formik.resetForm({values: {
                    date: '',
                    guests: '',
                    time: '',
                    occasion: ''
                }
            });
          }
          onOpen('success', 'Reservation Made');
        },
        validationSchema: Yup.object().shape({
          date : Yup.date().required('Required'),
          guests: Yup.string().required('Required'),
          time: Yup.string().required('Required'),
           occasion: Yup.string().required('Required')
        }),
      });

    // const [date, setDate] = useState('')
    // const [guests, setGuests] = useState('')
    // const [time, setTime] = useState('')
    // const [occasion, setOccasion] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(firstName, lastName, email, dateOfBirth, password)
    }

    return (
        <Container sx={{paddingBottom: 2, marginTop: 8}}>
            <h2 display={'flex'} style={{textAlign: 'center'}}>Book Now</h2>
            <form>
                <FormControl fullWidth>
                    <TextField
                        id="date"
                        name="date"
                        type="date"
                        variant='outlined'
                        color=''
                        label="Date"
                        onChange={ (e) => {
                            formik.handleChange("date")(e);
                            props.dispatch({type: e.target.value});}
                        }
                        value={formik.date}
                        required
                        sx={{mb: 4}}
                        error= { formik.touched.date && formik.errors.date }
                        helperText={formik.errors.date}
                    />
                </FormControl>
                <FormControl fullWidth sx={{mb:4}}>
                    <InputLabel id="demo-simple-select-label">Time*</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="time"
                        name="time"
                        value={formik.time}
                        label="Time"
                        required
                        onChange={ formik.handleChange}
                        error= { Boolean(formik.touched.time && formik.errors.time) }
                        helperText={ formik.errors.time && formik.errors.time}
                    >
                        {
                            props.availableTimes.map((n) => {
                                return (
                                    <MenuItem value={n}>{n}</MenuItem>
                                );
                            })
                        }
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{mb:4}}>
                    <InputLabel id="occasion-label">Occasion*</InputLabel>
                    <Select
                        labelId="occasion-label"
                        id="occasion"
                        name='occasion'
                        value={formik.occasion}
                        label="Occasion"
                        required
                        onChange={formik.handleChange}
                        error= { Boolean(formik.touched.occasion && formik.errors.occasion) }
                        helperText={ formik.errors.occasion && formik.errors.occasion}

                    >
                        {
                            occasions.map( (n) => {
                                return (
                                    <MenuItem value={n}>{n}</MenuItem>
                                );
                            })
                        }
                        
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{mb:4}}>
                    <TextField
                        id="guests"
                        name='guests'
                        type="text"
                        variant='outlined'
                        color=''
                        label="No. of Guests"
                        onChange={ formik.handleChange}
                        value={formik.guests}
                        fullWidth
                        required
                        sx={{mb: 4}}
                        error= { Boolean(formik.touched.guests && formik.errors.guests) }
                        helperText={ formik.errors.guests && formik.errors.guests}
                    />
                </FormControl>
                <Button onClick={formik.handleSubmit} sx={{display:'flex', marginRight: 'auto', marginLeft: 'auto'}} variant="outlined" color="secondary" type="submit">Reserve</Button>
            </form>
        </Container>
    )
}
 
export default Reservations;