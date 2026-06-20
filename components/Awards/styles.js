import styled from 'styled-components';

export const Page = styled.div`
  padding: 100px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Hero = styled.header`
  margin-bottom: 80px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 56px;
  line-height: 1.1;
  margin: 0 0 20px 0;
  font-weight: 800;
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  color: ${props => props.theme.textSecondary || '#888'};
  margin: 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.section`
  margin: 80px 0;
`;

export const SectionHeading = styled.h2`
  font-size: 32px;
  margin: 0 0 20px 0;
  font-weight: 700;
`;

export const SectionSubtitle = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textSecondary || '#777'};
  margin: 0 0 30px 0;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

export const CategoryCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 28px;
  background: ${props => props.theme.background};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const CategoryName = styled.h3`
  font-size: 18px;
  margin: 0 0 10px 0;
  font-weight: 600;
`;

export const CategoryDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textSecondary || '#777'};
  margin: 0;
`;

export const AwardCard = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.08);
  padding: 32px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, transparent 100%);
  margin-bottom: 24px;
`;

export const AwardStatus = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  color: ${props => (props.winner ? '#d4af37' : '#666')};
`;

export const AwardTitle = styled.h3`
  font-size: 22px;
  margin: 0 0 16px 0;
  font-weight: 700;
`;

export const Nominees = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
`;

export const NomineeCard = styled.div`
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: ${props => (props.winner ? 'rgba(212, 175, 55, 0.08)' : 'transparent')};
  border-color: ${props => (props.winner ? 'rgba(212, 175, 55, 0.3)' : 'rgba(0, 0, 0, 0.08)')};
  
  ${props =>
    props.winner &&
    `
    border-width: 2px;
    font-weight: 600;
  `}
`;

export const NomineeName = styled.p`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
`;

export const NomineeInfo = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${props => props.theme.textSecondary || '#777'};
`;

export const Timeline = styled.div`
  margin: 32px 0;
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 32px;
  margin-bottom: 32px;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 70px;
    top: 40px;
    width: 2px;
    height: calc(100% + 32px);
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const TimelineDate = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.textSecondary || '#888'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => props.theme.text || '#000'};
    left: -55px;
    top: 4px;
  }
`;

export const TimelineEvent = styled.div`
  font-size: 16px;
  color: ${props => props.theme.text || '#111'};
`;

export const NominationCTA = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 48px 40px;
  text-align: center;
  margin-top: 60px;
`;

export const CTATitle = styled.h3`
  font-size: 28px;
  margin: 0 0 16px 0;
  font-weight: 700;
`;

export const CTAText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textSecondary || '#777'};
  margin: 0 0 24px 0;
`;

export const CTAButton = styled.a`
  display: inline-block;
  padding: 14px 32px;
  background: ${props => props.theme.text || '#000'};
  color: ${props => props.theme.background || '#fff'};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid ${props => props.theme.text || '#000'};

  &:hover {
    background: transparent;
    color: ${props => props.theme.text || '#000'};
  }
`;

export const RegionHighlight = styled.div`
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.04) 100%);
  border-left: 4px solid rgba(212, 175, 55, 0.4);
  padding: 24px;
  margin: 32px 0;
  border-radius: 4px;
`;

export const HighlightTitle = styled.h4`
  font-size: 16px;
  margin: 0 0 12px 0;
  font-weight: 700;
`;

export const HighlightText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textSecondary || '#777'};
  margin: 0;
`;
