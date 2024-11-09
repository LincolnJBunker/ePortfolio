// import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, 
        Drawer, 
        CssBaseline, 
        Toolbar, 
        Divider, 
        List, 
        ListItem, 
        ListItemButton,
        Tooltip,
        Button
    } from '@mui/material';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem>
                <ListItemButton onClick={() => navigate('/')}>
                    Home
                </ListItemButton>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemButton onClick={() => navigate('/about')}>
                    About Me
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem>
                <Tooltip
                    title={
                        <Box>
                            <Button></Button>
                        </Box>
                    }
                >
                    <>
                    math
                    
                    </>
                </Tooltip>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
