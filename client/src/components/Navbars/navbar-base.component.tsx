import { ReactNode, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

interface INavbarBaseProps {
  buttons: ReactNode;
  drawerButtons: ReactNode;
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: 240,
  },
}));

export const NavbarBase = ({ buttons, drawerButtons }: INavbarBaseProps) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleDrawerClick = () => setIsOpen(!isOpen);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Emergency Electric Inc
          </Typography>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerClick}
              edge="start"
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Hidden smDown>{buttons}</Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isOpen}
        variant="temporary"
        anchor="right"
        onClick={handleDrawerClick}
        classes={{ paper: classes.drawerPaper }}
      >
        {drawerButtons}
      </Drawer>
    </>
  );
};

export default NavbarBase;
