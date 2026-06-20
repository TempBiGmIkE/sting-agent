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

export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const PillarCard = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 1px solid ${props => props.theme.colors.red};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(255, 0, 0, 0.08) 100%);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(255, 0, 0, 0.2);
  }
`;

export const PillarNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.red};
  opacity: 0.3;
  margin-bottom: 16px;
  font-family: 'Presicav', sans-serif;
`;

export const PillarTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 16px;
  font-weight: 700;
`;

export const PillarDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0;
`;

export const ArchitectureSection = styled.div`
  margin-top: 60px;
`;

export const HierarchyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
`;

export const HierarchyLevel = styled.div`
  padding: 32px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${props => props.theme.colors.red};
  }
`;

export const LevelTitle = styled.h4`
  font-size: 1.3rem;
  margin: 0 0 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.red};
`;

export const LevelDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0 0 16px;
`;

export const LevelBenefits = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
`;

export const BenefitItem = styled.li`
  font-size: 0.95rem;
  opacity: 0.8;
  padding-left: 24px;
  position: relative;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.red};
    font-weight: bold;
  }
`;

export const MicroeconomiesGrid = styled.div`
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

export const MicroeconomyCard = styled.div`
  padding: 32px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 2px solid ${props => props.theme.colors.red};
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(255, 0, 0, 0.25);
  }
`;

export const EconomyIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

export const EconomyTitle = styled.h4`
  font-size: 1.3rem;
  margin: 0 0 8px;
  font-weight: 700;
`;

export const EconomyDescription = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0;
  line-height: 1.5;
`;

export const ContentCampsSection = styled.div`
  margin-top: 60px;
`;

export const ContentCampsGrid = styled.div`
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

export const CampsContent = styled.div``;

export const CampsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CampsItem = styled.li`
  padding: 20px 0;
  display: flex;
  gap: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const CampsIcon = styled.span`
  color: ${props => props.theme.colors.red};
  font-size: 1.3rem;
  flex-shrink: 0;
`;

export const CampsText = styled.span`
  font-size: 1rem;
  line-height: 1.6;

  strong {
    color: ${props => props.theme.colors.white};
  }
`;

export const CampsVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  padding: 40px;

  ${media.tablet`
    min-height: 300px;
  `}
`;

export const URLToIRLSection = styled.div`
  margin-top: 60px;
`;

export const ClosedLoopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 40px;
`;

export const LoopStepCard = styled.div`
  padding: 40px 32px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: ${props => props.theme.colors.red};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.red}, transparent);
  }
`;

export const StepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.red};
  margin-bottom: 12px;
`;

export const StepTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 12px;
  font-weight: 700;
`;

export const StepDescription = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
  margin: 0;
  line-height: 1.6;
`;

export const BottomLineSection = styled.section`
  padding: 80px 24px;
  max-width: 1360px;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  ${media.tablet`
    padding: 60px 24px;
  `}
`;

export const BottomLineTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 3.5rem);
  margin: 0 0 24px;
  font-family: 'Presicav', sans-serif;
`;

export const BottomLineText = styled.p`
  font-size: 1.1rem;
  opacity: 0.85;
  margin: 0 0 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

export const BottomLineHighlight = styled.span`
  color: ${props => props.theme.colors.red};
  font-weight: 700;
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TalentDevelopmentSection = styled.div`
  margin-top: 60px;
`;

export const DevFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

export const DevFeatureCard = styled.div`
  padding: 32px 24px;
  background: rgba(255, 0, 0, 0.05);
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.red};
    background: rgba(255, 0, 0, 0.08);
  }
`;

export const DevFeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 12px;
`;

export const DevFeatureTitle = styled.h4`
  font-size: 1.1rem;
  margin: 0 0 8px;
  font-weight: 700;
`;

export const DevFeatureText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  line-height: 1.5;
`;
