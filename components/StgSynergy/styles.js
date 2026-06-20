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

export const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
    gap: 30px;
  `}
`;

export const PhilosophyCard = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(255, 0, 0, 0.08) 100%);
    border-color: ${props => props.theme.colors.red};
    transform: translateY(-8px);
  }
`;

export const PhilosophyNumber = styled.span`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.red};
  margin-bottom: 12px;
`;

export const PhilosophyTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 12px;
  font-weight: 700;
`;

export const PhilosophyDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0;
`;

export const StructureSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin: 60px 0;

  ${media.tablet`
    grid-template-columns: 1fr;
    gap: 40px;
  `}
`;

export const StructureVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;
`;

export const StructureContent = styled.div``;

export const StructureItem = styled.div`
  padding: 24px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-left: 3px solid ${props => props.theme.colors.red};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(8px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StructureLabel = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const StructureHeading = styled.h4`
  font-size: 1.3rem;
  margin: 0 0 8px;
  font-weight: 700;
`;

export const StructureDescription = styled.p`
  font-size: 0.95rem;
  opacity: 0.85;
  margin: 0;
  line-height: 1.6;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const BenefitCard = styled.div`
  padding: 32px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.red};
    background: rgba(255, 0, 0, 0.05);
    transform: translateY(-4px);
  }
`;

export const BenefitIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
  opacity: 0.8;
`;

export const BenefitTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 12px;
  font-weight: 700;
`;

export const BenefitDescription = styled.p`
  font-size: 0.95rem;
  opacity: 0.85;
  margin: 0;
  line-height: 1.6;
`;

export const ModelComparison = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const ComparisonCard = styled.div`
  padding: 40px;
  background: ${props =>
    props.highlight
      ? `linear-gradient(135deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.1) 100%)`
      : `rgba(255, 255, 255, 0.05)`};
  border: 2px solid
    ${props => (props.highlight ? props.theme.colors.red : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.red};
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(255, 0, 0, 0.08) 100%);
  }
`;

export const ComparisonTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 24px;
  font-weight: 700;
`;

export const ComparisonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ComparisonItem = styled.li`
  padding: 12px 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
  line-height: 1.6;

  &:last-child {
    border-bottom: none;
  }

  &:before {
    content: '${props => (props.positive ? '✓' : '✗')}';
    color: ${props => (props.positive ? props.theme.colors.red : 'rgba(255, 255, 255, 0.5)')};
    font-weight: bold;
    flex-shrink: 0;
  }
`;

export const ParticipationGuide = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const StepCard = styled.div`
  padding: 32px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.15) 0%, rgba(255, 0, 0, 0.05) 100%);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.red};
    transform: scale(1.05);
  }
`;

export const StepNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.red};
  margin-bottom: 16px;
`;

export const StepTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 12px;
  font-weight: 700;
`;

export const StepDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.85;
  margin: 0;
  line-height: 1.6;
`;

export const EcosystemMap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

export const EcosystemNode = styled.div`
  padding: 32px;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 0, 0, 0.2);
    border-color: ${props => props.theme.colors.red};
    transform: translateY(-8px);
  }
`;

export const NodeTitle = styled.h4`
  font-size: 1.1rem;
  margin: 0 0 12px;
  font-weight: 700;
  color: ${props => props.theme.colors.red};
`;

export const NodeDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.85;
  margin: 0;
  line-height: 1.6;
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
