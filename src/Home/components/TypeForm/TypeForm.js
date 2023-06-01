import Box from '@mui/material/Box';
import { Widget } from '@typeform/embed-react';

const TypeForm = () => {

  const TypeFormComponent = () => <Widget id="AnjbjwCc" style={{ width: '100%', height: '500px' }} />;

  return (
    <Box width={1} height="500px" display="flex" alignItems="center">
      <TypeFormComponent />
    </Box>
  );
};

export default TypeForm;
