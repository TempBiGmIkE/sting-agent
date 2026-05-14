import styled from 'styled-components';
import media from '../../styles/media';
import containerStyles from '../../styles/shared/container';

export const PageContainer = styled.div`
  ${containerStyles}
  padding: 80px 0;

  ${media.tablet`
    padding: 60px 0;
  `}

  ${media.mobile`
    padding: 40px 0;
  `}
`;

export const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 120px;
  padding: 80px 40px;

  ${media.tablet`
    margin-bottom: 80px;
    padding: 60px 20px;
  `}

  ${media.mobile`
    margin-bottom: 60px;
    padding: 40px 20px;
  `}
`;

export const HeroTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 30px;
  color: ${props => props.theme.colors?.text || '#000'};
  font-family: calibre, sans-serif;

  ${media.tablet`
    font-size: 48px;
  `}

  ${media.mobile`
    font-size: 32px;
    margin-bottom: 20px;
  `}
`;

export const HeroSubtitle = styled.p`
  font-size: 24px;
  line-height: 1.6;
  color: ${props => props.theme.colors?.textSecondary || '#666'};
  max-width: 700px;
  margin: 0 auto;

  ${media.tablet`
    font-size: 18px;
  `}

  ${media.mobile`
    font-size: 16px;
  `}
`;

export const Section = styled.section`
  margin-bottom: 100px;

  ${media.tablet`
    margin-bottom: 80px;
  `}

  ${media.mobile`
    margin-bottom: 60px;
  `}
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 50px;
  color: ${props => props.theme.colors?.text || '#000'};
  font-family: calibre, sans-serif;

  ${media.tablet`
    font-size: 36px;
    margin-bottom: 40px;
  `}

  ${media.mobile`
    font-size: 28px;
    margin-bottom: 30px;
  `}
`;

export const SectionContent = styled.div`
  max-width: 900px;

  p {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 30px;
    color: ${props => props.theme.colors?.text || '#000'};

    ${media.mobile`
      font-size: 16px;
      margin-bottom: 20px;
    `}
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 20px;
      color: ${props => props.theme.colors?.text || '#000'};

      ${media.mobile`
        font-size: 16px;
      `}

      strong {
        font-weight: 700;
      }
    }
  }
`;

export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  ${media.tablet`
    grid-template-columns: 1fr;
    gap: 30px;
  `}
`;

export const ValueCard = styled.div`
  padding: 40px;
  background: ${props => props.theme.colors?.cardBg || '#f5f5f5'};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }

  ${media.mobile`
    padding: 30px 20px;
  `}
`;

export const ValueCardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${props => props.theme.colors?.text || '#000'};
  font-family: calibre, sans-serif;

  ${media.mobile`
    font-size: 20px;
  `}
`;

export const ValueCardText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${props => props.theme.colors?.textSecondary || '#666'};

  ${media.mobile`
    font-size: 14px;
  `}
`;

export const TimelineSection = styled.div`
  max-width: 800px;
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 40px;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid ${props => props.theme.colors?.border || '#ddd'};

  &:last-child {
    border-bottom: none;
  }

  ${media.tablet`
    grid-template-columns: 100px 1fr;
    gap: 30px;
    margin-bottom: 40px;
    padding-bottom: 40px;
  `}

  ${media.mobile`
    grid-template-columns: 80px 1fr;
    gap: 20px;
    margin-bottom: 30px;
    padding-bottom: 30px;
  `}
`;

export const TimelineYear = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors?.accent || '#000'};
  font-family: calibre, sans-serif;

  ${media.mobile`
    font-size: 16px;
  `}
`;

export const TimelineDescription = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${props => props.theme.colors?.text || '#000'};

  ${media.mobile`
    font-size: 16px;
  `}
`;

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
    gap: 20px;
  `}
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 30px;
`;

export const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: ${props => props.theme.colors?.accent || '#000'};
  margin-bottom: 10px;
  font-family: calibre, sans-serif;

  ${media.tablet`
    font-size: 36px;
  `}

  ${media.mobile`
    font-size: 28px;
  `}
`;

export const StatLabel = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors?.textSecondary || '#666'};
  font-weight: 500;

  ${media.mobile`
    font-size: 14px;
  `}
`;
