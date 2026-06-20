import React from 'react';
import AnimateOnScreen from '../AnimateOnScreen';
import {
  Page,
  Hero,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionHeading,
  SectionSubtitle,
  CategoriesGrid,
  CategoryCard,
  CategoryName,
  CategoryDescription,
  AwardCard,
  AwardStatus,
  AwardTitle,
  Nominees,
  NomineeCard,
  NomineeName,
  NomineeInfo,
  Timeline,
  TimelineItem,
  TimelineDate,
  TimelineEvent,
  NominationCTA,
  CTATitle,
  CTAText,
  CTAButton,
  RegionHighlight,
  HighlightTitle,
  HighlightText,
} from './styles';

const awardCategories = [
  {
    id: 1,
    name: 'Best Music Artist',
    description: 'Recognizing outstanding achievements in African music',
  },
  {
    id: 2,
    name: 'Best Visual Artist',
    description: 'Celebrating exceptional visual creativity and innovation',
  },
  {
    id: 3,
    name: 'Best Filmmaker',
    description:
      'Honoring transformative storytelling and cinematic excellence',
  },
  {
    id: 4,
    name: 'Best Designer',
    description: 'Recognizing boundary-pushing design and creative direction',
  },
  {
    id: 5,
    name: 'Best Producer',
    description: 'Celebrating production excellence and creative vision',
  },
  {
    id: 6,
    name: 'Rising Star',
    description: 'Spotlighting emerging talent shaping the future',
  },
];

const awards2024 = [
  {
    id: 1,
    title: 'Best Music Artist',
    status: 'Announced',
    winner: 'Amyl & The Sniffers',
    nominees: [
      { name: 'Artist A', region: 'West Africa' },
      { name: 'Artist B', region: 'East Africa' },
      { name: 'Artist C', region: 'Southern Africa' },
      { name: 'Amyl & The Sniffers', region: 'Pan-African', winner: true },
    ],
  },
  {
    id: 2,
    title: 'Best Visual Artist',
    status: 'Announced',
    winner: 'Creative Visionary X',
    nominees: [
      { name: 'Visual Artist A', region: 'Central Africa' },
      { name: 'Visual Artist B', region: 'West Africa' },
      { name: 'Creative Visionary X', region: 'East Africa', winner: true },
    ],
  },
  {
    id: 3,
    title: 'Best Filmmaker',
    status: 'Announced',
    winner: 'Cinema Innovator',
    nominees: [
      { name: 'Filmmaker A', region: 'West Africa' },
      { name: 'Filmmaker B', region: 'East Africa' },
      { name: 'Cinema Innovator', region: 'Southern Africa', winner: true },
    ],
  },
];

const Awards = () => {
  return (
    <Page>
      <AnimateOnScreen>
        <Hero>
          <HeroTitle>Sting Awards</HeroTitle>
          <HeroSubtitle>
            Celebrating the next generation of African creatives pushing the
            boundaries of art, film, music, and design. A platform to honor
            innovation and elevate emerging voices.
          </HeroSubtitle>
        </Hero>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>About the Awards</SectionHeading>
          <SectionSubtitle>
            The Sting Awards recognize and celebrate exceptional creative talent
            across Africa. Like the Grammies for music and prestigious film
            festivals globally, we spotlight artists, filmmakers, designers, and
            producers who are shaping culture and pushing creative boundaries.
            Our mission is to amplify African voices and provide a platform for
            emerging talent to gain global recognition.
          </SectionSubtitle>
          <RegionHighlight>
            <HighlightTitle>
              <span role="img" aria-label="Globe showing Europe-Africa">
                🌍
              </span>{' '}
              Celebrating African Creativity
            </HighlightTitle>
            <HighlightText>
              From West to East, North to South — the Sting Awards honor
              creative excellence across the African continent and Pan-African
              collaborations.
            </HighlightText>
          </RegionHighlight>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Award Categories</SectionHeading>
          <SectionSubtitle>
            Six categories celebrating different disciplines in creative
            excellence
          </SectionSubtitle>
          <CategoriesGrid>
            {awardCategories.map(category => (
              <CategoryCard key={category.id}>
                <CategoryName>{category.name}</CategoryName>
                <CategoryDescription>
                  {category.description}
                </CategoryDescription>
              </CategoryCard>
            ))}
          </CategoriesGrid>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Sting Awards 2024</SectionHeading>
          <SectionSubtitle>
            Winners and nominees from the inaugural ceremony
          </SectionSubtitle>
          {awards2024.map(award => (
            <AwardCard key={award.id}>
              <AwardStatus winner>
                <span role="img" aria-label="Trophy">
                  🏆
                </span>{' '}
                {award.status}
              </AwardStatus>
              <AwardTitle>{award.title}</AwardTitle>
              <Nominees>
                {award.nominees.map((nominee, idx) => (
                  <NomineeCard key={idx} winner={nominee.winner}>
                    <NomineeName>{nominee.name}</NomineeName>
                    <NomineeInfo>{nominee.region}</NomineeInfo>
                    {nominee.winner && (
                      <NomineeInfo style={{ fontWeight: 600 }}>
                        <span role="img" aria-label="Trophy">
                          🏆
                        </span>{' '}
                        WINNER
                      </NomineeInfo>
                    )}
                  </NomineeCard>
                ))}
              </Nominees>
            </AwardCard>
          ))}
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Timeline</SectionHeading>
          <Timeline>
            <TimelineItem>
              <TimelineDate>March 2025</TimelineDate>
              <TimelineEvent>
                Nominations Open — Submit your best work
              </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>May 2025</TimelineDate>
              <TimelineEvent>
                Nominations Close & Jury Review Begins
              </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>July 2025</TimelineDate>
              <TimelineEvent>
                Finalists Announced Across All Categories
              </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>September 2025</TimelineDate>
              <TimelineEvent>
                Sting Awards Ceremony — Live Celebration of Winners
              </TimelineEvent>
            </TimelineItem>
          </Timeline>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Jury & Selection</SectionHeading>
          <SectionSubtitle>
            Our awards are judged by a diverse panel of industry leaders,
            curators, and established creatives from across Africa and beyond.
            The jury evaluates submissions based on innovation, craft, cultural
            impact, and artistic vision.
          </SectionSubtitle>
          <RegionHighlight>
            <HighlightTitle>Commitment to Emerging Voices</HighlightTitle>
            <HighlightText>
              We prioritize emerging and underrepresented artists. At least 40%
              of award categories are reserved for artists in the first 5 years
              of their careers.
            </HighlightText>
          </RegionHighlight>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>How to Submit</SectionHeading>
          <SectionSubtitle>
            Are you an African creative pushing boundaries? We want to see your
            work. Submissions open in March 2025.
          </SectionSubtitle>
          <NominationCTA>
            <CTATitle>Ready to Submit?</CTATitle>
            <CTAText>
              Join us in celebrating the next generation of African talent.
              Nominations open March 2025.
            </CTAText>
            <CTAButton href="mailto:awards@stinginc.com">
              Get Nomination Details
            </CTAButton>
          </NominationCTA>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Our Vision</SectionHeading>
          <SectionSubtitle>
            The Sting Awards are more than a ceremony — they&apos;re a movement
            to elevate African creativity on the global stage. We&apos;re
            building a legacy of recognition that empowers artists, supports
            emerging talent, and celebrates the cultural revolution happening
            across the continent.
          </SectionSubtitle>
        </Section>
      </AnimateOnScreen>
    </Page>
  );
};

export default React.memo(Awards);
