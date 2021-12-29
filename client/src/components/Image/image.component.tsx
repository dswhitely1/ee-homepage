import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';

interface IImageProps {
  className?: string;
  src: string;
  alt: string;
}

const useStyles = makeStyles((theme) => ({
  image: {
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.common.white,
    border: '1px solid #dee236',
    borderRadius: theme.spacing(2),
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    margin: `${theme.spacing(2)}px auto`,
  },
}));

export const Image = ({ className, ...rest }: IImageProps) => {
  const classes = useStyles();
  const imageClasses = cx({
    [classes.image]: true,
    [className as string]: !!className,
  });
  return <img className={imageClasses} {...rest} />;
};

export default Image;
