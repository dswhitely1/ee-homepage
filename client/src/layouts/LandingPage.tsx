import { NavbarBase } from "../components";
import { LandingPageButtons } from "../components/Buttons";
import { useState } from "react";
import { ButtonProps } from "@material-ui/core";

interface IButtonProps {
  color: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  link: string;
  desc: string;
}

export const LandingPage = () => {
  const [sections] = useState<string[]>([
    "About",
    "Services",
    "Testimonials",
    "Goals",
    "Contact",
  ]);
  const [buttons] = useState<IButtonProps[]>(() =>
    sections.map((section) => ({
      color: "inherit",
      variant: "text",
      link: `${section}.toLowerCase()`,
      desc: section,
    }))
  );
  return (
    <>
      <NavbarBase
        buttons={<LandingPageButtons buttons={buttons} />}
        drawerButtons={<LandingPageButtons buttons={buttons} drawerButtons />}
      />
    </>
  );
};

export default LandingPage;
