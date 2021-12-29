import {
  Section,
  Container,
  Content,
  GridContainer,
  GridItem,
  LandingPageButtons,
} from '../../components';

export const Goals = () => (
  <Section id="goals" inverted>
    <Container>
      <GridContainer>
        <GridItem xs={12} sm={10} center>
          <Content variant="h2" content="Our Goals" spacing />
          <Content
            paragraph
            spacing
            content="We are committed to excellence. Our goal is to exceed your expectations. Using our years of experience and expertise and by providing a dynamic and skilled team, we will ensure your projects are a complete success. Our primary measure of success is customer satisfaction. We define customers as employees, partners and clients. Our intent is to earn and maintain the respect and trust of everyone we come in contact with when representing Emergency Electric Inc."
            left
          />
        </GridItem>
      </GridContainer>
      <LandingPageButtons
        buttons={[{ color: 'secondary', desc: 'Contact Us', link: '#contact' }]}
        scrollButton
        scrollButtonColor="secondary"
      />
    </Container>
  </Section>
);

export default Goals;
