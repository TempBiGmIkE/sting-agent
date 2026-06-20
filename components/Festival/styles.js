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

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin: 40px 0;
`;

export const InfoCard = styled.div`
  padding: 24px;
`;

export const InfoLabel = styled.h4`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0 12px 0;
  color: ${props => props.theme.textSecondary || '#888'};
`;

export const InfoValue = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 600;
`;

export const LineupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 24px;
`;

export const ArtistCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  text-align: center;
  background: ${props => props.theme.background};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const ArtistName = styled.h4`
  font-size: 16px;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

export const ArtistGenre = styled.p`
  font-size: 12px;
  color: ${props => props.theme.textSecondary || '#777'};
  margin: 0;
  text-transform: capitalize;
`;

export const Schedule = styled.div`
  margin: 24px 0;
`;

export const DaySchedule = styled.div`
  margin-bottom: 48px;
`;

export const DayTitle = styled.h4`
  font-size: 20px;
  margin: 0 0 24px 0;
  font-weight: 700;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

export const TimeSlot = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    border-bottom: none;
  }
`;

export const Time = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.textSecondary || '#888'};
`;

export const Performance = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PerformanceInfo = styled.div``;

export const PerformanceArtist = styled.p`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
`;

export const PerformanceStage = styled.p`
  margin: 0;
  font-size: 12px;
  color: ${props => props.theme.textSecondary || '#777'};
`;

export const HighlightCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin: 40px 0;
  border-radius: 4px;
`;

export const HighlightTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 16px 0;
  font-weight: 700;
`;

export const HighlightText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.textSecondary || '#777'};
  margin: 0 0 12px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CTASection = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.03) 100%);
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
  margin: 0 8px;

  &:hover {
    background: transparent;
    color: ${props => props.theme.text || '#000'};
  }
`;

export const Features = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  list-style: none;
  margin: 32px 0;
  padding: 0;
`;

export const FeatureItem = styled.li`
  padding: 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, transparent 100%);
  border-left: 3px solid rgba(0, 0, 0, 0.2);
  font-size: 14px;
  line-height: 1.6;
`;

export const Badge = styled.span`
  display: inline-block;
  background: rgba(212, 175, 55, 0.15);
  color: rgba(212, 175, 55, 0.8);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;
