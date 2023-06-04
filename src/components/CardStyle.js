import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Icon } from '@mui/material';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardStyle({ ...props }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 225, backgroundColor: '#EDEFEE', display: 'flex', flexDirection: 'column', height:'100%'}}>
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="food"
      />
      <CardContent>
        <Box display={'flex'}  >
          <Typography color="black" justifyContent={'start'} m={'auto'}>
            {props.name}
          </Typography>
          <Typography m={'auto'} color="#EE9972" fontSize={'0.75rem'} justifyContent={'end'}>
            $ {props.price}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Button sx={{color: 'black', paddingTop: 2}}>Order a delivery <DeliveryDiningIcon></DeliveryDiningIcon></Button>      
      </CardContent>

    </Card>
  );
}
