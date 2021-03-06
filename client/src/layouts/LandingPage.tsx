import { NavbarBase, LandingPageButtons } from '../components';
import { useState } from 'react';
import { ButtonProps } from '@material-ui/core';
import {
  Footer,
  PhoneNumber,
  Header,
  About,
  Services,
  Testimonials,
  Goals,
  Contact,
} from '../views';

interface IButtonProps {
  color: ButtonProps['color'];
  variant?: ButtonProps['variant'];
  link: string;
  desc: string;
}

export const LandingPage = () => {
  const [sections] = useState<string[]>([
    'About',
    'Services',
    'Testimonials',
    'Goals',
    'Contact',
  ]);
  const [buttons] = useState<IButtonProps[]>(() =>
    sections.map((section) => ({
      color: 'inherit',
      variant: 'text',
      link: `#${section.toLowerCase()}`,
      desc: section,
    })),
  );
  return (
    <>
      <NavbarBase
        buttons={<LandingPageButtons buttons={buttons} />}
        drawerButtons={<LandingPageButtons buttons={buttons} drawerButtons />}
      />
      <div>
        <PhoneNumber />
        <Header />
        <About />
        <Services />
        <Testimonials />
        <Goals />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
