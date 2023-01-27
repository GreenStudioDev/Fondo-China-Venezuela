import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import InboxIcon from '@mui/icons-material/Inbox';

export function CompanySection() {
  return (
    <>
      <h1>Empresas</h1>
      <p>Busca o selecciona una empresa de la lista</p>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
