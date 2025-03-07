import './topbar.css'
import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { DensityMedium, Email, Facebook, LinkedIn, Phone, WhatsApp } from "@mui/icons-material"
import { NavsLink } from '../../staticData';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Topbar = () => {
  const [state, setState] = useState({ top: false, left: false, bottom: false, right: false,});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >  
      <div className="sidebar_logo">
          <div className="sidebar_logo_desc">
              <img src='/assets/logo.png' alt='TANG TECH' />
          </div>
      </div>

      <Divider />

      <List>
          {NavsLink.slice(0, 4).map((link) => (
              <ListItem key={link.id} disablePadding>
                  <Link to={`${link.path}`} className='sidebar-links'>
                      <ListItemButton  sx={{width: "auto"}} >
                          <ListItemIcon>
                            {link.icon}
                          </ListItemIcon>
                          <ListItemText sx={{fontSize: 15,}}>{link.title}</ListItemText>
                      </ListItemButton>
                  </Link>
              </ListItem>
          ))}
      </List>

      <Divider />

      <List>
          {NavsLink.slice(4, 8).map((link) => (
              <ListItem key={link.id} disablePadding>
                  <Link to={`${link.path}`} className='sidebar-links'>
                      <ListItemButton  sx={{width: "auto"}} >
                          <ListItemIcon>
                            {link.icon}
                          </ListItemIcon>
                          <ListItemText sx={{fontSize: 15,}}>{link.title}</ListItemText>
                      </ListItemButton>
                  </Link>
              </ListItem>
          ))}
      </List>
    </Box>
);

  return (
    <div className="topbar-comp">
        <div className="topbar-wrapper">
            <div className="topbar-top">
                <div className="topbar-top-left">
                    <div className="topbar-top-item">
                        <Phone sx={{ fontSize: { xs: 20, sm: 25, md: 25, lg: 25, xl: 25 } }} />
                        <a href="tel: +255659801321" className='link-main'>
                          +255659801321                          
                        </a>
                    </div>
                    <div className="topbar-top-item">
                        <Email sx={{ fontSize: { xs: 20, sm: 25, md: 25, lg: 25, xl: 25 } }} />
                        <a href='mailto:tangtech@engineering.com' className='link-main'>
                          info@tangtech.com
                        </a>
                    </div>
                </div>

                <div className="topbar-top-right">
                  <div className="topbar-icon">
                    <LinkedIn sx={{color: "#0063C1", fontSize: 28}} />
                  </div>
                  <div className="topbar-icon">
                    <WhatsApp sx={{color: "green", fontSize: 28}} />
                  </div>
                  <div className="topbar-icon">
                    <Facebook sx={{color: "#38529A", fontSize: 28}} />
                  </div>
                </div>
            </div>

            <div className="topbar-below">
              <div className="topbar-logo">
                <Link to='/' className='link-main'>
                  <img src='/assets/logo.png' alt='TANG TECH' />
                </Link>
              </div>
              <div className="topbar-links">
                {NavsLink.map((link) => (
                  <Link to={`${link.path}`} className='link-main'>
                    <p className='underline-effect'>{link.title}</p>
                  </Link>
                ))}
              </div>
              <div className="topbar-drawer">
                <div className="topbar-drawer-icons">
                <div className="topbar-icon">
                    <LinkedIn sx={{color: "#0063C1", fontSize: 30}} />
                  </div>
                  <div className="topbar-icon">
                    <WhatsApp sx={{color: "green", fontSize: 30}} />
                  </div>
                  <div className="topbar-icon">
                    <Facebook sx={{color: "#38529A", fontSize: 30}} />
                  </div>
                </div>

                {['left'].map((anchor) => (
                    <React.Fragment key={anchor} >
                        <DensityMedium sx={{fontSize: 30,}} onClick={toggleDrawer(anchor, true)} />   
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar