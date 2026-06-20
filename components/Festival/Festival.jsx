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
  InfoGrid,
  InfoCard,
  InfoLabel,
  InfoValue,
  LineupGrid,
  ArtistCard,
  ArtistName,
  ArtistGenre,
  Schedule,
  DaySchedule,
  DayTitle,
  TimeSlot,
  Time,
  Performance,
  PerformanceInfo,
  PerformanceArtist,
  PerformanceStage,
  HighlightCard,
  HighlightTitle,
  HighlightText,
  CTASection,
  CTATitle,
  CTAText,
  CTAButton,
  Features,
  FeatureItem,
  Badge,
} from './styles';

const lineupArtists = [
  { name: 'Burna Boy', genre: 'Afrobeats' },
  { name: 'Wizkid', genre: 'Afrobeats' },
  { name: 'Sarkodie', genre: 'Hip-Hop' },
  { name: 'Davido', genre: 'Afrobeats' },
  { name: 'Stormzy', genre: 'Grime' },
  { name: 'Tiwa Savage', genre: 'Afrobeats' },
  { name: 'Amyl & The Sniffers', genre: 'Punk' },
  { name: 'Nasty C', genre: 'Hip-Hop' },
  { name: 'Rema', genre: 'Afrobeats' },
  { name: 'Diamond Platnumz', genre: 'Bongo Flava' },
  { name: 'Mr. Eazi', genre: 'Afrobeats' },
  { name: 'Yemi Alade', genre: 'Afrobeats' },
];

const dayOne = [
  { time: '14:00', artist: 'Rising Star Showcase', stage: 'Discovery Stage' },
  { time: '15:30', artist: 'Diamond Platnumz', stage: 'Main Stage' },
  { time: '16:45', artist: 'Amyl & The Sniffers', stage: 'Electric Pier' },
  { time: '18:00', artist: 'Nasty C', stage: 'Main Stage' },
  { time: '19:30', artist: 'Tiwa Savage', stage: 'Main Stage' },
  {
    time: '21:00',
    artist: 'DJ Stretch & Bobbito Takeover',
    stage: 'Electric Pier',
  },
];

const dayTwo = [
  {
    time: '14:00',
    artist: 'Artist Talks & Masterclasses',
    stage: 'Creation Hub',
  },
  { time: '16:00', artist: 'Mr. Eazi', stage: 'Main Stage' },
  { time: '17:15', artist: 'Yemi Alade', stage: 'Main Stage' },
  { time: '18:45', artist: 'Stormzy', stage: 'Electric Pier' },
  { time: '20:00', artist: 'Sarkodie', stage: 'Main Stage' },
  { time: '21:30', artist: 'Rema', stage: 'Main Stage' },
];

const dayThree = [
  { time: '15:00', artist: 'Afrobeats Collective Set', stage: 'Main Stage' },
  { time: '16:30', artist: 'Wizkid', stage: 'Main Stage' },
  { time: '18:00', artist: 'Studio Sessions & Cypher', stage: 'Creation Hub' },
  { time: '19:30', artist: 'Davido', stage: 'Main Stage' },
  { time: '21:00', artist: 'Burna Boy (Headliner)', stage: 'Main Stage' },
  {
    time: '23:00',
    artist: 'After Party with Sting DJs',
    stage: 'Electric Pier',
  },
];

const Festival = () => {
  return (
    <Page>
      <AnimateOnScreen>
        <Hero>
          <HeroTitle>Sting Festival Africa</HeroTitle>
          <HeroSubtitle>
            The next generation music and culture festival celebrating emerging
            African artists, filmmakers, and creative innovators. Three days of
            performances, installations, collaborations, and culture.
          </HeroSubtitle>
        </Hero>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Festival Details</SectionHeading>
          <InfoGrid>
            <InfoCard>
              <InfoLabel>
                <span role="img" aria-label="Calendar">
                  📅
                </span>{' '}
                When
              </InfoLabel>
              <InfoValue>September 5-7, 2025</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>
                <span role="img" aria-label="Location pin">
                  📍
                </span>{' '}
                Where
              </InfoLabel>
              <InfoValue>Lagos, Nigeria</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>
                <span role="img" aria-label="Performing arts">
                  🎭
                </span>{' '}
                Capacity
              </InfoLabel>
              <InfoValue>15,000+ Attendees</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>
                <span role="img" aria-label="Globe showing Europe-Africa">
                  🌍
                </span>{' '}
                Experience
              </InfoLabel>
              <InfoValue>Pan-African Creative Platform</InfoValue>
            </InfoCard>
          </InfoGrid>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>About Sting Festival</SectionHeading>
          <SectionSubtitle>
            Sting Festival Africa is a celebration of the continent&apos;s
            creative revolution. Like Rolling Loud for hip-hop culture,
            we&apos;re building the premier platform where African artists,
            filmmakers, designers, and entrepreneurs gather to perform,
            collaborate, and shape culture.
          </SectionSubtitle>
          <HighlightCard>
            <HighlightTitle>Our Mission</HighlightTitle>
            <HighlightText>
              To create an immersive experience that amplifies African
              creativity, connects emerging talent with global audiences, and
              positions the continent at the center of global cultural
              conversation.
            </HighlightText>
          </HighlightCard>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Festival Experiences</SectionHeading>
          <Features>
            <FeatureItem>
              <strong>
                <span role="img" aria-label="Musical notes">
                  🎵
                </span>{' '}
                Multiple Stages
              </strong>{' '}
              — Main Stage for headliners, Discovery Stage for emerging artists,
              Electric Pier for electronic/experimental sounds, and more.
            </FeatureItem>
            <FeatureItem>
              <strong>
                <span role="img" aria-label="Clapperboard">
                  🎬
                </span>{' '}
                Film & Visual Arts
              </strong>{' '}
              — Premieres, screenings, and immersive visual installations from
              African filmmakers and digital artists.
            </FeatureItem>
            <FeatureItem>
              <strong>
                <span role="img" aria-label="Construction">
                  🏗️
                </span>{' '}
                Creation Hub
              </strong>{' '}
              — Workshops, studio sessions, production masterclasses, and
              networking for creative professionals.
            </FeatureItem>
            <FeatureItem>
              <strong>
                <span role="img" aria-label="Handshake">
                  🤝
                </span>{' '}
                Collaborations
              </strong>{' '}
              — Live collaborations, surprise sets, and jam sessions between
              featured artists.
            </FeatureItem>
            <FeatureItem>
              <strong>
                <span role="img" aria-label="Globe showing Europe-Africa">
                  🌍
                </span>{' '}
                Global Audience
              </strong>{' '}
              — Live streaming, partnerships with international media, and
              digital access for global fans.
            </FeatureItem>
            <FeatureItem>
              <strong>
                <span role="img" aria-label="Artist palette">
                  🎨
                </span>{' '}
                Marketplace
              </strong>{' '}
              — Merchandise, limited releases, and direct artist support through
              exclusive drops and experiences.
            </FeatureItem>
          </Features>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Lineup</SectionHeading>
          <SectionSubtitle>
            Curated artists across genres — from Afrobeats to electronic, punk
            to grime. Featuring established stars and rising talent.
          </SectionSubtitle>
          <LineupGrid>
            {lineupArtists.map((artist, idx) => (
              <ArtistCard key={idx}>
                <ArtistName>{artist.name}</ArtistName>
                <ArtistGenre>{artist.genre}</ArtistGenre>
              </ArtistCard>
            ))}
          </LineupGrid>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Festival Schedule</SectionHeading>
          <Schedule>
            <DaySchedule>
              <DayTitle>Day One — Friday, September 5</DayTitle>
              {dayOne.map((slot, idx) => (
                <TimeSlot key={idx}>
                  <Time>{slot.time}</Time>
                  <Performance>
                    <PerformanceInfo>
                      <PerformanceArtist>{slot.artist}</PerformanceArtist>
                      <PerformanceStage>{slot.stage}</PerformanceStage>
                    </PerformanceInfo>
                  </Performance>
                </TimeSlot>
              ))}
            </DaySchedule>

            <DaySchedule>
              <DayTitle>Day Two — Saturday, September 6</DayTitle>
              {dayTwo.map((slot, idx) => (
                <TimeSlot key={idx}>
                  <Time>{slot.time}</Time>
                  <Performance>
                    <PerformanceInfo>
                      <PerformanceArtist>{slot.artist}</PerformanceArtist>
                      <PerformanceStage>{slot.stage}</PerformanceStage>
                    </PerformanceInfo>
                  </Performance>
                </TimeSlot>
              ))}
            </DaySchedule>

            <DaySchedule>
              <DayTitle>Day Three — Sunday, September 7</DayTitle>
              {dayThree.map((slot, idx) => (
                <TimeSlot key={idx}>
                  <Time>{slot.time}</Time>
                  <Performance>
                    <PerformanceInfo>
                      <PerformanceArtist>{slot.artist}</PerformanceArtist>
                      <PerformanceStage>{slot.stage}</PerformanceStage>
                    </PerformanceInfo>
                  </Performance>
                </TimeSlot>
              ))}
            </DaySchedule>
          </Schedule>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Tickets & Access</SectionHeading>
          <HighlightCard>
            <Badge>Early Bird 30% Off</Badge>
            <HighlightTitle>Limited Early Access Available</HighlightTitle>
            <HighlightText>
              <strong>3-Day Pass:</strong> Full access to all stages,
              experiences, and events throughout the festival.
            </HighlightText>
            <HighlightText>
              <strong>Single Day Passes:</strong> Experience one day of
              performances and programming.
            </HighlightText>
            <HighlightText>
              <strong>VIP Experience:</strong> Premium seating, backstage
              access, artist meet & greets, exclusive lounge access.
            </HighlightText>
            <HighlightText>
              <strong>Creator Pass:</strong> For filmmakers, musicians, and
              artists — discounted or complimentary access to collaborate and
              showcase.
            </HighlightText>
          </HighlightCard>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Become a Sponsor or Partner</SectionHeading>
          <SectionSubtitle>
            Sting Festival Africa is a platform for brands committed to
            supporting African creativity. Partner with us to reach a global
            audience of creatives and culture enthusiasts.
          </SectionSubtitle>
          <HighlightCard>
            <HighlightTitle>Partnership Opportunities</HighlightTitle>
            <HighlightText>
              <strong>Title Sponsor</strong> — Major branding and program
              integration
            </HighlightText>
            <HighlightText>
              <strong>Stage Sponsor</strong> — Exclusive stage naming and
              visibility
            </HighlightText>
            <HighlightText>
              <strong>Experience Partner</strong> — Co-create installations,
              activations, or programming
            </HighlightText>
            <HighlightText>
              <strong>Media Partner</strong> — Distribution and content
              collaboration
            </HighlightText>
          </HighlightCard>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <CTASection>
            <CTATitle>Experience Sting Festival Africa</CTATitle>
            <CTAText>
              Join thousands of creatives, fans, and culture enthusiasts for
              three days celebrating African culture, music, and innovation.
            </CTAText>
            <CTAButton
              href="https://tickets.stinginc.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tickets
            </CTAButton>
            <CTAButton href="mailto:partnerships@stinginc.com">
              Become a Partner
            </CTAButton>
          </CTASection>
        </Section>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <Section>
          <SectionHeading>Stay Updated</SectionHeading>
          <SectionSubtitle>
            More lineup announcements, experiences, and special surprises coming
            soon. Follow us for updates.
          </SectionSubtitle>
          <HighlightCard>
            <HighlightText>
              <span role="img" aria-label="Email">
                📧
              </span>{' '}
              <strong>Subscribe to our newsletter</strong> for exclusive
              pre-sale access and festival updates.
            </HighlightText>
            <HighlightText>
              Follow @stinginc on all platforms for daily festival news and
              artist announcements.
            </HighlightText>
          </HighlightCard>
        </Section>
      </AnimateOnScreen>
    </Page>
  );
};

export default React.memo(Festival);
