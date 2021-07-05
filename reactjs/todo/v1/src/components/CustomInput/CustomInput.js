import React, { forwardRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import styles from "../../assets/customInputStyle.js";

const useStyles = makeStyles(styles);

const StyledLabel = styled(InputLabel)`
  .MuiFormLabel-asterisk {
    color: #f00;
  }
`;

const CustomInput = forwardRef((props, ref) => {
  const classes = useStyles();
  const restProps = props;
  const {
    formcontrolprops,
    labeltext,
    id,
    labelprops,
    inputprops,
    error,
    success,
    errorMessage,
    type,
    name,
    required,
  } = restProps;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
  });
  const marginTop = classNames({
    [classes.marginTop]: labeltext === undefined,
  });
  return (
    <FormControl
      {...formcontrolprops}
      className={formcontrolprops.className + " " + classes.formControl}
      name={name ?? ""}
      required={required}
      key={name}
    >
      {labeltext !== undefined ? (
        <StyledLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelprops}
        >
          {labeltext}
        </StyledLabel>
      ) : null}
      <Input
        autoComplete="new-password"
        inputRef={ref}
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        type={type ?? "text"}
        name={name ?? ""}
        inputProps={{
          ...inputprops,
        }}
        {...restProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
      {error && (
        <div className={classes.labelRootError}>
          {errorMessage ?? `${labeltext ?? "This field"} is required`}
        </div>
      )}
    </FormControl>
  );
});

CustomInput.propTypes = {
  labeltext: PropTypes.node,
  labelprops: PropTypes.object,
  id: PropTypes.string,
  inputprops: PropTypes.object,
  formcontrolprops: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
};
export default CustomInput;
