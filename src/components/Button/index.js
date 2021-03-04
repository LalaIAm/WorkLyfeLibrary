import React from "react";
import PropTypes from "prop-types";
import Ripple from '../Ripple'

const Button = ({ appearance, size, children, disabled, loading, ...rest }) => {
  const isDisabled = disabled ? "btn--disabled" : "";
  const isLoading = loading ? "btn--loading" : "";
  return (
    <button
      className={[
        `btn`,
        `btn--${appearance}`,
        `${isDisabled}`,
        `${isLoading}`,
        `btn--${size}`,
      ].join(" ")}
      {...rest}
    >
      {children}
      {!disabled && (
      <Ripple  />
      )}
    </button>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf([
    "primary",
    "secondary",
    "outlined",
    "transparent",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

Button.defaultProps = {
  appearance: "primary",
  size: "medium",
  onClick: () => {},
  disabled: false,
  loading: false
};

export default Button;
