import React from "react";
import styled from "styled-components";
// @material-ui/icons
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    width: 100% !important;
  }
`;

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="subtitle1">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomModal(props) {
  const {
    isOpen,
    handleToggle,
    title,
    footer,
    children,
    width,
    disableBackdropClick,
  } = props;

  return (
    <StyledDialog
      disableBackdropClick={disableBackdropClick ?? true}
      onClose={handleToggle}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      maxWidth={width ?? "sm"}
    >
      {title && (
        <DialogTitle id="customized-dialog-title" onClose={handleToggle}>
          {title}
        </DialogTitle>
      )}

      {children && <DialogContent dividers>{children}</DialogContent>}
      {footer && <DialogActions>{footer}</DialogActions>}
    </StyledDialog>
  );
}
