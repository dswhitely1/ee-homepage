import { Grid, GridProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";

interface IGridItemProps extends GridProps {
  center?: boolean;
  bottomSpacing?: boolean;
}

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(0, 2),
  },
  center: {
    margin: "0 auto",
  },
  spacing: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
}));

export const GridItem = ({
  children,
  className,
  center,
  bottomSpacing,
  ...rest
}: IGridItemProps) => {
  const classes = useStyles();
  const gridItemClasses = cx({
    [classes.grid]: true,
    [classes.center]: center,
    [classes.spacing]: bottomSpacing,
    [className as string]: !!className,
  });

  return (
    <Grid item className={gridItemClasses} {...rest}>
      {children}
    </Grid>
  );
};

export default GridItem;
