import { Typography, TypographyProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";

interface IContentProps extends TypographyProps {
  spacing?: boolean;
  header?: boolean;
  left?: boolean;
  titleContent?: boolean;
  content: string;
}

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(4),
    },
  },
  header: {
    fontWeight: "bolder",
  },
  left: {
    textAlign: "left",
  },
  titleContent: {
    margin: theme.spacing(2, 0),
    textTransform: "uppercase",
  },
}));

export const Content = ({
  spacing,
  header,
  left,
  className,
  content,
  titleContent,
  ...rest
}: IContentProps) => {
  const classes = useStyles();
  const contentClasses = cx({
    [classes.spacing]: spacing,
    [classes.header]: header,
    [classes.left]: left,
    [classes.titleContent]: titleContent,
    [className as string]: !!className,
  });

  return (
    <Typography className={contentClasses} {...rest}>
      {content}
    </Typography>
  );
};

export default Content;
