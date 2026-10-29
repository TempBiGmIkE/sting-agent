import styled, { keyframes } from 'styled-components';

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.newsletter};
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.76);
  backdrop-filter: blur(8px);
`;

export const Dialog = styled.div`
  position: relative;
  width: min(100%, 680px);
  padding: clamp(32px, 6vw, 72px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: radial-gradient(
      ellipse at 100% 0,
      rgba(234, 40, 30, 0.24),
      transparent 46%
    ),
    #171414;
  color: #fff;
  box-shadow: 0 32px 100px rgba(0, 0, 0, 0.5);
  animation: ${reveal} 380ms cubic-bezier(0.16, 1, 0.3, 1) both;

  .privacy-note {
    margin-top: 16px;
    color: rgba(255, 255, 255, 0.54);
    font-family: calibre, sans-serif;
    font-size: 0.82rem;
  }

  @media (max-width: 480px) {
    padding: 54px 24px 32px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 18px;
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.7);
  font-family: Arial, sans-serif;
  font-size: 30px;
  line-height: 1;
  transition: color 160ms ease, transform 160ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    transform: rotate(90deg);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 3px;
  }
`;

export const Eyebrow = styled.p`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.red};
  font-family: calibre, sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: clamp(2.8rem, 8vw, 5.2rem);
  line-height: 0.86;
  letter-spacing: -0.07em;
  text-transform: uppercase;
`;

export const SignupText = styled.p`
  max-width: 480px;
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.75);
  font-family: calibre, sans-serif;
  font-size: 1.08rem;
  line-height: 1.5;
`;

export const PerkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 24px;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.86);
  font-family: calibre, sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;

  li::before {
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.red};
    content: '↗';
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const Form = styled.form`
  label {
    display: block;
    margin-bottom: 9px;
    color: rgba(255, 255, 255, 0.66);
    font-family: calibre, sans-serif;
    font-size: 0.8rem;
  }

  > div {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 480px) {
    > div {
      flex-direction: column;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;
  min-height: 54px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.22);
  color: #fff;
  font-family: calibre, sans-serif;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.42);
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.red};
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 2px;
  }
`;

export const JoinButton = styled.button`
  min-height: 54px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.red};
  color: #fff;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  white-space: nowrap;
  transition: background 160ms ease, transform 160ms ease;

  &:hover {
    background: #c92118;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }
`;

export const SignupMessage = styled.p`
  margin-top: 14px;
  color: #f0c4bd;
  font-family: calibre, sans-serif;
  font-size: 0.9rem;
  line-height: 1.4;
`;
