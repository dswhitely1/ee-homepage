import {
  Content,
  Container,
  Section,
  GridContainer,
  GridItem,
  LandingPageButtons,
  Image,
} from '../../components';
import { useState } from 'react';
import residential from '../../assets/erik-mclean-1117932-unsplash.jpg';
import commercial from '../../assets/osama-saeed-1433239-unsplash.jpg';
import { GridSize } from '@material-ui/core';

interface IColumns {
  xs: GridSize;
  sm: GridSize;
  imageSrc: string;
  imageAlt: string;
  content: string;
}

export const Services = () => {
  const [columns] = useState<IColumns[]>([
    {
      xs: 12,
      sm: 6,
      imageSrc: residential,
      imageAlt: 'Residential',
      content:
        'Emergency Electric, Inc can assist with any type of residential renovation, whether you are building an extension to your home or installing recessed lights in your condo.',
    },
    {
      xs: 12,
      sm: 6,
      imageSrc: commercial,
      imageAlt: 'Commercial',
      content:
        'Emergency Electric, Inc offers a variety of commercial services, by our commercial electrical contractors.',
    },
  ]);
  return (
    <Section id="services" inverted>
      <Container>
        <Content content="Services" variant="h3" titleContent />
        <Content content="We Specialize In" variant="h2" spacing />
        <GridContainer>
          {columns.map(({ xs, sm, imageAlt, imageSrc, content }, key) => (
            <GridItem xs={xs} sm={sm} key={key}>
              <GridContainer>
                <GridItem xs={12} sm={10} center>
                  <Image src={imageSrc} alt={imageAlt} />
                  <Content content={imageAlt} variant="h4" spacing />
                  <Content paragraph left content={content} spacing />
                </GridItem>
              </GridContainer>
            </GridItem>
          ))}
        </GridContainer>
        <LandingPageButtons
          buttons={[
            {
              color: 'secondary',
              link: '#testimonials',
              desc: 'What Others Say',
            },
          ]}
          scrollButton
          scrollButtonColor="secondary"
        />
      </Container>
    </Section>
  );
};

export default Services;
