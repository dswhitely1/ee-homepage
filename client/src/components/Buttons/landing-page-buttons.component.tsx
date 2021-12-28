import { ButtonProps, List } from "@material-ui/core";
import {
  LandingPageDrawerButton,
  LandingPageScrollButton,
  LandingPageButton,
} from "./";
import { MouseEvent, ReactNode } from "react";

interface IButtonProps {
  color: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  link: string;
  desc: string;
}

interface ILandingPageButtonsProps {
  buttons: IButtonProps[];
  formButtons?: ReactNode;
  scrollButton?: boolean;
  scrollButtonColor?: ButtonProps["color"];
  drawerButtons?: boolean;
}

export const LandingPageButtons = ({
  buttons,
  drawerButtons,
  formButtons,
  scrollButton,
  scrollButtonColor,
}: ILandingPageButtonsProps) => {
  const easeInOutQuad = (
    t: number,
    b: number,
    c: number,
    d: number
  ): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollGo = (element: HTMLElement, to: number, duration: number) => {
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = function () {
      currentTime += increment;
      element.scrollTop = easeInOutQuad(currentTime, start, change, duration);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  const smoothScroll = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>,
    target: string
  ) => {
    e.preventDefault();
    const targetScroll = document.getElementById(target);
    if (!targetScroll) return;
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  };

  if (drawerButtons) {
    return (
      <List>
        {buttons.map(({ link, desc }, key) => (
          <LandingPageDrawerButton
            link={link}
            desc={desc}
            smoothScroll={smoothScroll}
            key={key}
          />
        ))}
      </List>
    );
  }

  return (
    <>
      {buttons.map(({ color, link, desc, variant }, key) => (
        <LandingPageButton
          color={color}
          link={link}
          desc={desc}
          smoothScroll={smoothScroll}
          variant={variant}
          key={key}
        />
      ))}
      {formButtons}
      {scrollButton && (
        <LandingPageScrollButton
          color={scrollButtonColor}
          smoothScroll={smoothScroll}
        />
      )}
    </>
  );
};

export default LandingPageButtons;
