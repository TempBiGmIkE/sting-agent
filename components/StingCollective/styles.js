import styled from 'styled-components';

export const Page = styled.div`
  padding: 100px 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Hero = styled.header`
  margin-bottom: 60px;
  text-align: left;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  line-height: 1.05;
  margin: 0 0 12px 0;
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${props => props.theme.textSecondary || '#777'};
  margin: 0;
`;

export const Section = styled.section`
  margin: 48px 0;
`;

export const SectionHeading = styled.h2`
  font-size: 22px;
  margin: 0 0 12px 0;
`;

export const SectionText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.text || '#111'};
  margin: 0 0 12px 0;
`;

export const TierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 18px;
`;

export const TierCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 22px;
  background: ${props => props.theme.background};
`;

export const TierTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 6px 0;
`;

export const TierSubtitle = styled.p`
  font-size: 14px;
  margin: 0 0 12px 0;
  color: ${props => props.theme.textSecondary || '#777'};
`;

export const BenefitsList = styled.ul`
  margin: 0 0 12px 0;
  padding-left: 18px;
`;

export const BenefitItem = styled.li`
  margin: 6px 0;
  font-size: 14px;
`;

export const TierActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

export const ActionButton = styled.a`
  display: inline-block;
  padding: 8px 14px;
  border: 1px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  text-decoration: none;
`;

export const MembahGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-top: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MembahCard = styled.div`
  text-align: center;
`;

export const MembahAvatar = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

export const MembahName = styled.div`
  margin-top: 10px;
  font-weight: 600;
`;

export const MembahCode = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${props => props.theme.textSecondary || '#777'};
  text-transform: lowercase;
`;

export const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
`;

export const TimelineItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const CTA = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 18px;
  background: ${props => props.theme.text};
  color: ${props => props.theme.background};
  text-decoration: none;
`;

export default Page;
