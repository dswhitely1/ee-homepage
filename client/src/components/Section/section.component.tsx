import { PropsWithChildren } from "react";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
import headerImage from "../../assets/electrical-electrician-electricity-1435183.jpg";

interface ISectionProps {
  className?: string;
  id?: string;
  header?: boolean;
  inverted?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(16, 0),
  },
  inverted: {
    backgroundColor: "#351a1a",
    color: "#b48a66",
  },
  header: {
    minHeight: theme.spacing(60),
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 700,
    background: `linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0, rgba(255,255,255, 0.1) 100%), url(${headerImage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
}));

export const Section = ({
  className,
  header,
  inverted,
  children,
  ...rest
}: PropsWithChildren<ISectionProps>) => {
  const classes = useStyles();

  const sectionClasses = cx({
    [classes.root]: true,
    [classes.header]: header,
    [classes.inverted]: inverted,
    [className as string]: !!className,
  });

  return (
    <section className={sectionClasses} {...rest}>
      {children}
    </section>
  );
};

export default Section;
