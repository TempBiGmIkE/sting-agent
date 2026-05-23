import styled from 'styled-components';
import media from '../../styles/media';

export const Page = styled.div`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  min-height: 100vh;
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: 100vh;
  padding: 80px 24px;
  max-width: 1360px;
  margin: 0 auto;

  ${media.tablet`
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 40px;
    padding: 60px 24px;
  `}
`;

export const HeroCopy = styled.div`
  max-width: 640px;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: ${props => props.theme.colors.red};
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3rem, 5vw, 5.5rem);
  line-height: 0.95;
  margin: 0 0 24px;
  max-width: 640px;
  font-family: 'Presicav', sans-serif;
`;

export const HeroText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 620px;
  margin: 0 0 32px;
  opacity: 0.92;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 999px;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.theme.colors.red};

  &:hover {
    background: transparent;
    color: ${props => props.theme.colors.red};
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 999px;
  background: transparent;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.white};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
`;

export const HeroVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;

  ${media.tablet`
    min-height: 400px;
  `}
`;

export const FeatureGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  padding: 80px 24px;
  max-width: 1360px;
  margin: 0 auto;

  ${media.tablet`
    grid-template-columns: 1fr;
    padding: 60px 24px;
    gap: 30px;
  `}
`;

export const FeatureCard = styled.div`
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${props => props.theme.colors.red};
    transform: translateY(-8px);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 16px;
  opacity: 0.8;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 12px;
  font-weight: 700;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0;
`;

export const Section = styled.section`
  padding: 80px 24px;
  max-width: 1360px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${media.tablet`
    padding: 60px 24px;
  `}
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  line-height: 1.1;
  margin: 0 0 48px;
  font-family: 'Presicav', sans-serif;
  max-width: 800px;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 0 48px;
`;

export const SessionBookingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const SessionCard = styled.div`
  padding: 32px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 1px solid ${props => props.theme.colors.red};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(255, 0, 0, 0.2);
  }
`;

export const SessionType = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const SessionTitle = styled.h4`
  font-size: 1.3rem;
  margin: 0 0 8px;
  font-weight: 700;
`;

export const SessionDetails = styled.p`
  font-size: 0.95rem;
  opacity: 0.85;
  margin: 12px 0;
  line-height: 1.6;

  &:before {
    content: '• ';
    color: ${props => props.theme.colors.red};
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const BeatPackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.red};
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  z-index: 1;
`;
export const BeatPackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);

    ${media.mobile`
      grid-template-columns: 1fr;
      `}
      `}
      `;

export const BeatPackCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid rgba(255, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;

  &:hover {
    border-color: ${props => props.theme.colors.red};
    transform: scale(1.05);

    ${BeatPackOverlay} {
      opacity: 1;
    }
  }
`;


export const BeatPackContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const BeatPackGenre = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.red};
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
`;

export const BeatPackTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 4px;
  font-weight: 700;
`;

export const BeatPackStats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const Stat = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CollaborationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
    gap: 30px;
  `}
`;

export const CollaborationContent = styled.div``;

export const CollaborationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CollaborationItem = styled.li`
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const CollaborationCheck = styled.span`
  color: ${props => props.theme.colors.red};
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const CollaborationText = styled.span`
  font-size: 1rem;
  line-height: 1.6;
`;

export const ArtistPortfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);

    ${media.mobile`
      grid-template-columns: 1fr;
    `}
  `}
`;

export const PortfolioItem = styled.div`
  aspect-ratio: 1;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.red};
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.3) 0%, rgba(255, 0, 0, 0.1) 100%);
    transform: translateY(-8px);
  }
`;

export const PortfolioArtist = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const PortfolioTrack = styled.h4`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 700;
`;

export const CTASection = styled.section`
  padding: 80px 24px;
  max-width: 1360px;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${media.tablet`
    padding: 60px 24px;
  `}
`;

export const CTATitle = styled.h2`
  font-size: clamp(2rem, 3vw, 3.5rem);
  margin: 0 0 24px;
  font-family: 'Presicav', sans-serif;
`;

export const CTAText = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  margin: 0 0 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;
