import * as React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Container, Typography, Button } from "@mui/material";
import  foodphoto from "../images/restauranfood.jpg"
import Text from "./Text";


const LandingSection = ({ ...boxProps }) => {
  return (
    <Container maxWidth='100' maxHeight={250} sx={{backgroundColor: '#495E57', marginTop: 2, paddingBottom: 3}}>
        <Grid container spacing={2} columns={{xs:6,sm:12}}>
            <Grid item xs={6}>
                <Text paddingLeft="6rem" color= "#F4CE14" fontSize="3.6rem" fontWeight="lighter" Text="Little Lemon">
                </Text>
                <Text paddingLeft="6rem" color= "#EDEFEE" fontSize="2rem" fontWeight="lighter" Text="Chicago">
                </Text>
                <Text paddingLeft="6rem" color= "#EDEFEE" fontSize="1rem" Text="
                We are family owned Mediterrena resturant,focused on traditional
                recipes served with a modern twist.">
                </Text>
                <Box paddingTop={2} sx={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" sx={{ color:"black", backgroundColor: "#F4CE14"}}>Reserve a Table</Button>
                </Box>
            </Grid>
            <Grid item xs={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center"}}>
                <Box component="img"
                        sx={{ m: 'auto', display: "flex", justifyContent: "center", borderRadius: 5, position: "absolute" }}
                        alt="food"
                        src={foodphoto}
                        maxHeight={300}
                        >
                </Box>
            </Grid>
        </Grid>
    </Container>
  );
};

export default LandingSection;
