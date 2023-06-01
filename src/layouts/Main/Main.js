import PropTypes from 'prop-types';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Container from 'common/Container';
import { pages } from '../navigation';
import {
  Footer,
  Sidebar
} from './components';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

const Main = ({
  children,
  // themeToggler,
  // themeMode,
  // setThemePalette,
  // paletteType,
}) => {
  // const theme = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  // const handleSidebarOpen = () => {
  //   setOpenSidebar(true);
  // };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div>
      <Sidebar
        onClose={handleSidebarClose}
        open={openSidebar}
        variant="temporary"
        pages={pages}
      />
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemePalette: PropTypes.func.isRequired,
  paletteType: PropTypes.string.isRequired,
};

export default Main;
