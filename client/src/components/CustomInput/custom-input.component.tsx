import {
  FormControl,
  FormControlProps,
  InputLabel,
  InputLabelProps,
  FormHelperText,
  Input,
  InputProps,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactNode } from 'react';
import cx from 'classnames';

interface ICustomInputProps {
  labelText?: ReactNode;
  labelProps?: InputLabelProps;
  id?: string;
  inputProps?: InputProps;
  formControlProps?: FormControlProps;
  inputRootCustomClasses?: string;
  error?: boolean;
  success?: boolean;
  white?: boolean;
  helperText?: ReactNode;
}

const useStyles = makeStyles((theme) => ({
  disabled: {
    '&:before': {
      borderColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#D2D2D2 !important',
      borderWidth: '1px !important',
    },
    '&:after': {
      borderColor: theme.palette.primary.main,
    },
    '& + p': {
      fontWeight: 300,
    },
  },
  underlineError: {
    '&:after': {
      borderColor: theme.palette.error.main,
    },
  },
  underlineSuccess: {
    '&:after': {
      borderColor: theme.palette.success.main,
    },
  },
  labelRoot: {
    color: '#aaaaaa !important',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.42857,
    top: 10,
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: 0,
    },
  },
  labelRootError: {
    color: `${theme.palette.error.main} !important`,
  },
  labelRootSuccess: {
    color: `${theme.palette.success.main} !important`,
  },
  formControl: {
    paddingTop: theme.spacing(3.375),
    position: 'relative',
    verticalAlign: 'unset',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      color: '#495057',
    },
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      backgroundColor: theme.palette.common.white,
    },
    '&:after': {
      backgroundColor: theme.palette.common.white,
    },
  },
  input: {
    color: '#495057',
    height: 'unset',
    '&,&::placeholder': {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.42857,
      opacity: 1,
    },
    '&::placeholder': {
      color: '#aaaaaa',
    },
  },
  whiteInput: {
    '&,&::placeholder': {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
}));

export const CustomInput = ({
  formControlProps,
  labelText,
  id,
  labelProps,
  inputProps,
  error,
  white,
  inputRootCustomClasses,
  success,
  helperText,
}: ICustomInputProps) => {
  const classes = useStyles();
  const labelClasses = cx({
    [classes.labelRoot]: true,
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = cx({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = cx({
    [inputRootCustomClasses as string]: !!inputRootCustomClasses,
  });
  const inputClasses = cx({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });
  const formControlClasses = !!formControlProps
    ? cx(formControlProps.className, classes.formControl)
    : classes.formControl;
  const helperTextClasses = cx({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText && (
        <InputLabel htmlFor={id} {...labelProps} className={labelClasses}>
          {labelText}
        </InputLabel>
      )}
      <Input
        id={id}
        {...inputProps}
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
      />
      {helperText && (
        <FormHelperText id={`${id}-text`} className={helperTextClasses}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomInput;
