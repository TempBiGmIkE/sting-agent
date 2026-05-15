import styled, { keyframes } from 'styled-components';
import media from '../../styles/media';
import containerStyles from '../../styles/shared/container';

export const PageContainer = styled.div`
  ${containerStyles}
  min-height: 100vh;
  padding: 80px 0 120px;
  background: ${props => props.theme.colors?.red || '#EA281E'};
  color: ${props => props.theme.colors?.black || '#000'};

  ${media.tablet`
    padding: 60px 0 80px;
  `}

  ${media.mobile`
    padding: 40px 0 60px;
  `}
`;

export const HeroSection = styled.section`
  padding: 40px 0 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 60px;

  ${media.mobile`
    margin-bottom: 40px;
    padding: 30px 0 40px;
  `}
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 7.5rem);
  line-height: 0.95;
  margin: 0 0 36px;
  max-width: 980px;
  font-weight: 700;
  font-family: 'Presicav', sans-serif;
  letter-spacing: -0.04em;

  ${media.tablet`
    font-size: clamp(3.5rem, 12vw, 6rem);
    margin-bottom: 28px;
  `}

  ${media.mobile`
    font-size: clamp(3rem, 16vw, 4.5rem);
    margin-bottom: 24px;
  `}
`;

export const HeroIntro = styled.p`
  font-size: 1.3rem;
  max-width: 820px;
  line-height: 1.5;
  margin: 0;
  font-family: 'Presicav', sans-serif;

  ${media.tablet`
    font-size: 1.05rem;
  `}

  ${media.mobile`
    font-size: 1rem;
    line-height: 1.6;
  `}
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 60px;

  ${media.tablet`
    gap: 24px;
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

export const ServiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ServiceHeading = styled.h2`
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 0 0 18px;
  font-family: 'Presicav', sans-serif;
`;

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
`;

export const ServiceItem = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
  opacity: 0.92;
`;

export const LogoMarquee = styled.div`
  overflow: hidden;
  margin: 0 -6px 60px;
  width: 100%;
`;

export const LogosTrack = styled.div`
  display: inline-flex;
  gap: 18px;
  min-width: 200%;
  animation: ${marquee} 28s linear infinite;
  white-space: nowrap;
  will-change: transform;
`;

export const LogoBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  min-width: 130px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.04);
`;

export const MediaBlock = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 520px;
  margin: 0 auto 60px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);

  ${media.tablet`
    min-height: 420px;
  `}

  ${media.mobile`
    min-height: 280px;
  `}
`;

export const SectionGroup = styled.section`
  display: grid;
  gap: 24px;
  max-width: 760px;
  margin-bottom: 60px;
`;

export const SectionText = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 0;
  max-width: 760px;
  font-family: 'Presicav', sans-serif;

  ${media.tablet`
    font-size: 1.05rem;
  `}

  ${media.mobile`
    font-size: 1rem;
  `}
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 60px;

  ${media.tablet`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

export const TeamColumn = styled.div`
  display: grid;
  gap: 16px;
`;

export const GroupHeading = styled.h3`
  font-size: 1rem;
  margin: 0 0 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-family: 'Presicav', sans-serif;
`;

export const TeamMemberCard = styled.div`
  position: relative;
  z-index: 0;
  padding: 12px 0;
  cursor: default;
  overflow: visible;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% + 18px);
    width: 140px;
    height: 140px;
    border-radius: 20px;
    background-image: ${({ avatar }) => `url(${avatar})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transform: translateY(-50%) scale(0.9);
    transition: opacity 0.2s ease, transform 0.2s ease;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
    pointer-events: none;
    z-index: 2;
  }

  &:hover {
    z-index: 5;
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
`;

export const TeamMemberName = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
`;

export const TeamMemberRole = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.9;
`;

export const TeamItem = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  text-transform: uppercase;
  opacity: 0.95;
`;

export const ContactSection = styled.section`
  max-width: 760px;
  margin-bottom: 20px;
`;

export const ContactHeading = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 24px;
  font-family: 'Presicav', sans-serif;

  ${media.mobile`
    font-size: 2rem;
  `}
`;

export const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 14px;
`;

export const ContactLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  min-width: 140px;
`;

export const ContactLink = styled.a`
  font-size: 0.95rem;
  color: ${props => props.theme.colors?.black || '#000'};
  text-decoration: underline;
`;
