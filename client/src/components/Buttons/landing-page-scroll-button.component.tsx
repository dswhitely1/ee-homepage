import { IconButton, ButtonProps } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import { MouseEvent } from "react";
import { Link as RouterLink } from "react-router-dom";

interface ILandingPageScrollButtonProps {
  color: ButtonProps["color"];
  smoothScroll: (
    e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    target: string
  ) => void;
}

export const LandingPageScrollButton = ({
  color,
  smoothScroll,
}: ILandingPageScrollButtonProps) => (
  <IconButton
    aria-label="Scroll To Top"
    color={color}
    component={RouterLink}
    onClick={(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
      smoothScroll(e, "root")
    }
    to="#root"
  >
    <ArrowUpward />
  </IconButton>
);

export default LandingPageScrollButton;
