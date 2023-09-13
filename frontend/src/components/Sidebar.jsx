import * as React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const Sidebar = ({ theme }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Box
        sx={{
          width: '50%',
          maxWidth: 200,
          bgcolor: '#bee6b8',
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="employees" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="admins" />
          </ListItemButton>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="settings" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
          >
            <ListItemText primary="attendance" />
          </ListItemButton>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
