import { useForm, useRequest } from '../../hooks';
import { useState } from 'react';
import {
  LandingPageButtons,
  CustomInput,
  Section,
  Container,
  GridContainer,
  GridItem,
  ConfirmDialog,
  Content,
} from '../../components';
import { Button, ButtonProps, GridSize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface IFormInputs {
  key: string;
  label: string;
  xs: GridSize;
  sm?: GridSize;
  md?: GridSize;
}

interface IFormValues {
  firstName: string;
  lastName: string;
  contact: string;
  message: string;
  subject: string;
  [key: string]: string;
}

interface IFormButtons {
  color: ButtonProps['color'];
  type: ButtonProps['type'];
  onClick?: () => void;
  text: string;
}

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: theme.spacing(2),
    textAlign: 'end',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState<boolean>(false);
  const [formInputs] = useState<IFormInputs[]>([
    {
      key: 'firstName',
      label: 'First Name',
      xs: 12,
      sm: 6,
      md: 4,
    },
    {
      key: 'lastName',
      label: 'Last Name',
      xs: 12,
      sm: 6,
      md: 4,
    },
    {
      key: 'contact',
      label: 'Email or Phone Number',
      xs: 12,
      md: 4,
    },
    {
      key: 'subject',
      label: 'Subject',
      xs: 12,
    },
    {
      key: 'message',
      label: 'Message',
      xs: 12,
    },
  ]);
  const { values, handleSubmit, handleReset, handleChange } =
    useForm<IFormValues>(
      {
        firstName: '',
        lastName: '',
        contact: '',
        subject: '',
        message: '',
      },
      () => doRequest(),
    );
  const [formButtons] = useState<IFormButtons[]>([
    { color: 'primary', type: 'reset', text: 'Reset', onClick: handleReset },
    { color: 'primary', type: 'submit', text: 'Submit' },
  ]);
  const { doRequest, grabErrors } = useRequest({
    url: '/api/messages',
    method: 'post',
    body: values,
    onSuccess: () => setSuccess(true),
  });

  const handleDialogClose = () => {
    setSuccess(false);
    handleReset();
  };

  return (
    <>
      <Section id="contact">
        <Container>
          <GridContainer>
            <GridItem xs={12} sm={10} center>
              <Content variant="h3" titleContent content="Contact Us" />
              <Content variant="h2" content="Send Us A Message!" spacing />
              <form onSubmit={handleSubmit}>
                <GridContainer>
                  {formInputs.map(({ key, label, xs, sm, md }, reactKey) => (
                    <GridItem xs={xs} sm={sm} md={md} key={reactKey}>
                      <CustomInput
                        id={key}
                        labelText={label}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                          name: key,
                          value: values[key],
                          onChange: handleChange,
                        }}
                        error={Boolean(grabErrors(key, false))}
                        helperText={grabErrors(key, false)}
                      />
                    </GridItem>
                  ))}
                </GridContainer>
                <div className={classes.buttonContainer}>
                  <LandingPageButtons
                    buttons={[]}
                    formButtons={formButtons.map(
                      ({ color, type, text, onClick }, key) => (
                        <Button
                          color={color}
                          type={type}
                          onClick={onClick}
                          key={key}
                        >
                          {text}
                        </Button>
                      ),
                    )}
                    scrollButton
                    scrollButtonColor="primary"
                  />
                </div>
              </form>
            </GridItem>
          </GridContainer>
        </Container>
      </Section>
      <ConfirmDialog
        isSuccess={success}
        handleClose={handleDialogClose}
        title="Send Message"
        message="Your message has successfully been submitted!"
      />
    </>
  );
};
