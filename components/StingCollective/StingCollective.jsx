import React from 'react';
import AnimateOnScreen from '../AnimateOnScreen';
import {
  Page,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionHeading,
  SectionText,
  Timeline,
  TimelineItem,
  CTA,
  TierGrid,
  TierCard,
  TierTitle,
  TierSubtitle,
  BenefitsList,
  BenefitItem,
  TierActions,
  ActionButton,
} from './styles';
import MembahGrid from './MembahGrid';

const StingCollective = () => {
  return (
    <Page>
      <AnimateOnScreen>
        <Hero>
          <HeroTitle>The Sting Collective</HeroTitle>
          <HeroSubtitle>
            A creative collective crafting bold narratives for culture, film,
            and commerce.
          </HeroSubtitle>
        </Hero>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Membahs</SectionHeading>
          <SectionText>
            Core members and collaborators from the collective.
          </SectionText>

          <MembahGrid />
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Tiers & Membership</SectionHeading>
          <SectionText>
            The Collective is organised across tiers that reflect involvement
            and access — from our core veterans to collaborators and supporters.
          </SectionText>

          <TierGrid>
            <TierCard>
              <TierTitle>Veterans</TierTitle>
              <TierSubtitle>
                Founding collaborators & core creative partners.
              </TierSubtitle>
              <BenefitsList>
                <BenefitItem>
                  Priority commissioning and creative briefs
                </BenefitItem>
                <BenefitItem>Revenue share on select projects</BenefitItem>
                <BenefitItem>Invitations to closed studio sessions</BenefitItem>
              </BenefitsList>
              <TierActions>
                <ActionButton href="#">Register</ActionButton>
                <ActionButton href="#">Login</ActionButton>
              </TierActions>
            </TierCard>

            <TierCard>
              <TierTitle>Membahs</TierTitle>
              <TierSubtitle>
                Paid members with access to drops and events.
              </TierSubtitle>
              <BenefitsList>
                <BenefitItem>Early access to releases</BenefitItem>
                <BenefitItem>Discounts on merchandise and services</BenefitItem>
                <BenefitItem>Member-only events and talks</BenefitItem>
              </BenefitsList>
              <TierActions>
                <ActionButton href="#">Register</ActionButton>
                <ActionButton href="#">Login</ActionButton>
              </TierActions>
            </TierCard>

            <TierCard>
              <TierTitle>Community</TierTitle>
              <TierSubtitle>Public supporters and collaborators.</TierSubtitle>
              <BenefitsList>
                <BenefitItem>
                  Newsletter with behind-the-scenes content
                </BenefitItem>
                <BenefitItem>Open calls for collaborations</BenefitItem>
                <BenefitItem>
                  Access to public screenings & showcases
                </BenefitItem>
              </BenefitsList>
              <TierActions>
                <ActionButton href="#">Join Newsletter</ActionButton>
              </TierActions>
            </TierCard>

            <TierCard>
              <TierTitle>Affiliates</TierTitle>
              <TierSubtitle>
                Studios, brands and partner organisations.
              </TierSubtitle>
              <BenefitsList>
                <BenefitItem>Co-promotion & referral opportunities</BenefitItem>
                <BenefitItem>
                  Priority vendor access for productions
                </BenefitItem>
                <BenefitItem>Partner showcase slots</BenefitItem>
              </BenefitsList>
              <TierActions>
                <ActionButton href="#">Contact Us</ActionButton>
              </TierActions>
            </TierCard>
          </TierGrid>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Manifesto</SectionHeading>
          <SectionText>
            We believe in work that moves people — emotionally, intellectually,
            and physically. We embrace risk, celebrate craft, and center
            curiosity. Design is our language; culture is our medium. The
            collective exists to connect ideas with audiences through
            uncompromising execution.
          </SectionText>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Mission & Vision</SectionHeading>
          <SectionText>
            Mission: To create experiences and identities that amplify stories
            and drive cultural impact.
          </SectionText>
          <SectionText>
            Vision: To be a home for multidisciplinary collaborators who push
            the boundaries of storytelling, technology, and commerce.
          </SectionText>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Our History</SectionHeading>
          <Timeline>
            <TimelineItem>
              <strong>2012</strong> — Founded as a two-person studio focused on
              branding and motion.
            </TimelineItem>
            <TimelineItem>
              <strong>2016</strong> — Expanded into interactive and product
              work, partnering with entertainment brands.
            </TimelineItem>
            <TimelineItem>
              <strong>2020</strong> — Launched the collective model to gather
              producers, directors, and technologists.
            </TimelineItem>
            <TimelineItem>
              <strong>Today</strong> — Operating across Amsterdam and Los
              Angeles with a growing global roster of collaborators.
            </TimelineItem>
          </Timeline>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Join Us</SectionHeading>
          <SectionText>
            We regularly collaborate with artists, filmmakers, and studios. For
            inquiries, creative proposals, or to join the collective, reach out
            at inquiries@stinginc.com
          </SectionText>
          <CTA href="mailto:inquiries@stinginc.com">Contact the Collective</CTA>
        </Section>
      </AnimateOnScreen>
    </Page>
  );
};

export default React.memo(StingCollective);
