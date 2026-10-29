import styled, { keyframes } from 'styled-components';
import media from '../../styles/media';

const enter = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Landing = styled.main`
  --ungated-bg: #151313;
  --ungated-cream: #f0e9dc;
  --ungated-muted: #a59c91;
  --ungated-red: #ea281e;

  overflow: hidden;
  background: var(--ungated-bg);
  color: var(--ungated-cream);
  font-family: calibre, Arial, sans-serif;

  a {
    font-family: 'Presicav', sans-serif;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export const NavLine = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  min-height: 88px;
  margin: 0 auto;
  padding: 18px clamp(20px, 5vw, 80px);
  border-bottom: 1px solid rgba(240, 233, 220, 0.14);
`;

export const Wordmark = styled.a`
  font-size: 1.1rem;
  letter-spacing: 0.06em;

  span {
    color: var(--ungated-red);
  }
`;

export const NavLink = styled.a`
  color: var(--ungated-muted);
  font-family: calibre, Arial, sans-serif !important;
  font-size: 0.9rem;
  transition: color 180ms ease;

  span {
    margin-left: 8px;
    color: var(--ungated-red);
  }

  &:hover {
    color: var(--ungated-cream);
  }
`;

export const Hero = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(380px, 0.9fr);
  align-items: center;
  gap: clamp(36px, 7vw, 110px);
  max-width: 1600px;
  min-height: min(820px, calc(100svh - 88px));
  margin: 0 auto;
  padding: clamp(70px, 10vh, 130px) clamp(20px, 8vw, 130px);

  ${media.tablet`
    grid-template-columns: 1fr;
    gap: 58px;
    min-height: auto;
    padding: 90px 28px 80px;
  `}

  ${media.mobile`
    padding: 70px 20px 60px;
  `}
`;

export const HeroCopy = styled.div`
  position: relative;
  z-index: 1;
  animation: ${enter} 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
`;

export const HeroKicker = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: clamp(28px, 5vh, 58px);
  color: var(--ungated-muted);
  font-size: 0.72rem;
  letter-spacing: 0.14em;

  i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--ungated-red);
  }
`;

export const HeroTitle = styled.h1`
  max-width: 780px;
  font-size: clamp(4.5rem, 10vw, 10rem);
  line-height: 0.78;
  letter-spacing: -0.085em;
  text-transform: uppercase;

  em {
    color: var(--ungated-red);
    font-style: normal;
  }

  ${media.mobile`
    font-size: clamp(3.9rem, 18vw, 6.5rem);
  `}
`;

export const HeroAside = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  max-width: 620px;
  margin: 42px 0 0 clamp(0px, 8vw, 110px);

  p {
    max-width: 330px;
    color: var(--ungated-muted);
    font-size: 1.08rem;
    line-height: 1.45;
  }

  ${media.small`
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
  `}
`;

export const JoinButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: fit-content;
  min-height: 54px;
  padding: 14px 20px;
  border: 1px solid var(--ungated-red);
  background: var(--ungated-red);
  color: var(--ungated-cream);
  font-size: 0.76rem;
  letter-spacing: 0.04em;
  transition: background 200ms ease, color 200ms ease, transform 200ms ease;

  &:hover {
    background: transparent;
    color: var(--ungated-cream);
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 2px solid var(--ungated-cream);
    outline-offset: 4px;
  }

  ${props =>
    props.$large &&
    `
      width: 100%;
      min-height: 150px;
      margin-top: clamp(90px, 15vw, 220px);
      padding: clamp(24px, 5vw, 72px);
      background: var(--ungated-red);
      color: var(--ungated-cream);
      font-size: clamp(1.2rem, 3vw, 2.8rem);

      span {
        font-family: calibre, Arial, sans-serif;
      }

      b {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: clamp(2.4rem, 7vw, 6.5rem);
        letter-spacing: -0.07em;
      }

      &:hover {
        background: #c92118;
        color: var(--ungated-cream);
      }
    `}
`;

export const HeroVisual = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 470px;
  animation: ${enter} 1000ms 120ms cubic-bezier(0.16, 1, 0.3, 1) both;

  ${media.tablet`
    min-height: 360px;
  `}

  ${media.mobile`
    min-height: 320px;
  `}
`;

export const Soundline = styled.div`
  position: absolute;
  inset: 5% -20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(3px, 0.7vw, 10px);
  opacity: 0.3;
  transform: rotate(-12deg);

  span {
    width: 2px;
    height: 20%;
    background: var(--ungated-red);
  }

  ${Array.from(
    { length: 42 },
    (_, index) => `
    span:nth-child(${index + 1}) {
      height: ${20 + ((index * 37) % 65)}%;
    }
  `,
  )}
`;

export const SignalCard = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 550px);
  padding: clamp(20px, 3vw, 34px);
  border: 1px solid rgba(240, 233, 220, 0.2);
  background: linear-gradient(
    145deg,
    rgba(42, 36, 34, 0.98),
    rgba(25, 22, 21, 0.96)
  );
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
  transform: rotate(2deg);
`;

export const SignalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(240, 233, 220, 0.14);
`;

export const ChartLabel = styled.p`
  margin-bottom: 10px;
  color: var(--ungated-red);
  font-size: 0.63rem;
  letter-spacing: 0.14em;
`;

export const ChartTitle = styled.h2`
  font-size: clamp(1.2rem, 2.4vw, 1.75rem);
  letter-spacing: -0.04em;
`;

export const SignalPill = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 10px;
  border: 1px solid rgba(240, 233, 220, 0.18);
  color: var(--ungated-muted);
  font-size: 0.52rem;
  letter-spacing: 0.1em;
  white-space: nowrap;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #a8c977;
  }
`;

export const ChartList = styled.div``;

export const ChartRow = styled.div`
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr) 54px;
  align-items: center;
  gap: 12px;
  min-height: 78px;
  border-bottom: 1px solid rgba(240, 233, 220, 0.1);
`;

export const Number = styled.span`
  color: var(--ungated-muted);
  font-size: 0.68rem;
`;

export const ArtistCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ListenMark = styled.span`
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid rgba(234, 40, 30, 0.5);
  border-radius: 50%;
  color: var(--ungated-red);
  font-size: 0.6rem;
`;

export const ArtistName = styled.p`
  margin-bottom: 5px;
  font-size: 0.83rem;
`;

export const ArtistMeta = styled.p`
  color: var(--ungated-muted);
  font-size: 0.7rem;
`;

export const SignalBar = styled.div`
  height: 3px;
  background: rgba(240, 233, 220, 0.12);

  span {
    display: block;
    width: ${props => props.$signal}%;
    height: 100%;
    background: var(--ungated-red);
  }
`;

export const SignalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-top: 20px;
  color: var(--ungated-muted);
  font-size: 0.58rem;
  letter-spacing: 0.09em;

  b {
    margin-left: 4px;
    color: var(--ungated-red);
  }
`;

export const Note = styled.p`
  position: absolute;
  right: -9%;
  bottom: 3%;
  color: var(--ungated-muted);
  font-size: 0.57rem;
  letter-spacing: 0.15em;
  transform: rotate(-90deg) translateX(100%);
  transform-origin: right bottom;

  ${media.tablet`
    right: -1%;
  `}

  ${media.mobile`
    right: 0;
    bottom: -7%;
    font-size: 0.48rem;
  `}
`;

export const Intro = styled.section`
  padding: clamp(90px, 14vw, 190px) clamp(20px, 8vw, 130px);
  border-top: 1px solid rgba(240, 233, 220, 0.14);
`;

export const IntroLabel = styled.p`
  margin-bottom: 28px;
  color: var(--ungated-red);
  font-size: 0.7rem;
  letter-spacing: 0.16em;
`;

export const IntroTitle = styled.h2`
  max-width: 1050px;
  margin-bottom: clamp(60px, 10vw, 130px);
  font-size: clamp(3rem, 7vw, 7.5rem);
  line-height: 0.9;
  letter-spacing: -0.07em;
`;

export const Principles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(240, 233, 220, 0.18);
  border: 1px solid rgba(240, 233, 220, 0.18);

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const Principle = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 260px;
  padding: clamp(22px, 3vw, 42px);
  background: var(--ungated-bg);
`;

export const PrincipleNumber = styled.span`
  margin-bottom: auto;
  color: var(--ungated-red);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
`;

export const PrincipleHeading = styled.div`
  padding-top: 54px;
`;

export const PrincipleTitle = styled.h3`
  margin-bottom: 15px;
  font-size: clamp(1.35rem, 2.1vw, 1.85rem);
  letter-spacing: -0.04em;
`;

export const PrincipleCopy = styled.p`
  max-width: 390px;
  color: var(--ungated-muted);
  font-size: 1rem;
  line-height: 1.55;
`;

export const Story = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  padding: clamp(70px, 9vw, 120px) clamp(20px, 8vw, 130px);
  background: var(--ungated-cream);
  color: var(--ungated-bg);

  ${media.tablet`
    grid-template-columns: 1fr;
    gap: 30px;
  `}
`;

export const StoryIndex = styled.p`
  color: var(--ungated-red);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
`;

export const StoryBody = styled.div`
  max-width: 900px;
`;

export const StoryHeading = styled.h2`
  margin-bottom: 36px;
  font-size: clamp(2.5rem, 5vw, 5.2rem);
  line-height: 0.92;
  letter-spacing: -0.065em;
`;

export const StoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  li {
    padding-top: 16px;
    border-top: 1px solid rgba(21, 19, 19, 0.24);
    font-size: 0.95rem;
    line-height: 1.5;
  }

  ${media.tablet`
    grid-template-columns: 1fr;
    gap: 18px;
  `}
`;
