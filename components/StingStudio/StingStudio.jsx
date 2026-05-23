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
  FeatureGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  Section,
  SectionTitle,
  SectionSubtitle,
  SessionBookingGrid,
  SessionCard,
  SessionType,
  SessionTitle,
  SessionDetails,
  BeatPackGrid,
  BeatPackCard,
  BeatPackContent,
  BeatPackGenre,
  BeatPackTitle,
  BeatPackStats,
  Stat,
  CollaborationGrid,
  CollaborationContent,
  CollaborationList,
  CollaborationItem,
  CollaborationCheck,
  CollaborationText,
  ArtistPortfolio,
  PortfolioItem,
  PortfolioArtist,
  PortfolioTrack,
  CTASection,
  CTATitle,
  CTAText,
  CTAButtons,
} from './styles';

const featuredSessions = [
  {
    id: 1,
    type: 'Production',
    title: 'Full Track Production',
    duration: '4-6 Hours',
    includes: ['Studio Time', 'Beat Production', 'Recording Setup', 'Basic Mix'],
  },
  {
    id: 2,
    type: 'Mixing',
    title: 'Professional Mixing Session',
    duration: '2-3 Hours',
    includes: ['Mixing Expertise', 'Sound Design', 'Arrangement', 'Vocal Effects'],
  },
  {
    id: 3,
    type: 'Collaboration',
    title: 'Artist Collaboration Day',
    duration: '6-8 Hours',
    includes: ['Co-Writing', 'Production', 'Feature Recording', 'Creative Direction'],
  },
  {
    id: 4,
    type: 'Mentorship',
    title: 'Artist Development Session',
    duration: '2 Hours',
    includes: ['Branding Consultation', 'Career Guidance', 'Portfolio Review', 'Growth Strategy'],
  },
];

const beatPacks = [
  {
    id: 1,
    title: 'Midnight Vibes',
    genre: 'Hip-Hop',
    beats: 10,
    files: '2.3GB',
  },
  {
    id: 2,
    title: 'Electric Dreams',
    genre: 'Electronic',
    beats: 15,
    files: '3.1GB',
  },
  {
    id: 3,
    title: 'Soul Essence',
    genre: 'R&B/Soul',
    beats: 12,
    files: '2.8GB',
  },
  {
    id: 4,
    title: 'Trap Evolution',
    genre: 'Trap',
    beats: 18,
    files: '3.5GB',
  },
  {
    id: 5,
    title: 'Indie Folk',
    genre: 'Indie',
    beats: 8,
    files: '1.9GB',
  },
  {
    id: 6,
    title: 'Jazz Fusion',
    genre: 'Jazz',
    beats: 11,
    files: '2.4GB',
  },
];

const collaborationFeatures = [
  'Connect with producers, engineers, and fellow artists',
  'Share works-in-progress and get real-time feedback',
  'Discover trending sounds and production techniques',
  'Build your creative network and fanbase simultaneously',
  'Access mentorship from industry professionals',
  'Collaborate on exclusive remix and feature projects',
];

const portfolioTracks = [
  { artist: 'Luna Echo', track: 'Midnight Dreams', plays: 2400 },
  { artist: 'Studio Beats', track: 'Electric Pulse', plays: 1800 },
  { artist: 'Rising Star', track: 'Golden Hour', plays: 3200 },
  { artist: 'Sound Architect', track: 'Digital Horizon', plays: 2100 },
  { artist: 'Beat Master', track: 'Vibes Only', plays: 2800 },
  { artist: 'Creative Minds', track: 'Future Sound', plays: 1600 },
];

const StingStudio = () => (
  <Page>
    {/* Hero Section */}
    <AnimateOnScreen>
      <Hero>
        <HeroCopy>
          <Eyebrow>Sting Studio</Eyebrow>
          <HeroTitle>
            The Creative Hub Where Artists Converge, Collaborate, and Conquer
          </HeroTitle>
          <HeroText>
            Sting Studio is your complete platform for artist development, session
            booking, creative collaboration, and music marketing. Book sessions,
            discover collaborators, refine your branding, and let your unreleased
            music work for you 24/7.
          </HeroText>
          <HeroActions>
            <PrimaryButton href="#book">Book Session</PrimaryButton>
            <SecondaryButton href="#explore">Explore Features</SecondaryButton>
          </HeroActions>
        </HeroCopy>

        <HeroVisual>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 500"
            style={{ maxWidth: '400px', maxHeight: '400px' }}
          >
            <defs>
              <linearGradient id="studioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#FF0000', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            {/* Stylized studio icon */}
            <circle cx="250" cy="250" r="200" fill="url(#studioGrad)" opacity="0.1" />
            <circle cx="250" cy="250" r="180" stroke="#FF0000" strokeWidth="2" fill="none" opacity="0.3" />
            <rect x="150" y="150" width="200" height="200" fill="none" stroke="#FF0000" strokeWidth="2" opacity="0.5" />
            <circle cx="250" cy="250" r="50" fill="#FF0000" opacity="0.3" />
            <circle cx="250" cy="250" r="40" stroke="#FF0000" strokeWidth="2" fill="none" opacity="0.6" />
          </svg>
        </HeroVisual>
      </Hero>
    </AnimateOnScreen>

    {/* Core Features */}
    <AnimateOnScreen>
      <FeatureGrid>
        <FeatureCard>
          <FeatureIcon>🎵</FeatureIcon>
          <FeatureTitle>Book Sessions</FeatureTitle>
          <FeatureDescription>
            Reserve studio time with top producers and engineers tailored to your project needs.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🤝</FeatureIcon>
          <FeatureTitle>Collaborate</FeatureTitle>
          <FeatureDescription>
            Connect with creatives worldwide. Build relationships that lead to breakthrough projects.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🎨</FeatureIcon>
          <FeatureTitle>Artist Development</FeatureTitle>
          <FeatureDescription>
            Get expert guidance on branding, direction, and strategic career growth from industry leaders.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🎧</FeatureIcon>
          <FeatureTitle>Beat Packs</FeatureTitle>
          <FeatureDescription>
            Access curated beat collections across genres to inspire and jumpstart your creative process.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>📁</FeatureIcon>
          <FeatureTitle>Media Management</FeatureTitle>
          <FeatureDescription>
            Store, organize, and share session files, recordings, and project assets securely in one place.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>📈</FeatureIcon>
          <FeatureTitle>Music Marketing</FeatureTitle>
          <FeatureDescription>
            Let your unreleased tracks market your brand 24/7. Gain discovery while you create.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </AnimateOnScreen>

    {/* Session Booking Section */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Book Your Perfect Session</SectionTitle>
        <SectionSubtitle>
          Choose from diverse session types designed to meet artists at every stage of their journey.
        </SectionSubtitle>

        <SessionBookingGrid>
          {featuredSessions.map(session => (
            <SessionCard key={session.id}>
              <SessionType>{session.type}</SessionType>
              <SessionTitle>{session.title}</SessionTitle>
              <SessionDetails>Duration: {session.duration}</SessionDetails>
              {session.includes.map((item, idx) => (
                <SessionDetails key={idx}>{item}</SessionDetails>
              ))}
            </SessionCard>
          ))}
        </SessionBookingGrid>
      </Section>
    </AnimateOnScreen>

    {/* Beat Packs Section */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Curated Beat Packs</SectionTitle>
        <SectionSubtitle>
          Explore production-ready beats across genres to fuel your creative vision.
        </SectionSubtitle>

        <BeatPackGrid>
          {beatPacks.map(pack => (
            <BeatPackCard key={pack.id}>
              <BeatPackContent>
                <BeatPackGenre>{pack.genre}</BeatPackGenre>
                <BeatPackTitle>{pack.title}</BeatPackTitle>
                <BeatPackStats>
                  <Stat>🎵 {pack.beats} Beats</Stat>
                  <Stat>💾 {pack.files}</Stat>
                </BeatPackStats>
              </BeatPackContent>
            </BeatPackCard>
          ))}
        </BeatPackGrid>
      </Section>
    </AnimateOnScreen>

    {/* Collaboration Hub Section */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Creative Collaboration Hub</SectionTitle>

        <CollaborationGrid>
          <CollaborationContent>
            <SectionSubtitle>
              Where Artists, Producers, and Creatives Converge to Build Tomorrow's Sound
            </SectionSubtitle>
            <p style={{ opacity: 0.85, lineHeight: 1.8, marginBottom: '32px' }}>
              The studio isn't just a place to make music—it's a community of innovators.
              Connect with like-minded creatives, share your vision, and discover untapped
              potential in collaboration. Every connection could be your next hit.
            </p>
          </CollaborationContent>

          <div>
            <CollaborationList>
              {collaborationFeatures.map((feature, idx) => (
                <CollaborationItem key={idx}>
                  <CollaborationCheck>✓</CollaborationCheck>
                  <CollaborationText>{feature}</CollaborationText>
                </CollaborationItem>
              ))}
            </CollaborationList>
          </div>
        </CollaborationGrid>
      </Section>
    </AnimateOnScreen>

    {/* Artist Development Section */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Artist Development & Direction</SectionTitle>
        <SectionSubtitle>
          Transform conversations into strategic branding, clear artistic direction, and
          sustainable career growth.
        </SectionSubtitle>

        <CollaborationGrid>
          <div>
            <CollaborationList>
              <CollaborationItem>
                <CollaborationCheck>→</CollaborationCheck>
                <CollaborationText>
                  <strong>Branding Strategy:</strong> Define your visual identity,
                  sound signature, and market positioning with expert consultants.
                </CollaborationText>
              </CollaborationItem>
              <CollaborationItem>
                <CollaborationCheck>→</CollaborationCheck>
                <CollaborationText>
                  <strong>Career Coaching:</strong> Navigate industry insights, collaborate
                  with the right people, and build a sustainable music career.
                </CollaborationText>
              </CollaborationItem>
              <CollaborationItem>
                <CollaborationCheck>→</CollaborationCheck>
                <CollaborationText>
                  <strong>Portfolio Development:</strong> Curate your best work and
                  showcase your evolution as a creative to industry professionals.
                </CollaborationText>
              </CollaborationItem>
              <CollaborationItem>
                <CollaborationCheck>→</CollaborationCheck>
                <CollaborationText>
                  <strong>Music Distribution:</strong> From unreleased tracks to finished
                  releases, manage your catalog and maximize reach across platforms.
                </CollaborationText>
              </CollaborationItem>
            </CollaborationList>
          </div>

          <CollaborationContent>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '16px', marginTop: 0 }}>
              Your Artists Are Talking
            </h4>
            <div style={{ opacity: 0.85, lineHeight: 1.8 }}>
              <p>
                &quot;The mentorship sessions at Sting Studio completely changed how I approach
                my music. I went from creating in isolation to building genuine relationships
                with other producers.&quot;
              </p>
              <p>
                <strong>— Creative Artist, NYC</strong>
              </p>
            </div>
          </CollaborationContent>
        </CollaborationGrid>
      </Section>
    </AnimateOnScreen>

    {/* Music Marketing & Portfolio Section */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Your Music Works 24/7</SectionTitle>
        <SectionSubtitle>
          Upload unreleased tracks and demos to your portfolio. Your music markets your brand
          while you create the next masterpiece.
        </SectionSubtitle>

        <ArtistPortfolio>
          {portfolioTracks.map((track, idx) => (
            <PortfolioItem key={idx}>
              <div>
                <PortfolioArtist>{track.artist}</PortfolioArtist>
                <PortfolioTrack>{track.track}</PortfolioTrack>
              </div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                ▶ {track.plays.toLocaleString()} Plays
              </div>
            </PortfolioItem>
          ))}
        </ArtistPortfolio>
      </Section>
    </AnimateOnScreen>

    {/* Session Media Management Section */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Session Media Hub</SectionTitle>
        <SectionSubtitle>
          Organize, store, and share all your session files, recordings, and project assets
          in a centralized, secure platform.
        </SectionSubtitle>

        <CollaborationGrid>
          <CollaborationContent>
            <CollaborationList>
              <CollaborationItem>
                <CollaborationCheck>💾</CollaborationCheck>
                <CollaborationText>
                  <strong>Secure Cloud Storage:</strong> All your recordings and project
                  files backed up and accessible anytime, anywhere.
                </CollaborationText>
              </CollaborationItem>
              <CollaborationItem>
                <CollaborationCheck>🔗</CollaborationCheck>
                <CollaborationText>
                  <strong>Easy Sharing:</strong> Generate secure links to share session
                  files with collaborators and producers.
                </CollaborationText>
              </CollaborationItem>
              <CollaborationItem>
                <CollaborationCheck>📊</CollaborationCheck>
                <CollaborationText>
                  <strong>Organization Tools:</strong> Tag, categorize, and search through
                  your entire music library instantly.
                </CollaborationText>
              </CollaborationItem>
              <CollaborationItem>
                <CollaborationCheck>✨</CollaborationCheck>
                <CollaborationText>
                  <strong>Version Control:</strong> Keep track of project iterations and
                  evolve your sound with confidence.
                </CollaborationText>
              </CollaborationItem>
            </CollaborationList>
          </CollaborationContent>

          <div style={{ opacity: 0.85, lineHeight: 1.8 }}>
            <p>
              Never lose a session again. With Sting Studio's media hub, every collaboration,
              every recording, and every creative spark is preserved and organized. Access
              your entire sonic history with powerful search and tagging capabilities.
            </p>
            <p>
              Collaborate seamlessly with your team. Share session files with one click and
              track changes as your project evolves. Your creative process, streamlined.
            </p>
          </div>
        </CollaborationGrid>
      </Section>
    </AnimateOnScreen>

    {/* CTA Section */}
    <CTASection>
      <CTATitle>Ready to Transform Your Creative Journey?</CTATitle>
      <CTAText>
        Join Sting Studio today and become part of a thriving community of artists,
        producers, and creative visionaries. Let's build something extraordinary together.
      </CTAText>
      <CTAButtons>
        <PrimaryButton href="#signup">Start Your Journey</PrimaryButton>
        <SecondaryButton href="#tour">Take the Tour</SecondaryButton>
      </CTAButtons>
    </CTASection>
  </Page>
);

export default React.memo(StingStudio);
