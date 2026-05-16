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
  padding: 60px 0 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 80px;
  overflow: hidden;

  ${media.mobile`
        padding: 50px 0 60px;
        margin-bottom: 60px;
  `}
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1.75rem, 8vw, 6rem);
  line-height: 1.15;
  margin: 0 0 48px;
  max-width: 100%;
  font-weight: 700;
  font-family: 'Presicav', sans-serif;
  letter-spacing: -0.04em;

  ${media.tablet`
        font-size: clamp(1.5rem, 6vw, 4rem);
        margin-bottom: 36px;
        line-height: 1.2;
  `}

  ${media.mobile`
        font-size: clamp(1.25rem, 7vw, 2.5rem);
        margin-bottom: 28px;
        line-height: 1.25;
  `}
`;

export const HeroIntro = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1.3rem);
  max-width: 900px;
  line-height: 1.6;
  margin: 0;
  font-family: 'Presicav', sans-serif;

  ${media.tablet`
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        line-height: 1.65;
  `}

  ${media.mobile`
        font-size: clamp(0.85rem, 2.5vw, 1rem);
        line-height: 1.7;
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
  cursor: pointer;
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
    opacity: 0.8;
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

// Modal Styles
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  overflow-y: auto;
  padding: 40px 20px;

  ${media.mobile`
    padding: 20px;
  `}
`;

export const ModalContent = styled.div`
  background: ${props => props.theme.colors?.red || '#EA281E'};
  color: ${props => props.theme.colors?.black || '#000'};
  border-radius: 12px;
  padding: 48px;
  max-width: 900px;
  width: 100%;
  animation: ${slideUp} 0.3s ease;
  position: relative;

  ${media.tablet`
    padding: 40px;
  `}

  ${media.mobile`
    padding: 32px 24px;
  `}
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: ${props => props.theme.colors?.black || '#000'};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-bottom: 48px;
  align-items: start;

  ${media.tablet`
    gap: 32px;
    grid-template-columns: 1fr;
  `}
`;

export const ModalImageSection = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalName = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin: 0;
  font-weight: 700;
  font-family: 'Presicav', sans-serif;
  line-height: 1.2;
`;

export const ModalRole = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const ModalBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 8px 0 0;
  opacity: 0.95;
`;

export const ModalSection = styled.section`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.mobile`
    margin-bottom: 24px;
  `}
`;

export const ModalSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 16px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: 'Presicav', sans-serif;
`;

export const ModalWorksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
`;

export const ModalWorkItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
  padding-left: 24px;
  position: relative;

  &::before {
    content: '→';
    position: absolute;
    left: 0;
  }
`;

export const ModalLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ModalLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background: ${props => props.theme.colors?.black || '#000'};
  color: ${props => props.theme.colors?.red || '#EA281E'};
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: all 0.2s ease;
  border: 2px solid transparent;

  &:hover {
    background: transparent;
    color: ${props => props.theme.colors?.black || '#000'};
    border-color: ${props => props.theme.colors?.black || '#000'};
  }
`;

export const ModalDownloadLink = styled(ModalLink)`
  background: ${props => props.theme.colors?.black || '#000'};
`;
