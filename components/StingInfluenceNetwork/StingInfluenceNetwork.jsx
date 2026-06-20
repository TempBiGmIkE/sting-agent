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
  Section,
  SectionTitle,
  SectionSubtitle,
  PillarsGrid,
  PillarCard,
  PillarNumber,
  PillarTitle,
  PillarDescription,
  ArchitectureSection,
  HierarchyGrid,
  HierarchyLevel,
  LevelTitle,
  LevelDescription,
  LevelBenefits,
  BenefitItem,
  MicroeconomiesGrid,
  MicroeconomyCard,
  EconomyIcon,
  EconomyTitle,
  EconomyDescription,
  ContentCampsSection,
  ContentCampsGrid,
  CampsContent,
  CampsList,
  CampsItem,
  CampsIcon,
  CampsText,
  CampsVisual,
  URLToIRLSection,
  ClosedLoopGrid,
  LoopStepCard,
  StepNumber,
  StepTitle,
  StepDescription,
  BottomLineSection,
  BottomLineTitle,
  BottomLineText,
  BottomLineHighlight,
  CTAButtons,
  TalentDevelopmentSection,
  DevFeatureGrid,
  DevFeatureCard,
  DevFeatureIcon,
  DevFeatureTitle,
  DevFeatureText,
} from './styles';

const pillarData = [
  {
    number: '1',
    title: 'Node-and-Spoke Architecture',
    description: 'A structured hierarchy led by Anchor Nodes that scales through niche Squad Leads dedicated to each of our core lifestyle micro-economies, with clear performance-based tiers for creators.',
  },
  {
    number: '2',
    title: 'Systemic Talent Development',
    description: 'A creator school that treats influencers as business owners, teaching data literacy, conversion psychology, and trigger mastery to build predictable revenue engines.',
  },
  {
    number: '3',
    title: 'High-Velocity Content Camps',
    description: 'Intensive collaborative residencies bringing creators together for cross-pollination, gamified challenges, and reality-style leaderboards to level up talent.',
  },
  {
    number: '4',
    title: 'URL-to-IRL Closed Loop',
    description: 'Merging digital hype with real-world community trust through live creation pop-ups, scarcity drops, and direct checkout conversions.',
  },
];

const hierarchyTiers = [
  {
    title: 'Anchor Node',
    description: 'The high-performing, culturally credible center of the entire network.',
    benefits: ['Brand partnerships', 'Revenue share', 'Squad lead training', 'Strategic planning'],
  },
  {
    title: 'Tier 1 Pro',
    description: 'Elite creators earning base pay, high commissions, and exclusive collective perks.',
    benefits: ['Base pay', 'Performance commission', 'Content collaborations', 'Priority access'],
  },
  {
    title: 'Tier 2 Creator',
    description: 'Growing talent with proven conversion rates and audience engagement.',
    benefits: ['Product seeding', 'Commission structure', 'Training access', 'Community events'],
  },
  {
    title: 'Tier 3 Seed',
    description: 'Emerging creators receiving seed products to test and develop creative output.',
    benefits: ['Product drops', 'Creative feedback', 'Platform access', 'Network intro'],
  },
];

const microeconomies = [
  {
    icon: '🏪',
    title: 'Sting Store',
    description: 'Entertainment & Merch aggregation with curated lifestyle drops.',
  },
  {
    icon: '💄',
    title: 'Venus Beauty',
    description: 'Aesthetics ecosystem for skincare, cosmetics, and beauty culture.',
  },
  {
    icon: '⚙️',
    title: 'Tech Haven',
    description: 'Electronics and gear reviews with authentic creator unboxings.',
  },
  {
    icon: '💪',
    title: 'GymLunch',
    description: 'Health & fitness community with nutrition and wellness integration.',
  },
];

const contentCampFeatures = [
  {
    icon: '🤝',
    title: 'Cross-Pollination',
    text: 'Fitness creators team with gear reviewers to expand audiences instantly.',
  },
  {
    icon: '🏆',
    title: 'Gamified Competition',
    text: 'Reality-style leaderboards and challenges to unlock elite positions.',
  },
  {
    icon: '📹',
    title: 'Content Loop Generation',
    text: 'Behind-the-scenes drama becomes viral media, funding more camps.',
  },
  {
    icon: '🎯',
    title: 'Intensive Residencies',
    text: 'High-velocity sprints creating authentic, consistent lifestyle content.',
  },
];

const closedLoopSteps = [
  {
    number: '1',
    title: 'Digital Hype Generation',
    description: 'The S.I.N. network creates authentic, influencer-driven viral loops across social.',
  },
  {
    number: '2',
    title: 'Physical Pop-Up Activation',
    description: 'Weekly raw, industrial-minimalist content stations merge online attention offline.',
  },
  {
    number: '3',
    title: 'Scarcity Drop Trigger',
    description: 'Time-sensitive product drops and exclusive event access force immediate conversion.',
  },
  {
    number: '4',
    title: 'Direct Checkout Loop',
    description: 'Real-world traffic converts to owned customer data and repeat purchases.',
  },
];

const talentDevelopmentFeatures = [
  {
    icon: '📊',
    title: 'Data Literacy',
    text: 'Learn conversion metrics and consumer psychology.',
  },
  {
    icon: '⚡',
    title: 'Trigger Mastery',
    text: 'Turn curiosity into urgent, predictable action.',
  },
  {
    icon: '📈',
    title: 'Pipeline Vetting',
    text: 'High performers automatically funnel into live campaigns.',
  },
  {
    icon: '💼',
    title: 'Business Owner Mindset',
    text: 'Treated as entrepreneurs, not just personalities.',
  },
];

const StingInfluenceNetwork = () => (
  <Page>
    {/* Hero Section */}
    <AnimateOnScreen>
      <Hero>
        <HeroCopy>
          <Eyebrow>S.I.N.</Eyebrow>
          <HeroTitle>
            The Predictable Influence Engine Transforming Creator Hype Into Direct Revenue
          </HeroTitle>
          <HeroText>
            The STING Influence Network operates as a full-stack distribution infrastructure that
            replaces transactional agency models with a gamified, structured ecosystem. We turn
            rented social media attention into owned customer data through predictable traffic and
            cultural validation.
          </HeroText>
          <HeroActions>
            <PrimaryButton href="#join">Join S.I.N.</PrimaryButton>
            <SecondaryButton href="#learn">Explore the Network</SecondaryButton>
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
              <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#FF0000', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            {/* Network node visualization */}
            <circle cx="250" cy="250" r="120" fill="url(#networkGrad)" opacity="0.15" />
            <circle cx="250" cy="250" r="120" stroke="#FF0000" strokeWidth="2" fill="none" opacity="0.4" />
            <circle cx="250" cy="250" r="20" fill="#FF0000" />
            {/* Surrounding nodes */}
            <circle cx="150" cy="150" r="12" fill="#FF0000" opacity="0.6" />
            <circle cx="350" cy="150" r="12" fill="#FF0000" opacity="0.6" />
            <circle cx="150" cy="350" r="12" fill="#FF0000" opacity="0.6" />
            <circle cx="350" cy="350" r="12" fill="#FF0000" opacity="0.6" />
            {/* Connection lines */}
            <line x1="250" y1="250" x2="150" y2="150" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="350" y2="150" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="150" y2="350" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="350" y2="350" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </HeroVisual>
      </Hero>
    </AnimateOnScreen>

    {/* The Four Pillars */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>The Four Foundational Pillars</SectionTitle>
        <SectionSubtitle>
          A structured framework that scales creator networks from transactional chaos to
          predictable, owned customer acquisition.
        </SectionSubtitle>

        <PillarsGrid>
          {pillarData.map(pillar => (
            <PillarCard key={pillar.number}>
              <PillarNumber>{pillar.number}</PillarNumber>
              <PillarTitle>{pillar.title}</PillarTitle>
              <PillarDescription>{pillar.description}</PillarDescription>
            </PillarCard>
          ))}
        </PillarsGrid>
      </Section>
    </AnimateOnScreen>

    {/* Node-and-Spoke Architecture */}
    <AnimateOnScreen>
      <Section>
        <ArchitectureSection>
          <SectionTitle>The Node-and-Spoke Hierarchy</SectionTitle>
          <SectionSubtitle>
            A scalable structure where an Anchor Node leads Squad Leads across our four core
            lifestyle micro-economies, with clear performance-based progression paths.
          </SectionSubtitle>

          <HierarchyGrid>
            {hierarchyTiers.map((tier, idx) => (
              <HierarchyLevel key={idx}>
                <LevelTitle>{tier.title}</LevelTitle>
                <LevelDescription>{tier.description}</LevelDescription>
                <LevelBenefits>
                  {tier.benefits.map((benefit, bidx) => (
                    <BenefitItem key={bidx}>{benefit}</BenefitItem>
                  ))}
                </LevelBenefits>
              </HierarchyLevel>
            ))}
          </HierarchyGrid>
        </ArchitectureSection>
      </Section>
    </AnimateOnScreen>

    {/* Four Microeconomies */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>The Four Core Lifestyle Micro-Economies</SectionTitle>
        <SectionSubtitle>
          Each micro-economy has its own Squad Lead, creator tier, and direct-to-consumer
          distribution channels.
        </SectionSubtitle>

        <MicroeconomiesGrid>
          {microeconomies.map((eco, idx) => (
            <MicroeconomyCard key={idx}>
              <EconomyIcon>{eco.icon}</EconomyIcon>
              <EconomyTitle>{eco.title}</EconomyTitle>
              <EconomyDescription>{eco.description}</EconomyDescription>
            </MicroeconomyCard>
          ))}
        </MicroeconomiesGrid>
      </Section>
    </AnimateOnScreen>

    {/* Systemic Talent Development */}
    <AnimateOnScreen>
      <Section>
        <TalentDevelopmentSection>
          <SectionTitle>Systemic Talent Development: The Creator School</SectionTitle>
          <SectionSubtitle>
            Inspired by networks like Oren Meets World, we treat creators as business owners
            with a structured curriculum in data literacy and conversion psychology.
          </SectionSubtitle>

          <DevFeatureGrid>
            {talentDevelopmentFeatures.map((feature, idx) => (
              <DevFeatureCard key={idx}>
                <DevFeatureIcon>{feature.icon}</DevFeatureIcon>
                <DevFeatureTitle>{feature.title}</DevFeatureTitle>
                <DevFeatureText>{feature.text}</DevFeatureText>
              </DevFeatureCard>
            ))}
          </DevFeatureGrid>

          <div style={{ marginTop: '40px', padding: '32px', background: 'rgba(255, 0, 0, 0.05)', borderLeft: '4px solid #FF0000', borderRadius: '4px' }}>
            <p style={{ opacity: 0.9, lineHeight: 1.8, margin: 0 }}>
              The Creator School serves as a <strong>vetting ground</strong> for talent. High-performing creators
              are automatically funneled into live brand campaigns within the four micro-economies, creating a
              predictable pipeline of validated, conversion-proven talent.
            </p>
          </div>
        </TalentDevelopmentSection>
      </Section>
    </AnimateOnScreen>

    {/* High-Velocity Content Camps */}
    <AnimateOnScreen>
      <Section>
        <ContentCampsSection>
          <SectionTitle>High-Velocity Content Camps</SectionTitle>
          <SectionSubtitle>
            Intensive collaborative residencies that cross-pollinate audiences, gamify creator
            performance, and generate self-sustaining viral media loops.
          </SectionSubtitle>

          <ContentCampsGrid>
            <CampsContent>
              <CampsList>
                {contentCampFeatures.map((feature, idx) => (
                  <CampsItem key={idx}>
                    <CampsIcon>{feature.icon}</CampsIcon>
                    <div>
                      <CampsText>
                        <strong>{feature.title}:</strong> {feature.text}
                      </CampsText>
                    </div>
                  </CampsItem>
                ))}
              </CampsList>
            </CampsContent>

            <CampsVisual>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                style={{ maxWidth: '280px', maxHeight: '280px' }}
              >
                <defs>
                  <linearGradient id="campGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 0.6 }} />
                    <stop offset="100%" style={{ stopColor: '#FF0000', stopOpacity: 0.2 }} />
                  </linearGradient>
                </defs>
                {/* Camp illustration */}
                <rect x="50" y="100" width="200" height="130" fill="url(#campGrad)" opacity="0.2" stroke="#FF0000" strokeWidth="2" />
                {/* Tent peak */}
                <polygon points="100,80 80,120 120,120" fill="none" stroke="#FF0000" strokeWidth="2" opacity="0.6" />
                <polygon points="200,80 180,120 220,120" fill="none" stroke="#FF0000" strokeWidth="2" opacity="0.6" />
                {/* People inside */}
                <circle cx="110" cy="140" r="8" fill="#FF0000" opacity="0.5" />
                <circle cx="150" cy="140" r="8" fill="#FF0000" opacity="0.5" />
                <circle cx="190" cy="140" r="8" fill="#FF0000" opacity="0.5" />
              </svg>
            </CampsVisual>
          </ContentCampsGrid>
        </ContentCampsSection>
      </Section>
    </AnimateOnScreen>

    {/* URL-to-IRL Closed Loop */}
    <AnimateOnScreen>
      <Section>
        <URLToIRLSection>
          <SectionTitle>The URL-to-IRL Closed Loop</SectionTitle>
          <SectionSubtitle>
            Merging digital hype with tangible, real-world community trust through live
            creation pop-ups and scarcity-driven conversions.
          </SectionSubtitle>

          <ClosedLoopGrid>
            {closedLoopSteps.map((step, idx) => (
              <LoopStepCard key={idx}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </LoopStepCard>
            ))}
          </ClosedLoopGrid>

          <div style={{ marginTop: '40px', padding: '32px', background: 'rgba(255, 0, 0, 0.05)', borderRadius: '8px' }}>
            <p style={{ opacity: 0.9, lineHeight: 1.8, margin: 0 }}>
              <strong>Live Creation Pop-Ups:</strong> Weekly activations feature raw, industrial-minimalist
              &quot;Content Stations&quot; where influencers, designers, and customers collaborate in real-time.
              <br /><br />
              <strong>Scarcity Drops:</strong> Time-sensitive product drops and exclusive event access paired
              with pop-ups force online hype to instantly materialize into real-world traffic, lines, and
              direct checkout conversions.
            </p>
          </div>
        </URLToIRLSection>
      </Section>
    </AnimateOnScreen>

    {/* Bottom Line */}
    <AnimateOnScreen>
      <BottomLineSection>
        <BottomLineTitle>The Bottom Line</BottomLineTitle>
        <BottomLineText>
          The STING Influence Network isn&apos;t selling <span style={{ fontStyle: 'italic' }}>likes</span>. It
          provides the <BottomLineHighlight>traffic and validation engine</BottomLineHighlight> that populates
          the STGSYNERGY aggregators. By controlling both the marketplace infrastructure and the creator
          network driving the eyeballs, S.I.N. guarantees brands a complete, self-sustaining loop that turns{' '}
          <BottomLineHighlight>rented social media attention into owned customer data</BottomLineHighlight>.
        </BottomLineText>
        <CTAButtons>
          <PrimaryButton href="#apply">Apply to S.I.N.</PrimaryButton>
          <SecondaryButton href="#contact">Contact a Squad Lead</SecondaryButton>
        </CTAButtons>
      </BottomLineSection>
    </AnimateOnScreen>
  </Page>
);

export default React.memo(StingInfluenceNetwork);
