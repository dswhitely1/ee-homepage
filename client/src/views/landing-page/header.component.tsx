import { Section, Container, Content } from "../../components";
import { Hidden, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 700,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [bulletPoints] = useState<string[]>([
    "24 Hour Service",
    "Licensed and Insured",
    "Residential and Commercial",
  ]);
  return (
    <Section header>
      <Container header>
        <Content
          variant="h1"
          color="primary"
          className={classes.title}
          content="Emergency Electric INC"
          spacing
        />
        <Hidden mdDown>
          <Content
            content={bulletPoints.join(" | ")}
            spacing
            variant="h4"
            color="primary"
          />
        </Hidden>
        <Hidden lgUp>
          {bulletPoints.map((text, key) => (
            <Content
              key={key}
              content={text}
              color="primary"
              spacing={key === bulletPoints.length - 1}
            />
          ))}
        </Hidden>
        <Content
          spacing
          content="(502) 727-4823"
          color="primary"
          variant="h4"
        />
        <Button
          color="primary"
          variant="contained"
          component={RouterLink}
          to="/application"
        >
          Apply Now
        </Button>
      </Container>
    </Section>
  );
};

export default Header;
