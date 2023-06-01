import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from 'common/Container';
import {
  Faq,
  TypeForm,
  Hero,
  Numbers,
  Services,
  Team,
  Reviews
} from './components';
import Clients from './components/Clients/Clients';

const DomainHosting = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position={'relative'} zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Numbers />
      </Container>
      <Container>
        <Clients />
      </Container>
      <Container>
        <Services />
      </Container>
      <Container paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Box bgcolor={theme.palette.primary.main}>
        <Container>
          <TypeForm />
        </Container>
      </Box>
      <Container>
        <Reviews />
      </Container>
      <Container>
        <Team />
      </Container>
      <Container>
        <Faq />
      </Container>
    </Box>
  );
};

DomainHosting.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default DomainHosting;
