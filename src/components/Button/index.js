import PropTypes from "prop-types";

import "./style.scss";

export const BUTTON_TYPES = {
  DEFAULT: 1,
  SUBMIT: 2,
};

const Button = ({ title, onClick, type, disabled, children }) => {
  const isSubmitButton = type === BUTTON_TYPES.SUBMIT;

  return (
    <button
      type={isSubmitButton ? "submit" : "button"}
      disabled={disabled}
      className="Button"
      data-testid="button-test-id"
      onClick={!isSubmitButton ? onClick : undefined} // onClick seulement pour les boutons non submit
      title={title}
    >
      {children}
    </button>
  );
};

// eslint-disable-next-line react/no-typos
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  type: BUTTON_TYPES.DEFAULT,
  title: "",
  children: null,
};

export default Button;
