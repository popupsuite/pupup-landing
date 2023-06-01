import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import bikoHeadshot from '../../assets/BikoHeadshot.png';
import enchantaHeadshot from '../../assets/EnchantaHeadshot.png';
import frankHeadshot from '../../assets/FrankHeadshot.png';
import robHeadshot from '../../assets/RobHeadshot.png';
import benardHeadshot from '../../assets/BenardHeadshot.jpeg';

const Team = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Team
        </Typography>
        <Typography fontWeight={700} variant={'h3'}>
          Meet the experts
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {[
          {
            name: 'Biko Baker',
            title: 'Chief Executive Officer',
            avatar: bikoHeadshot
          },
          {
            name: 'Enchanta Jackson',
            title: 'Product Manager',
            avatar: enchantaHeadshot
          },
          {
            name: 'Rob Williams',
            title: 'Business Development',
            avatar: robHeadshot
          },
          {
            name: 'Frank Masby',
            title: 'Chief Technology Officer',
            avatar: frankHeadshot
          },
          {
            name: 'Benard Dory',
            title: 'Product Manager',
            avatar: benardHeadshot
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <ListItem component="div" disableGutters data-aos={'fade-up'}>
              <ListItemAvatar>
                <Box
                  component={Avatar}
                  width={120}
                  height={120}
                  src={item.avatar}
                  marginRight={2}
                />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.title} />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
