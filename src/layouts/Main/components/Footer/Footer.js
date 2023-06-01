import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box
          display={'flex'}
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={24}
          width={35}
        >
          {/* <WebbeeLogo height={'100%'} width={'100%'} /> */}
        </Box>

      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom
      >
        &copy; Popup 2023 All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}
      >
        When you visit or interact with our sites, services or tools, we or our
        authorised service providers may use cookies for storing information to
        help provide you with a better, faster and safer experience.
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
