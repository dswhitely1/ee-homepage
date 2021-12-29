import { Paper, PaperProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
}));

export const Background = ({ children, className, ...rest }: PaperProps) => {
  const classes = useStyles();
  const backgroundClasses = cx({
    [classes.paper]: true,
    [className as string]: !!className,
  });

  return (
    <Paper className={backgroundClasses} {...rest}>
      {children}
    </Paper>
  );
};

export default Background;
