import React from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { IoHome } from "react-icons/io5";
import { SiSitecore } from "react-icons/si";
import { BsBuildingsFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";

export default function FloatingMenu({ onMenuItemClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    if (item) onMenuItemClick(item);
  };

  return (
    <Box sx={{ position: 'fixed', right: 16, top: '15%', zIndex: 1300 }}>
      <IconButton onClick={handleClick} color="primary" sx={{ bgcolor: '#ffffff', borderRadius: '50%' }}>
      <TfiMenuAlt  style={{color:'darkblue'}}/>

      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
        PaperProps={{
          sx: {
            width: 200,
            maxWidth: '100%',
            bgcolor: 'light',
            boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.3)',
          },
        }}
      >
        <MenuItem onClick={() => handleClose("Access")}>
          <IoHome style={{ fontSize: '20px', marginRight: '8px', fontFamily:'poppins', color:'blue' }} />
          <Typography>Access</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("Core")}>
          <SiSitecore style={{ fontSize: '20px',  marginRight: '8px',color:'green' , fontFamily:'poppins'}} />
          <Typography>Core</Typography>
        </MenuItem>
        <MenuItem onClick={() => handleClose("Infra")}>
          <BsBuildingsFill style={{ fontSize: '20px',  marginRight: '8px',color:'purple', fontFamily:'poppins' }} />
          <Typography>Infra</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
