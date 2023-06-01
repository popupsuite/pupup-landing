import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CloudHostingIllustration from 'svg/illustrations/CloudHosting';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box>
        <Grid
          container
          spacing={4}
          flexDirection={isMd ? 'row' : 'column-reverse'}
        >
          <Grid item xs={12} md={6}>
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={2}>
                <Typography
                  variant="h2"
                  component={'h2'}
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Bridging Cultures
                  <br />
                  <Typography
                    variant="h3"
                    component={'span'}
                    color="secondary"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    Building Connections
                  </Typography>
                </Typography>
                {/* <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Connections
                </Typography> */}
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h6" component="p" color="textSecondary">
                  Lead generation  software designed  <br />
                  with a people-centered approach
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <Box
                  component={Button}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  href={'#getconnected'}
                >
                  Get Connected
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            justifyContent={'center'}
            xs={12}
            md={6}
            data-aos={isMd ? 'fade-left' : 'fade-up'}
          >
            <Box
              height={'100%'}
              width={'100%'}
              maxWidth={{ xs: 500, md: '100%' }}
            >
              <CloudHostingIllustration width={'100%'} height={'100%'} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box component={Divider} marginY={4} /> */}
      <Box
        display="flex"
        flexDirection={'column'}
        justifyContent={'center'}
        maxWidth={800}
        margin={'0 auto'}
        data-aos={'fade-up'}
      >

      </Box>
    </Box>
  );
};

export default Hero;
