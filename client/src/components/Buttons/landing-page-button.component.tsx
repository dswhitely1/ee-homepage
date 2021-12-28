import { Button, ButtonProps } from "@material-ui/core";
import { MouseEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

interface ILandingPageButtonProps {
  color: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  link: string;
  desc: string;
  smoothScroll: (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    target: string
  ) => void;
}

export const LandingPageButton = ({
  color,
  link,
  desc,
  smoothScroll,
  variant = "contained",
}: ILandingPageButtonProps) => {
  const linkTarget = link.replace("#", "");
  return (
    <Button
      color={color}
      variant={variant}
      component={RouterLink}
      to={link}
      onClick={(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
        smoothScroll(e, linkTarget)
      }
    >
      {desc}
    </Button>
  );
};

export default LandingPageButton;
