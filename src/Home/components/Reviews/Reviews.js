import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Reviews = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'secondary'}
      >
        Our work
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        data-aos={'fade-up'}
      >
        Don't take our word for it
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        data-aos={'fade-up'}
      >
        See what some of our amazing clients have to say about Popup!
      </Typography>
    </Box>
  );

  return (
    <Box>
      <Grid item xs={12} md={12} marginBottom={10}>
        <GridItemHeadlineBlock />
      </Grid>
      <Grid container spacing={2}>
        {[
          {
            feedback:
              'PopUp.Pro helped me reach and engage my 15,000 person audience in just a few moments.',
            name: 'Khari Mosely',
            title: 'Pittsburgh',
          },
          {
            feedback:
              '11% of the people we reached using PopUp.Pro scheduled interviews in minutes of being contacted.',
            name: 'Cielo Talent',
            title: 'Brookfield, Wisconsin'
          },
          {
            feedback:
              'PopUp.Pro helped us identify over 10k new customers.',
            name: 'Chary Julie',
            title: 'CEO'
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={'100%'}
              height={'100%'}
              data-aos={'fade-up'}
              component={Card}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={0}
            >
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
              >
                <Box marginBottom={1} display={'flex'}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Box key={item} color={theme.palette.secondary.main}>
                      <svg
                        width={18}
                        height={18}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </Box>
                  ))}
                </Box>
                <Typography align={'left'} color="textSecondary">
                  {item.feedback}
                </Typography>
              </Box>
              {/* <Box flexGrow={1} /> */}
              <ListItemText
                sx={{ marginLeft: 2 }}
                primary={item.name}
                secondary={item.title}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
