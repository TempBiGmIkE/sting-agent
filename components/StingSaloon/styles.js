import styled from 'styled-components';
import media from '../../styles/media';

export const Page = styled.div`
  padding: 80px 24px 40px;
  max-width: 1360px;
  margin: 0 auto;
  color: ${props => props.theme.colors.black};
  background: ${props => props.theme.colors.white};
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  min-height: 80vh;
  padding-bottom: 60px;

  ${media.tablet`
    grid-template-columns: 1fr;
    min-height: auto;
    padding-bottom: 40px;
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
  padding: 16px 28px;
  border-radius: 999px;
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border-radius: 999px;
  border: 2px solid ${props => props.theme.colors.black};
  background: transparent;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const HeroVisual = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-items: center;
`;

export const ProductStack = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
`;

export const ProductBlock = styled.div`
  min-height: 180px;
  border-radius: 28px;
  padding: 32px 30px;
  background: ${props => (props.accent ? props.theme.colors.black : '#F6F6F4')};
  color: ${props =>
    props.accent ? props.theme.colors.white : props.theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.08);
`;

export const ProductLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 14px;
  opacity: 0.8;
`;

export const ProductCaption = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
`;

export const ProductListSection = styled.section`
  margin: 60px 0;
`;

export const ProductListTitle = styled.h2`
  font-size: clamp(2.25rem, 4vw, 3rem);
  margin: 0 0 32px;
  font-family: 'Presicav', sans-serif;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;

  ${media.tablet`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`;

export const ProductCard = styled.div`
  border-radius: 24px;
  background: #f7f7f5;
  padding: 32px 28px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 12px;
`;

export const ProductPrice = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const ProductDescription = styled.p`
  margin: 0;
  line-height: 1.7;
  opacity: 0.85;
`;

export const FeatureBanner = styled.section`
  margin: 80px 0;
  border-radius: 32px;
  background: #0d0d0d;
  color: ${props => props.theme.colors.white};
  padding: 56px 40px;
  display: grid;
  align-items: center;
  justify-items: start;
  text-align: left;

  ${media.tablet`
    padding: 40px 24px;
  `}
`;

export const FeatureCopy = styled.div`
  max-width: 640px;
`;

export const FeatureTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3.3rem);
  margin: 0 0 18px;
  line-height: 1.05;
`;

export const FeatureSubtext = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  opacity: 0.82;
  margin: 0 0 28px;
`;

export const FeatureButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border-radius: 999px;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const SplitSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin: 0 0 80px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const SplitCard = styled.article`
  min-height: 320px;
  border-radius: 28px;
  padding: 32px;
  background: ${props => (props.accent ? '#111' : '#f5f5f3')};
  color: ${props =>
    props.accent ? props.theme.colors.white : props.theme.colors.black};
  display: grid;
  gap: 24px;
  align-items: start;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
`;

export const SplitCardTitle = styled.h3`
  font-size: 1.6rem;
  margin: 0;
  line-height: 1.1;
`;

export const SplitCardText = styled.p`
  margin: 0;
  opacity: 0.85;
  line-height: 1.75;
`;

export const SplitCardButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 999px;
  border: 1px solid
    ${props =>
      props.accent ? props.theme.colors.white : props.theme.colors.black};
  background: transparent;
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  width: fit-content;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${props =>
      props.accent ? props.theme.colors.white : props.theme.colors.black};
    color: ${props =>
      props.accent ? props.theme.colors.black : props.theme.colors.white};
  }
`;

export const ShopsSection = styled.section`
  margin: 0 0 80px;
`;

export const ShopsHeading = styled.h2`
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 0 0 14px;
`;

export const ShopsText = styled.p`
  margin: 0 0 34px;
  max-width: 760px;
  line-height: 1.8;
  opacity: 0.9;
`;

export const ShopsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const ShopCard = styled.div`
  display: grid;
  gap: 20px;
  border-radius: 28px;
  overflow: hidden;
  background: #111;
  min-height: 360px;
  color: ${props => props.theme.colors.white};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
`;

export const ShopCardImage = styled.div`
  min-height: 260px;
  background: ${props => (props.secondary ? '#333' : '#111')};
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
`;

export const ShopCardContent = styled.div`
  padding: 24px 28px;
`;

export const ShopCardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.4rem;
`;

export const ShopCardMeta = styled.p`
  margin: 0;
  line-height: 1.7;
  opacity: 0.78;
`;

export const ShopCardButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 999px;
  border: 1px solid ${props => props.theme.colors.white};
  background: transparent;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-weight: 700;
  width: fit-content;
  transition: background 0.2s ease, color 0.2s ease;
  margin-top: 8px;

  &:hover {
    background: ${props => props.theme.colors.white};
    color: #111;
  }
`;

export const StorySection = styled.section`
  margin: 0 0 100px;
`;

export const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 32px;
  align-items: start;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const StoryText = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  opacity: 0.9;
`;

export const StoryPanel = styled.div`
  border-radius: 28px;
  background: #f7f6f2;
  padding: 40px;
  display: grid;
  gap: 22px;
`;

export const StoryPanelTitle = styled.h3`
  margin: 0;
  font-size: 1.8rem;
`;

export const StoryPanelBody = styled.p`
  margin: 0;
  line-height: 1.75;
  opacity: 0.88;
`;

export const Signature = styled.p`
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
