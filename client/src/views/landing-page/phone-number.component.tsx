import { Tooltip, IconButton } from "@material-ui/core";
import { PhoneEnabled } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  phoneNumber: {
    position: "fixed",
    borderRadius: "50%",
    width: 50,
    height: "auto",
    bottom: 15,
    right: 15,
    zIndex: 2000,
    backgroundColor: theme.palette.background.default,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.common.white,
    },
  },
}));

export const PhoneNumber = () => {
  const classes = useStyles();
  return (
    <Tooltip title="Have an emergency, click to call">
      <IconButton
        color="primary"
        href="tel:5027274823"
        className={classes.phoneNumber}
      >
        <PhoneEnabled />
      </IconButton>
    </Tooltip>
  );
};

export default PhoneNumber;
