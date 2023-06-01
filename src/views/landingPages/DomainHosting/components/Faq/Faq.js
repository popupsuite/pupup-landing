import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import textGraphic from '../../assets/textGraphic.png';

const Faq = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box display={'flex'}>
        <Box height={'100%'} width={'100%'}   data-aos={'fade-up'}>
          <img src={textGraphic} width={'100%'} />
        </Box>
      </Box>
      <Box marginBottom={4} marginTop={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Frequently Asked Questions
        </Box>
      </Box>
      <Box>
        {[
          {
            title: 'Why Lead Generation?',
            subtitle:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          },
          {
            title: 'What Kind of Messages Can I Send Using PopUp.pro',
            subtitle:
              'Email, SMS, WhatsApp, Chatbot, GIF, Voice and, Video.',
          },
          {
            title: 'What’s the contact information for support?',
            subtitle:
              'Submit contact form!',
          }
        ].map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={'medium'}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
