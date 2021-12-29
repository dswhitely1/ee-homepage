import { makeStyles } from '@material-ui/core/styles';
import { Container, Content, GridContainer, GridItem } from '../../components';
import { useState } from 'react';
import { GridSize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(4, 0, 0),
    backgroundColor: '#222222',
    color: '#b48a66',
  },
}));

interface IContent {
  text: string;
  left?: boolean;
  spacing?: boolean;
}

interface IFooterContent {
  xs: GridSize;
  sm: GridSize;
  content: IContent[];
}

export const Footer = () => {
  const [footerContent] = useState<IFooterContent[]>([
    {
      xs: 12,
      sm: 4,
      content: [
        {
          text: 'Emergency Electric Inc',
          left: true,
        },
        {
          text: '7520 E. Pennington St. NE',
          left: true,
        },
        {
          text: 'Lanesville, IN  47136',
          left: true,
          spacing: true,
        },
      ],
    },
    {
      xs: 12,
      sm: 4,
      content: [
        {
          text: 'Office: (812) 952-6003',
          left: true,
        },
        {
          text: 'Emergency: (812) 727-4823',
          left: true,
          spacing: true,
        },
        {
          text: 'Office Hours',
          left: true,
        },
        {
          text: 'Monday - Friday, 8AM - 4PM',
          left: true,
          spacing: true,
        },
      ],
    },
    {
      xs: 12,
      sm: 4,
      content: [
        {
          text: '24 Hour Service',
          left: true,
        },
        {
          text: 'Licensed & Insured',
          left: true,
        },
        {
          text: 'Residential and Commercial',
          left: true,
          spacing: true,
        },
      ],
    },
  ]);
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <GridContainer>
          {footerContent.map(({ xs, sm, content }, key) => (
            <GridItem xs={xs} sm={sm} key={key}>
              {content.map(({ text, left, spacing }, key2) => (
                <Content
                  content={text}
                  left={left}
                  spacing={spacing}
                  key={key2}
                />
              ))}
            </GridItem>
          ))}
        </GridContainer>
        <Content
          content={`Copyright ${new Date().getFullYear()}, All Rights Reserved`}
        />
      </Container>
    </footer>
  );
};

export default Footer;
