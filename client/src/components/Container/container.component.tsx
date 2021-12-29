import { Container as MUIContainer, ContainerProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cx from "classnames";
import { PropsWithChildren } from "react";

interface IContainerProps extends ContainerProps {
  header?: boolean;
}

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "85vh",
    [theme.breakpoints.up("md")]: {
      height: "auto",
    },
  },
}));

export const Container = ({
  header,
  children,
  className,
  ...rest
}: PropsWithChildren<IContainerProps>) => {
  const classes = useStyles();
  const containerClasses = cx({
    [classes.container]: true,
    [classes.header]: header,
    [className as string]: !!className,
  });
  return (
    <MUIContainer className={containerClasses} {...rest}>
      {children}
    </MUIContainer>
  );
};

export default Container;
