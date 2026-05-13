import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    event => {
      event.preventDefault();
      dispatch({ type: 'TOGGLE_THEME' });

      // reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 24"
      fill={theme.text}
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      {...rootProps}
    >
      <text
        x="0"
        y="17"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="24"
        fontWeight="1200"
      >
        STING INC
      </text>
      <path
        role="button"
        d="M162 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
        fill={theme.colors.red}
        onMouseEnter={() => addCursorColor(theme.text)}
        onMouseLeave={resetCursorColor}
        onClick={handleToggleTheme}
        {...buttonProps}
      />
    </svg>
  );
};

export default Logo;
