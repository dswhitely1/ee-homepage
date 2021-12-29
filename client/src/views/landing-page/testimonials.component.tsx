import { useState } from 'react';
import { GridSize } from '@material-ui/core';
import {
  Section,
  Container,
  Content,
  Background,
  GridContainer,
  GridItem,
  LandingPageButtons,
} from '../../components';

interface ITestimonialColumns {
  xs: GridSize;
  sm: GridSize;
  testimonial: string;
  author: string;
}

export const Testimonials = () => {
  const [testimonials] = useState<ITestimonialColumns[]>([
    {
      xs: 12,
      sm: 6,
      testimonial:
        '`They were very efficient, prompt and courteous. They even did a little bit extra that they really did not have to do. They were quick. I have used them twice now.`',
      author: 'Arlene W.',
    },
    {
      xs: 12,
      sm: 6,
      testimonial:
        '`They do very good electrical work. They are friendly, conscientious about their work, arrive on time, charge fair, prices and make good recommendations about our electrical service. I liked their personal touch, and helpful, attentive, interest. I have used them twice and would use them again.`',
      author: 'John Robertson',
    },
  ]);

  return (
    <Section id="testimonials">
      <Container>
        <Content content="Testimonials" variant="h3" titleContent />
        <Content content="Hear from our customers" variant="h2" spacing />
        <GridContainer alignItems="flex-end">
          {testimonials.map(({ xs, sm, testimonial, author }, key) => (
            <GridItem xs={xs} sm={sm} key={key} bottomSpacing>
              <GridContainer>
                <GridItem xs={12} sm={11} center>
                  <Background>
                    <Content content={testimonial} paragraph left />
                    <cite>{author}</cite>
                  </Background>
                </GridItem>
              </GridContainer>
            </GridItem>
          ))}
        </GridContainer>
        <LandingPageButtons
          buttons={[{ color: 'primary', link: '#goals', desc: 'Our Goals' }]}
          scrollButton
          scrollButtonColor="primary"
        />
      </Container>
    </Section>
  );
};

export default Testimonials;
