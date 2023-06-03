import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper, Container, Typography } from '@mui/material';
import Logo from '../images/logo-footer.png';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <footer>
        <Paper sx={{marginTop: 'calc(10% + 60px)',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            width: '100%'
            }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    display: "flex",
                    mb: 2,
                    alignItems: 'center',
                    padding: 1
                }}
                >
                    <Box component="img"
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    alt="Logo"
                    src={Logo}
                    height={45}></Box>
                <Typography variant="caption" color="initial" >
                    Copyright ©2023. Little Lemon Limited
                </Typography>
                </Box>
            </Container>
        </Paper>
    </footer>
  );
}
