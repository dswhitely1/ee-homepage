import { MouseEvent } from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  listItem: {
    "&:hover,&:focus": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

interface ILandingPageDrawerButtonProps {
  link: string;
  desc: string;
  smoothScroll: (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>,
    target: string
  ) => void;
}

export const LandingPageDrawerButton = ({
  link,
  desc,
  smoothScroll,
}: ILandingPageDrawerButtonProps) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      component={RouterLink}
      to={link}
      className={classes.listItem}
    >
      <ListItemText
        inset
        primary={desc}
        onClick={(e: MouseEvent<HTMLDivElement>) =>
          smoothScroll(e, link.replace("#", ""))
        }
      />
    </ListItem>
  );
};

export default LandingPageDrawerButton;
