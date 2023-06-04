import * as React from "react";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Container, Typography } from "@mui/material";
import  foodphoto from "../images/restauranfood.jpg"


const Text = ({  ...boxProps }) => {
  return (
    <Box component="text"
        paddingLeft={boxProps.paddingLeft ?? 0}
            sx={{ m: 'auto', display:{ xs:'flex'} }}>
        <Typography wr color={boxProps.color} fontSize={boxProps.fontSize} fontWeight={boxProps.fontWeight} >{boxProps.Text}</Typography>
    </Box>
  );
};

export default Text;
