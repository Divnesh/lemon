import React, {useEffect, useReducer, useState} from 'react';
import { TextField, Button, Container, FormControl, Select, InputLabel, MenuItem, Alert } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { submitAPI } from '../API/api';

const occasions =[ 'Birthday', 'Anniversary', 'Other']

const Reservations = ({...props}) => {
    const [status, setStatus] = useState(undefined);


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
            setStatus({type : 'success'});
          }
        //   onOpen('success', 'Reservation Made');
        },
        validationSchema: Yup.object().shape({
          date : Yup.date().required('Required'),
          guests: Yup.string().required('Required'),
          time: Yup.string().required('Required'),
          occasion: Yup.string().required('Required')
        }),
      });

    return (
        <Container sx={{paddingBottom: 2, marginTop: 10}}>
            {
                status?.type === 'success' && <Alert severity="success">Your Booking is done. See you then.!</Alert>
            }

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
                        value={formik.values.date}
                        required
                        sx={{mb: 4}}
                        error= {formik.touched.date && Boolean(formik.errors.date) }
                        helperText={formik.touched.date && formik.errors.date}
                        onBlur={formik.handleBlur}
                    />
                </FormControl>
                <FormControl fullWidth sx={{mb:4}}>
                    <InputLabel id="demo-simple-select-label">Time*</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="time"
                        name="time"
                        value={formik.values.time}
                        label="Time"
                        required
                        onChange={ formik.handleChange}
                        error= { Boolean(formik.touched.time && formik.errors.time) }
                        onBlur={formik.handleBlur}
                    >
                        <MenuItem value="">
                        </MenuItem>
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
                        value={formik.values.occasion}
                        label="Occasion"
                        required
                        onChange={formik.handleChange}
                        error= { Boolean(formik.touched.occasion && formik.errors.occasion) }
                        onBlur={formik.handleBlur}
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
                        value={formik.values.guests}
                        fullWidth
                        required
                        sx={{mb: 2}}
                        error= { formik.touched.guests && Boolean(formik.errors.guests) }
                        helperText={ formik.touched.guests && formik.errors.guests}
                        onBlur={formik.handleBlur}
                    />
                </FormControl>
                <Button onClick={formik.handleSubmit} sx={{display:'flex', marginRight: 'auto', marginLeft: 'auto'}} variant="outlined" color="primary" type="submit">Reserve</Button>
            </form>
        </Container>
    )
}
export default Reservations;