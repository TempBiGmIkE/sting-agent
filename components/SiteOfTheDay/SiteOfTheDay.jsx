/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { useThemeContext } from '../../context/theme';
import useStyledTheme from '../../hooks/useStyledTheme';
import useCursorStyle from '../../hooks/useCursorStyle';
import { WorkWithUsButton, WorkWithUsModal } from '../WorkWithUs';
import {
  BookCallLink,
  Container,
  Options,
  ScorpionImage,
  ThemeToggle,
} from './styles';

const SiteOfTheDay = () => {
  const theme = useStyledTheme();
  const [state, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOpen = isHovered || hasFocus || isPinnedOpen;

  const handleToggleTheme = event => {
    event.preventDefault();
    dispatch({ type: 'TOGGLE_THEME' });
    addCursorColor(null);
  };

  return (
    <>
      <Container
        onMouseEnter={() => {
          setIsHovered(true);
          addCursorBorder();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          removeCursorBorder();
        }}
        onKeyDown={event => {
          if (event.key === 'Escape') {
            setIsPinnedOpen(false);
            event.target.blur();
          }
        }}
        onFocus={() => setHasFocus(true)}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setHasFocus(false);
          }
        }}
      >
        <ScorpionImage
          type="button"
          aria-label="Toggle contact options"
          aria-expanded={isOpen}
          aria-controls="site-of-the-day-options"
          onClick={() => setIsPinnedOpen(open => !open)}
        >
          <img src="/scorpion.png" alt="" />
        </ScorpionImage>
        <ThemeToggle
          type="button"
          aria-label={`Switch to ${
            state.theme === 'dark' ? 'light' : 'dark'
          } mode`}
          onMouseEnter={() => addCursorColor(theme.text)}
          onMouseLeave={resetCursorColor}
          onClick={handleToggleTheme}
        >
          <svg width="14" height="14" viewBox="154 8 9 8" aria-hidden="true">
            <path
              d="M162 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
              fill={theme.colors.red}
            />
          </svg>
        </ThemeToggle>
        <Link href="https://www.thestinginc.com/store" passHref>
          <a target="_blank" rel="noreferrer">
            <svg width="53.08" height="171.358" viewBox="0 0 53.08 171.358">
              <path fill={theme.text} d="M0 0h53.08v171.358H0z"></path>
              <g fill={theme.background}>
                <text
                  x="26.54"
                  y="85.679"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial, sans-serif"
                  fontSize="11"
                  fontWeight="bold"
                  writingMode="vertical-rl"
                  transform="rotate(180 26.54 85.679)"
                  letterSpacing="1"
                >
                  STING STORE
                </text>
              </g>
            </svg>
          </a>
        </Link>
        <Options
          id="site-of-the-day-options"
          $isOpen={isOpen}
          aria-label="Contact options"
        >
          <WorkWithUsButton onClick={() => setIsModalOpen(true)} />
          <BookCallLink href="mailto:mgmt@thestinginc.com?subject=Book%20a%20call">
            Book a Call
          </BookCallLink>
        </Options>
      </Container>
      <WorkWithUsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default SiteOfTheDay;
