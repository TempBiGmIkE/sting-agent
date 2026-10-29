import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const LogoContainer = styled.span`
  position: relative;
  display: block;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-width: none;
  }
`;

const ThemeToggle = styled.button`
  position: absolute;
  top: ${({ $dark }) => ($dark ? '62.9%' : '53.9%')};
  left: ${({ $dark }) => ($dark ? '84.1%' : '82.4%')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  padding: 0;
  border: 0;
  background: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;

  &::before {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.red};
    content: '';
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 3px;
  }
`;

const Logo = props => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [state, dispatch] = useThemeContext();
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
    <LogoContainer
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      {...rootProps}
    >
      <img
        src={state.theme === 'dark' ? '/stingincw.png' : '/STINGINCb.svg'}
        alt="Sting Inc"
      />
      <ThemeToggle
        type="button"
        $dark={state.theme === 'dark'}
        aria-label={`Switch to ${
          state.theme === 'dark' ? 'light' : 'dark'
        } mode`}
        onMouseEnter={() => addCursorColor(theme.text)}
        onMouseLeave={resetCursorColor}
        onClick={handleToggleTheme}
        {...buttonProps}
      />
    </LogoContainer>
  );
};

export default Logo;
