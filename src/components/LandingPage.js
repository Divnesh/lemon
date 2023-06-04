import * as React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Container, Typography, Button } from "@mui/material";
import  foodphoto from "../images/restauranfood.jpg"
import Text from "./Text";
import CardStyle from "./CardStyle";
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta_1_.jpg'
import lemon from '../images/lemon dessert.jpg'

const headerFood = [
    {
        name: 'Greek Salad',
        image: greekSalad,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: '12.99'
    },
    {
        name: 'Bruchetta',
        image: bruchetta,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
        price: '5.99'
    },
    {
        name: 'Lemon Dessert',
        image: lemon,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
        price: '5.00'
    }
]

const LandingPage = ({ ...boxProps }) => {
  return (
    <Container sx={{marginTop: 6, marginBottom: 2}}>
       <Grid container spacing={2} columns={{xs:6,sm:12}}>
            <Grid item xs={6} sx={{display: "flex", justifyContent: "center"}}>
                <Text paddingLeft={1} fontSize="2.5rem" fontWeight="bold" Text="This weeks specials">
                </Text>
            </Grid>
            <Grid item xs={6} sx={{display: "block", justifyContent: "center"}}>
                <Box paddingTop={2} sx={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" sx={{ color:"black", backgroundColor: "#F4CE14"}}>Menu</Button>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2} columns={{xs:4, sm:8, md:12}}>
            {
                headerFood.map((n) => {
                    return (
                        <Grid item xs={4}>
                            <CardStyle name={n.name} image={n.image} description={n.description} price={n.price}>
                            </CardStyle>
                        </Grid>
                    )
                })
            }
        </Grid>
    </Container>
  );
};

export default LandingPage;
