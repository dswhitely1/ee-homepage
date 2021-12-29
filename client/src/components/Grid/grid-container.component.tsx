import { Grid, GridProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";

interface IGridContainerProps extends GridProps {}

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: theme.spacing(0, -2),
    width: `calc(100% + ${theme.spacing(4)}px)`,
  },
}));

export const GridContainer = ({
  children,
  className,
  ...rest
}: IGridContainerProps) => {
  const classes = useStyles();

  const gridClasses = cx({
    [classes.grid]: true,
    [className as string]: !!className,
  });

  return (
    <Grid container className={gridClasses} {...rest}>
      {children}
    </Grid>
  );
};

export default GridContainer;
