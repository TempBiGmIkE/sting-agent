import React from 'react';
import AnimateOnScreen from '../AnimateOnScreen';
import {
  Page,
  Hero,
  HeroCopy,
  Eyebrow,
  HeroTitle,
  HeroText,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  HeroVisual,
  ProductStack,
  ProductBlock,
  ProductLabel,
  ProductCaption,
  ProductListSection,
  ProductListTitle,
  ProductGrid,
  ProductCard,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  FeatureBanner,
  FeatureCopy,
  FeatureTitle,
  FeatureSubtext,
  FeatureButton,
  SplitSection,
  SplitCard,
  SplitCardTitle,
  SplitCardText,
  SplitCardButton,
  ShopsSection,
  ShopsHeading,
  ShopsText,
  ShopsRow,
  ShopCard,
  ShopCardImage,
  ShopCardContent,
  ShopCardTitle,
  ShopCardMeta,
  StorySection,
  StoryGrid,
  StoryText,
  StoryPanel,
  StoryPanelTitle,
  StoryPanelBody,
  Signature,
} from './styles';

const productItems = [
  {
    title: 'Moment No. 1',
    price: '$32',
    description: 'Daily cleansing ritual for clarity and calm.',
  },
  {
    title: 'Moment No. 2',
    price: '$28',
    description: 'Hydrating treatment for hair and scalp.',
  },
  {
    title: 'Moment No. 3',
    price: '$24',
    description: 'Scented formula for morning identity.',
  },
  {
    title: 'Moment No. 4',
    price: '$18',
    description: 'Everyday styling balm for subtle structure.',
  },
];

const StingSaloon = () => (
  <Page>
    <AnimateOnScreen>
      <Hero>
        <HeroCopy>
          <Eyebrow>Sting Saloon</Eyebrow>
          <HeroTitle>
            Discover your identity in the everyday — from the mirror to the
            morning ritual.
          </HeroTitle>
          <HeroText>
            The Saloon is where daily routine becomes a practice of style,
            presence, and quiet confidence. Start with the way you wake up, the
            way you move, and the way you wear your hair.
          </HeroText>
          <HeroActions>
            <PrimaryButton href="#shop">Shop Now</PrimaryButton>
            <SecondaryButton href="#saloon">Explore the Saloon</SecondaryButton>
          </HeroActions>
        </HeroCopy>

        <HeroVisual>
          <ProductStack>
            <ProductBlock>
              <ProductLabel>New Regimen</ProductLabel>
              <ProductCaption>Renew the way you begin each day.</ProductCaption>
            </ProductBlock>
            <ProductBlock accent>
              <ProductLabel>Daily Dose</ProductLabel>
              <ProductCaption>
                Products built for routine rituals.
              </ProductCaption>
            </ProductBlock>
            <ProductBlock>
              <ProductLabel>Hair Ritual</ProductLabel>
              <ProductCaption>
                Identity through everyday styling.
              </ProductCaption>
            </ProductBlock>
          </ProductStack>
        </HeroVisual>
      </Hero>
    </AnimateOnScreen>

    <AnimateOnScreen>
      <ProductListSection id="shop">
        <ProductListTitle>Moments: the ritual collection</ProductListTitle>
        <ProductGrid>
          {productItems.map(item => (
            <ProductCard key={item.title}>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <ProductDescription>{item.description}</ProductDescription>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductListSection>
    </AnimateOnScreen>

    <AnimateOnScreen>
      <FeatureBanner>
        <FeatureCopy>
          <FeatureTitle>Upgrade your grooming routine.</FeatureTitle>
          <FeatureSubtext>
            Earn points, build identity, and own the morning.
          </FeatureSubtext>
          <FeatureButton href="#saloon">Shop the Regimen</FeatureButton>
        </FeatureCopy>
      </FeatureBanner>
    </AnimateOnScreen>

    <AnimateOnScreen>
      <SplitSection>
        <SplitCard>
          <SplitCardTitle>Designed by Barbers</SplitCardTitle>
          <SplitCardText>
            Every product, treatment, and ritual is made for how you move
            through your day.
          </SplitCardText>
          <SplitCardButton href="#shop">Check It Out</SplitCardButton>
        </SplitCard>
        <SplitCard accent>
          <SplitCardTitle>Bryce Harper X Sting</SplitCardTitle>
          <SplitCardText>
            Best flow in the game — performance and style for every routine.
          </SplitCardText>
          <SplitCardButton href="#shop">View Collection</SplitCardButton>
        </SplitCard>
      </SplitSection>
    </AnimateOnScreen>

    <AnimateOnScreen>
      <ShopsSection id="saloon">
        <ShopsHeading>The Barber Shops</ShopsHeading>
        <ShopsText>
          Classic energy in modern spaces. Find the closest shop where the
          ritual starts with hair, routine, and identity.
        </ShopsText>
        <ShopsRow>
          <ShopCard>
            <ShopCardImage />
            <ShopCardContent>
              <ShopCardTitle>Amsterdam Saloon</ShopCardTitle>
              <ShopCardMeta>Downtown ritual house</ShopCardMeta>
            </ShopCardContent>
          </ShopCard>
          <ShopCard>
            <ShopCardImage secondary />
            <ShopCardContent>
              <ShopCardTitle>Los Angeles House</ShopCardTitle>
              <ShopCardMeta>
                Where morning routines meet creative life
              </ShopCardMeta>
            </ShopCardContent>
          </ShopCard>
        </ShopsRow>
      </ShopsSection>
    </AnimateOnScreen>

    <AnimateOnScreen>
      <StorySection>
        <StoryGrid>
          <StoryText>
            To celebrate a new era of the Saloon, we built a page for the hair,
            the rituals, and the small acts of care that shape how you show up.
          </StoryText>
          <StoryPanel>
            <StoryPanelTitle>Stories from the dressing table</StoryPanelTitle>
            <StoryPanelBody>
              13 years ago we set out to build a space where routine became
              identity. The Saloon is the place where waking up becomes a part
              of your story, and every morning practice feels intentional.
            </StoryPanelBody>
            <Signature>Stay Handsome</Signature>
          </StoryPanel>
        </StoryGrid>
      </StorySection>
    </AnimateOnScreen>
  </Page>
);

export default React.memo(StingSaloon);
