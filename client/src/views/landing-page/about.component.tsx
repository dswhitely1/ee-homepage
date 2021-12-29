import {
  Section,
  GridContainer,
  Container,
  GridItem,
  Content,
  LandingPageButtons,
} from "../../components";

export const About = () => (
  <Section id="about">
    <Container>
      <GridContainer>
        <GridItem xs={12} sm={10} center>
          <Content variant="h2" spacing content="Why Choose Us" />
          <Content
            paragraph
            left
            header
            spacing
            content="With many years of experience in the electrical industry, we take pride in our professionalism, punctuality, and customer service."
          />
          <Content
            paragraph
            left
            content="Our primary measure of success is customer satisfaction. We define customers as employees, partners and clients. Our intent is to earn and maintain the respect and trust of everyone we come in contact with when representing Emergency Electric, Inc."
          />
          <Content
            paragraph
            left
            content="We believe in a personal touch to making ourselves known in the market. Referral and repeat business is important to us. We want every customer to be 100% satisfied with our service and work. We are confident that we meet this goal and that is why we offer a 100% customer satisfaction guarantee."
          />
        </GridItem>
      </GridContainer>
      <LandingPageButtons
        buttons={[
          { color: "primary", link: "#services", desc: "What We Offer" },
        ]}
        scrollButton
        scrollButtonColor="primary"
      />
    </Container>
  </Section>
);

export default About;
