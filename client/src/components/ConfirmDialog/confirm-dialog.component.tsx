import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  SlideProps,
} from '@material-ui/core';

interface IConfirmDialogProps {
  isSuccess: boolean;
  handleClose: () => void;
  title: string;
  message: string;
  isCancel?: boolean;
  handleCancel?: () => void;
}

export const ConfirmDialog = ({
  isCancel,
  handleCancel,
  handleClose,
  message,
  title,
  isSuccess,
}: IConfirmDialogProps) => {
  const Transition = forwardRef(function Transition(
    props: PropsWithChildren<SlideProps>,
    ref: ForwardedRef<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={isSuccess}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {isCancel && (
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
        )}
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
