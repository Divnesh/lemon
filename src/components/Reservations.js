import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';

const Reservations = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password) 
    }
    return (
        <Container sx={{paddingBottom: 2, marginTop: 4}}>
            <h2 display={'flex'} style={{textAlign: 'center'}}>Book a Table</h2>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Contact"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label=""
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="No. of Guests"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button sx={{display:'flex', marginRight: 'auto', marginLeft: 'auto'}} variant="outlined" color="secondary" type="submit">Reserve</Button>
            </form>
        </Container>
    )
}
 
export default Reservations;