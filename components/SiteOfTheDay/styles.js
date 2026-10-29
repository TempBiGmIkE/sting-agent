import styled from 'styled-components';
import { WorkWithUsButton } from '../WorkWithUs/styles';

export const Container = styled.div`
  position: fixed;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
  width: 53.08px;
  height: 171.358px;
  z-index: ${({ theme }) => theme.zIndex.awwwards};
`;

export const ScorpionImage = styled.button`
  position: absolute;
  top: -38px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  img {
    display: block;
    width: 42px;
    height: auto;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 3px;
  }
`;

export const ThemeToggle = styled.button`
  position: absolute;
  top: -39px;
  left: calc(50% + 5px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 3px;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 0;
  right: calc(100% + 12px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 190px;
  padding: 10px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(8px)'};
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;

  ${Container}:hover &,
  ${Container}:focus-within & {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(0);
  }

  ${WorkWithUsButton} {
    width: 100%;
    padding: 10px 12px;
    font-size: 12px;
  }
`;

export const BookCallLink = styled.a`
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: 2px solid ${({ theme }) => theme.colors.red};
  background: ${({ theme }) => theme.colors.red};
  color: white;
  font-family: 'Presicav', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.red};
  }
`;
