import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 AM',
        space: 9,
    },
    {
        id: 4,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 AM',
        space: 6,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 AM',
        space: 9,
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '08.00 AM -09.00 AM',
        space: 12,
    },
]

const AvailableAppoinments = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3}}>Aivailable Appoinments on {date.toDateString()}</Typography>

                 <Grid container spacing={2}>
                    {
                        bookings.map(booking =><Booking
                          key={booking.id}
                          booking={booking}
                          date={date}
                        >


                        </Booking>)
                    }
                    
                </Grid>
        </Container>
    );
};

export default AvailableAppoinments;