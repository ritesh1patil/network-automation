import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoHome } from "react-icons/io5";
import { SiSitecore } from "react-icons/si";
import { BsBuildingsFill } from "react-icons/bs";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import DevicesIcon from '@mui/icons-material/Devices';
import Access from './components/Access';
import Core from './components/Core';
import Infra from './components/Infra';
import FloatingMenu from './components/FloatingMenu';


const drawerWidth = 150;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2),
  borderRadius: '20px', 
  boxShadow: '0px 8px 16px rgba(0, 123, 255, 0.3)', 
  position: 'fixed',
  bottom: theme.spacing(1),
  left: theme.spacing(11), 
  right: theme.spacing(2), 
  zIndex: theme.zIndex.drawer + 1, 
  width: 'calc(100% - 111px)',
}));

const slideUpKeyframes = `
  @keyframes slideUp {
    0% {
      transform: translateY(5);
      opacity: 5;
    }
    100% {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
`;

const slideUpAnimation = {
  animation: 'slideUp 2s linear infinite',
};

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options);
}

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("Access");
  const [footerText, setFooterText] = useState("Recent Release");

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (item) => {
    setMenudata(item);
  };

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setFooterText((prevText) => (prevText === "Recent Release" ? "Recent Release" : "Recent Release"));
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <style>{slideUpKeyframes}</style> 
      <Box sx={{ display: 'flex'  }}>
        <CssBaseline />
        <AppBar position="fixed" elevation={4} sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => { setOpen(!open) }}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              <img src="./icons/jio.png" height={40} alt='Jio Logo' style={{ margin: '0 auto', display: 'block' }} />
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <IconButton
                color="inherit"
                aria-label="profile"
                edge="end"
              >
                <AccountCircleIcon sx={{width:40, height:40, color:'green'}}/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Access")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <IoHome style={{ fontSize: '25px', color: '#008CFF' }}/>
                </ListItemIcon>
                <ListItemText primary="Access" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Core")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <SiSitecore  style={{ fontSize: '25px' , color: 'gray'}}/>
                </ListItemIcon>
                <ListItemText primary="Core" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Infra")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <BsBuildingsFill style={{ fontSize: '25px' , color: 'gray' }}/>
                </ListItemIcon>
                <ListItemText primary="Infra" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, mb: 8 }}>
          {menudata === 'Access' && <Access />}
          {menudata === 'Core' && <Core />}
          {menudata === 'Infra' && <Infra />}
        </Box>
        <Footer>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EventIcon sx={{ fontSize: 25, marginRight: 1, color: 'orange' }} style={{ fontSize: '35px' }} />
              <Box>
                <Typography variant="body5" sx={{ color: '#666' }}><b>Today's Highlights</b></Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>{formattedDate}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DevicesIcon sx={{ fontSize: 25, marginRight: 1, color: 'blue' }} style={{ fontSize: '35px' }} />
              <Box>
                <Typography variant="body2" sx={{ color: '#666' }}><b>5000</b></Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>Total Devices</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DevicesIcon sx={{ fontSize: 25, marginRight: 1, color: 'green' }}  style={{ fontSize: '35px' }} />
              <Box>
                <Typography variant="body2" sx={{ color: '#666' }}><b>5000</b></Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>Total Config Push</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <div style={{backgroundColor:'blue', padding:'10px ', marginLeft:'9px', marginRight:'-35px', borderRadius:"20px",alignItems: 'center'}} >
                <Typography variant="body2" sx={{ color: 'white', ...slideUpAnimation,fontSize:25,fontFamily:'poppins', fontWeight:'bold',mr:7}} >{footerText }</Typography>
                </div>
              </Box>
            </Box>
          </Box>
        </Footer>
      </Box>
      <FloatingMenu onMenuItemClick={handleMenuItemClick} />
    </>
  );
}
