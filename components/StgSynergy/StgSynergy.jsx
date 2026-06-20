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
  PhilosophyGrid,
  PhilosophyCard,
  PhilosophyNumber,
  PhilosophyTitle,
  PhilosophyDescription,
  StructureSection,
  StructureVisual,
  StructureContent,
  StructureItem,
  StructureLabel,
  StructureHeading,
  StructureDescription,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  ModelComparison,
  ComparisonCard,
  ComparisonTitle,
  ComparisonList,
  ComparisonItem,
  ParticipationGuide,
  StepCard,
  StepNumber,
  StepTitle,
  StepDescription,
  EcosystemMap,
  EcosystemNode,
  NodeTitle,
  NodeDescription,
  CTASection,
  CTATitle,
  CTAText,
  CTAButtons,
} from './styles';

const philosophyPillars = [
  {
    number: '01',
    title: 'Divide & Conquer',
    description: 'Break down complex projects into manageable parts. No single stakeholder bears all responsibility or risk alone.',
  },
  {
    number: '02',
    title: 'Shared Responsibility',
    description: 'Distribute risk and reward across the collective. Everyone invests, everyone benefits from growth.',
  },
  {
    number: '03',
    title: 'Community-Driven',
    description: 'Strength in numbers. Collaborate with complementary brands and creators to amplify reach and impact.',
  },
  {
    number: '04',
    title: 'Ecosystem Thinking',
    description: 'Build systems where adjacent products and services create natural synergies and customer value.',
  },
];

const benefits = [
  {
    icon: '📊',
    title: 'Shared Revenue Model',
    description: 'Transparent profit-sharing means brands grow together without individual stakeholder risk.',
  },
  {
    icon: '🤝',
    title: 'Collaborative Networks',
    description: 'Access to a roster of complementary brands, producers, and distribution channels.',
  },
  {
    icon: '🎯',
    title: 'Focused Execution',
    description: 'By dividing tasks and goals, teams stay lean, agile, and outcomes-focused.',
  },
  {
    icon: '🚀',
    title: 'Amplified Reach',
    description: 'Leverage the combined audience and credibility of the entire Synergy network.',
  },
  {
    icon: '💡',
    title: 'Creative Direction',
    description: 'Access to Sting&apos;s design language and strategic direction from day one.',
  },
  {
    icon: '🏆',
    title: 'Brand Credibility',
    description: 'Participate in a curated collective of quality-focused partners and creators.',
  },
];

const participationSteps = [
  {
    number: '1',
    title: 'Pitch Your Vision',
    description: 'Submit your brand, project, or creative initiative and share how it fits the Synergy ecosystem.',
  },
  {
    number: '2',
    title: 'Collaborative Review',
    description: 'Work with the Synergy council to align on goals, structure, and commitment levels.',
  },
  {
    number: '3',
    title: 'Co-Create Framework',
    description: 'Define your role, responsibilities, revenue share, and integration with complementary partners.',
  },
  {
    number: '4',
    title: 'Launch & Scale',
    description: 'Go live with support from Sting Studio, Sting Store, and the collective community.',
  },
];

const ecosystemNodes = [
  {
    title: 'Sting Collective',
    description: 'Core creative partners, veterans, and membahs driving culture and narrative.',
  },
  {
    title: 'Sting Studio',
    description: 'Artist development, session booking, and production collaboration hub.',
  },
  {
    title: 'Sting Store',
    description: 'Brands aggregating lifestyle and cultural products under unified platform.',
  },
  {
    title: 'Synergy Partners',
    description: 'Complementary services, studios, and brands enhancing the ecosystem.',
  },
  {
    title: 'Community',
    description: 'Supporters, fans, and emerging creators discovering and engaging with partners.',
  },
  {
    title: 'Distribution',
    description: 'Multi-channel reach across events, digital platforms, and retail.',
  },
];

const StgSynergy = () => (
  <Page>
    {/* Hero Section */}
    <AnimateOnScreen>
      <Hero>
        <HeroCopy>
          <Eyebrow>STG Synergy</Eyebrow>
          <HeroTitle>
            Divide, Conquer, and Build Together
          </HeroTitle>
          <HeroText>
            STG Synergy is how we operate at Sting Collective. It&apos;s a model for sharing
            risk, distributing responsibility, and multiplying impact. Brands and creators
            collaborate under a unified cultural identity—no single stakeholder bears all
            the burden, and everyone benefits from shared growth.
          </HeroText>
          <HeroActions>
            <PrimaryButton href="#participate">Join Synergy</PrimaryButton>
            <SecondaryButton href="#learn">Learn More</SecondaryButton>
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
              <linearGradient id="synergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#FF0000', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            {/* Network nodes representing synergy */}
            <circle cx="250" cy="250" r="120" fill="url(#synergyGrad)" opacity="0.1" />
            <circle cx="250" cy="250" r="100" stroke="#FF0000" strokeWidth="2" fill="none" opacity="0.4" />

            {/* Central node */}
            <circle cx="250" cy="250" r="30" fill="#FF0000" opacity="0.6" />

            {/* Surrounding nodes */}
            <circle cx="320" cy="200" r="20" fill="#FF0000" opacity="0.4" />
            <circle cx="340" cy="280" r="20" fill="#FF0000" opacity="0.4" />
            <circle cx="280" cy="340" r="20" fill="#FF0000" opacity="0.4" />
            <circle cx="180" cy="340" r="20" fill="#FF0000" opacity="0.4" />
            <circle cx="160" cy="280" r="20" fill="#FF0000" opacity="0.4" />
            <circle cx="180" cy="160" r="20" fill="#FF0000" opacity="0.4" />

            {/* Connection lines */}
            <line x1="250" y1="250" x2="320" y2="200" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="340" y2="280" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="280" y2="340" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="180" y2="340" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="160" y2="280" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
            <line x1="250" y1="250" x2="180" y2="160" stroke="#FF0000" strokeWidth="1.5" opacity="0.3" />
          </svg>
        </HeroVisual>
      </Hero>
    </AnimateOnScreen>

    {/* Core Philosophy */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Core Philosophy</SectionTitle>
        <SectionSubtitle>
          Built from how Sting Collective operates internally—now open to partners and creators.
        </SectionSubtitle>

        <PhilosophyGrid>
          {philosophyPillars.map(pillar => (
            <PhilosophyCard key={pillar.number}>
              <PhilosophyNumber>{pillar.number}</PhilosophyNumber>
              <PhilosophyTitle>{pillar.title}</PhilosophyTitle>
              <PhilosophyDescription>{pillar.description}</PhilosophyDescription>
            </PhilosophyCard>
          ))}
        </PhilosophyGrid>
      </Section>
    </AnimateOnScreen>

    {/* Program Structure */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>How Synergy Works</SectionTitle>

        <StructureSection>
          <StructureContent>
            <StructureItem>
              <StructureLabel>Foundation</StructureLabel>
              <StructureHeading>Shared Infrastructure</StructureHeading>
              <StructureDescription>
                Partners leverage Sting&apos;s brand identity, creative direction, and
                operational systems to launch and scale quickly.
              </StructureDescription>
            </StructureItem>

            <StructureItem>
              <StructureLabel>Model</StructureLabel>
              <StructureHeading>Risk Distribution</StructureHeading>
              <StructureDescription>
                Projects are structured so multiple stakeholders share investment,
                responsibility, and reward equally.
              </StructureDescription>
            </StructureItem>

            <StructureItem>
              <StructureLabel>Growth</StructureLabel>
              <StructureHeading>Network Effects</StructureHeading>
              <StructureDescription>
                As each partner grows, the entire ecosystem benefits—through referrals,
                complementary products, and shared audiences.
              </StructureDescription>
            </StructureItem>

            <StructureItem>
              <StructureLabel>Independence</StructureLabel>
              <StructureHeading>Autonomy Within Alignment</StructureHeading>
              <StructureDescription>
                Partners maintain creative control while adhering to shared values,
                aesthetic, and ethical standards.
              </StructureDescription>
            </StructureItem>
          </StructureContent>

          <StructureVisual>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 400 500"
              style={{ maxWidth: '350px' }}
            >
              <defs>
                <linearGradient id="structureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FF0000', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#FF0000', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>

              {/* Layer 1 - Foundation */}
              <rect x="50" y="50" width="300" height="60" fill="url(#structureGrad)" stroke="#FF0000" strokeWidth="2" opacity="0.6" />
              <text x="200" y="85" textAnchor="middle" fill="#FF0000" fontSize="14" fontWeight="bold">
                Shared Infrastructure
              </text>

              {/* Layer 2 - Model */}
              <rect x="50" y="140" width="300" height="60" fill="url(#structureGrad)" stroke="#FF0000" strokeWidth="2" opacity="0.5" />
              <text x="200" y="175" textAnchor="middle" fill="#FF0000" fontSize="14" fontWeight="bold">
                Risk Distribution
              </text>

              {/* Layer 3 - Growth */}
              <rect x="50" y="230" width="300" height="60" fill="url(#structureGrad)" stroke="#FF0000" strokeWidth="2" opacity="0.4" />
              <text x="200" y="265" textAnchor="middle" fill="#FF0000" fontSize="14" fontWeight="bold">
                Network Effects
              </text>

              {/* Layer 4 - Independence */}
              <rect x="50" y="320" width="300" height="60" fill="url(#structureGrad)" stroke="#FF0000" strokeWidth="2" opacity="0.3" />
              <text x="200" y="355" textAnchor="middle" fill="#FF0000" fontSize="14" fontWeight="bold">
                Autonomy & Alignment
              </text>

              {/* Connection arrows */}
              <line x1="200" y1="110" x2="200" y2="140" stroke="#FF0000" strokeWidth="2" opacity="0.5" />
              <line x1="200" y1="200" x2="200" y2="230" stroke="#FF0000" strokeWidth="2" opacity="0.5" />
              <line x1="200" y1="290" x2="200" y2="320" stroke="#FF0000" strokeWidth="2" opacity="0.5" />
            </svg>
          </StructureVisual>
        </StructureSection>
      </Section>
    </AnimateOnScreen>

    {/* Benefits */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Why Join Synergy</SectionTitle>
        <SectionSubtitle>
          Concrete advantages for brands, studios, and creators participating in the network.
        </SectionSubtitle>

        <BenefitsGrid>
          {benefits.map((benefit, idx) => (
            <BenefitCard key={idx}>
              <BenefitIcon>
                <span role="img" aria-label={benefit.title}>
                  {benefit.icon}
                </span>
              </BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Section>
    </AnimateOnScreen>

    {/* Traditional vs Synergy */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>Synergy vs. Traditional Models</SectionTitle>
        <SectionSubtitle>
          How we differ from legacy aggregation approaches.
        </SectionSubtitle>

        <ModelComparison>
          <ComparisonCard>
            <ComparisonTitle>Traditional Aggregation</ComparisonTitle>
            <ComparisonList>
              <ComparisonItem positive={false}>
                Single entity controls all risk and reward
              </ComparisonItem>
              <ComparisonItem positive={false}>
                Partners have minimal creative input
              </ComparisonItem>
              <ComparisonItem positive={false}>
                Limited collaboration between partner brands
              </ComparisonItem>
              <ComparisonItem positive={false}>
                Partners compete for visibility within platform
              </ComparisonItem>
              <ComparisonItem positive={false}>
                Slow decision-making and execution
              </ComparisonItem>
              <ComparisonItem positive={false}>
                Low incentive for long-term partnership
              </ComparisonItem>
            </ComparisonList>
          </ComparisonCard>

          <ComparisonCard highlight={true}>
            <ComparisonTitle>STG Synergy Model</ComparisonTitle>
            <ComparisonList>
              <ComparisonItem positive={true}>
                Risk and reward distributed across all stakeholders
              </ComparisonItem>
              <ComparisonItem positive={true}>
                Partners shape direction and strategy
              </ComparisonItem>
              <ComparisonItem positive={true}>
                Built-in collaboration and network effects
              </ComparisonItem>
              <ComparisonItem positive={true}>
                Partners amplify each other&apos;s reach
              </ComparisonItem>
              <ComparisonItem positive={true}>
                Rapid iteration and agile execution
              </ComparisonItem>
              <ComparisonItem positive={true}>
                Strong incentive to grow the ecosystem together
              </ComparisonItem>
            </ComparisonList>
          </ComparisonCard>
        </ModelComparison>
      </Section>
    </AnimateOnScreen>

    {/* How to Participate */}
    <AnimateOnScreen>
      <Section id="participate">
        <SectionTitle>How to Participate</SectionTitle>
        <SectionSubtitle>
          Four steps to joining the Synergy ecosystem.
        </SectionSubtitle>

        <ParticipationGuide>
          {participationSteps.map(step => (
            <StepCard key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </ParticipationGuide>
      </Section>
    </AnimateOnScreen>

    {/* Ecosystem Map */}
    <AnimateOnScreen>
      <Section>
        <SectionTitle>The Synergy Ecosystem</SectionTitle>
        <SectionSubtitle>
          How Sting Studio, Sting Store, Sting Collective, and partners interconnect.
        </SectionSubtitle>

        <EcosystemMap>
          {ecosystemNodes.map((node, idx) => (
            <EcosystemNode key={idx}>
              <NodeTitle>{node.title}</NodeTitle>
              <NodeDescription>{node.description}</NodeDescription>
            </EcosystemNode>
          ))}
        </EcosystemMap>
      </Section>
    </AnimateOnScreen>

    {/* CTA Section */}
    <CTASection>
      <CTATitle>Ready to Build Something Bigger?</CTATitle>
      <CTAText>
        Whether you&apos;re a brand, studio, artist, or creator, Synergy is designed for partners
        who believe in shared growth and collaborative excellence. Let&apos;s conquer new territory
        together.
      </CTAText>
      <CTAButtons>
        <PrimaryButton href="mailto:synergy@stinginc.com">Start a Conversation</PrimaryButton>
        <SecondaryButton href="#learn">Read the Manifesto</SecondaryButton>
      </CTAButtons>
    </CTASection>
  </Page>
);

export default React.memo(StgSynergy);
