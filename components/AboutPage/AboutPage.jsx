import React from 'react';
import AnimateOnScreen from '../AnimateOnScreen';
import {
  PageContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  Section,
  SectionTitle,
  SectionContent,
  ValueGrid,
  ValueCard,
  ValueCardTitle,
  ValueCardText,
  TimelineSection,
  TimelineItem,
  TimelineYear,
  TimelineDescription,
  StatsSection,
  StatItem,
  StatNumber,
  StatLabel,
} from './styles';

const AboutPage = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <AnimateOnScreen>
        <HeroSection>
          <HeroTitle>About Stinginc</HeroTitle>
          <HeroSubtitle>
            Building the future through collaboration, innovation, and community
          </HeroSubtitle>
        </HeroSection>
      </AnimateOnScreen>

      {/* Mission Statement */}
      <AnimateOnScreen>
        <Section>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
            <p>
              Stinginc is more than a creative studio—we're a collective built
              on the principle that the future is created by those who seize it.
              We are an integrated, full-service creative collective offering
              video production, creative development, and post-production
              services to artists, entrepreneurs, and visionaries who refuse to
              play by outdated rules.
            </p>
            <p>
              We exist because we needed a seat at our own table. We didn't want
              to be invited to gatekept rooms where the house always wins. We
              wanted to control our future, not play in someone else's game.
              Stinginc is our answer—a space where creativity meets strategy,
              where collaboration drives innovation, and where the youth lead the
              way forward.
            </p>
          </SectionContent>
        </Section>
      </AnimateOnScreen>

      {/* Core Values */}
      <AnimateOnScreen>
        <Section>
          <SectionTitle>Core Values</SectionTitle>
          <ValueGrid>
            <ValueCard>
              <ValueCardTitle>Collaboration</ValueCardTitle>
              <ValueCardText>
                We believe in the power of working together. Our in-house team
                brings diverse perspectives and expertise, enabling us to deliver
                comprehensive creative solutions that no single talent could
                achieve alone.
              </ValueCardText>
            </ValueCard>
            <ValueCard>
              <ValueCardTitle>Agency</ValueCardTitle>
              <ValueCardText>
                We empower our clients and ourselves to take control of their
                narratives. Through strategic thinking and creative excellence,
                we help craft stories that matter and move audiences.
              </ValueCardText>
            </ValueCard>
            <ValueCard>
              <ValueCardTitle>Community</ValueCardTitle>
              <ValueCardText>
                Years of community building have shaped who we are. We invest in
                relationships, support emerging talent, and create spaces where
                the next generation can thrive and lead.
              </ValueCardText>
            </ValueCard>
            <ValueCard>
              <ValueCardTitle>Innovation</ValueCardTitle>
              <ValueCardText>
                We don't follow the rules—we create them. Our in-house systems
                and processes are built from the ground up to support bold,
                boundary-pushing creative work.
              </ValueCardText>
            </ValueCard>
          </ValueGrid>
        </Section>
      </AnimateOnScreen>

      {/* How We Work */}
      <AnimateOnScreen>
        <Section>
          <SectionTitle>How We Work</SectionTitle>
          <SectionContent>
            <p>
              At Stinginc, collaboration isn't just a buzzword—it's how we
              operate every day. Our integrated approach means your project
              benefits from:
            </p>
            <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
              <li style={{ marginBottom: '10px' }}>
                <strong>Multidisciplinary In-House Team:</strong> Videographers,
                creative directors, editors, designers, and strategists all
                under one roof, working seamlessly together to bring your vision
                to life.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Proven Systems:</strong> Years of community work and
                creative projects have allowed us to develop efficient,
                scalable processes that maintain quality while maximizing impact.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Strategic Thinking:</strong> We don't just make things
                look good—we make them work. Every project is rooted in strategy
                and designed to achieve real outcomes.
              </li>
              <li style={{ marginBottom: '10px' }}>
                <strong>Community Connection:</strong> Our deep ties to the
                community give us unique insights and access to authentic voices
                and stories that resonate.
              </li>
            </ul>
          </SectionContent>
        </Section>
      </AnimateOnScreen>

      {/* Our Journey */}
      <AnimateOnScreen>
        <Section>
          <SectionTitle>Our Journey</SectionTitle>
          <TimelineSection>
            <TimelineItem>
              <TimelineYear>2015</TimelineYear>
              <TimelineDescription>
                Stinginc started as a grassroots movement, connecting talented
                creators and community builders with a shared vision.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>2017</TimelineYear>
              <TimelineDescription>
                We formalized our approach, developing in-house systems and
                processes that would become our foundation for scalable,
                high-quality creative work.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>2019</TimelineYear>
              <TimelineDescription>
                Stinginc emerged as a recognized creative force, known for
                authentic storytelling and bold visual production that elevated
                emerging artists and brands.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>2021</TimelineYear>
              <TimelineDescription>
                We expanded our offerings to include full-service production,
                establishing ourselves as a comprehensive creative partner for
                ambitious projects.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <TimelineYear>Today</TimelineYear>
              <TimelineDescription>
                Stinginc continues to lead through collaboration, empowering the
                next generation of creators while delivering world-class creative
                work that drives real impact.
              </TimelineDescription>
            </TimelineItem>
          </TimelineSection>
        </Section>
      </AnimateOnScreen>

      {/* Impact */}
      <AnimateOnScreen>
        <Section>
          <SectionTitle>Our Impact</SectionTitle>
          <StatsSection>
            <StatItem>
              <StatNumber>100+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel>Artists & Brands Elevated</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>8+</StatNumber>
              <StatLabel>Years in Community Building</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>20+</StatNumber>
              <StatLabel>Team Members & Collaborators</StatLabel>
            </StatItem>
          </StatsSection>
          <SectionContent style={{ marginTop: '40px' }}>
            <p>
              But our real impact isn't measured in numbers alone. It's in the
              artists we've empowered, the stories we've elevated, and the
              community we've helped build. It's in the creators who started as
              collaborators and now lead their own visions. It's in the brands
              that trusted us to tell their stories authentically. And it's in
              the future we're building together—one where the next generation
              doesn't wait for invitations to the table. They build their own.
            </p>
          </SectionContent>
        </Section>
      </AnimateOnScreen>

      {/* Philosophy */}
      <AnimateOnScreen>
        <Section>
          <SectionTitle>Our Philosophy</SectionTitle>
          <SectionContent>
            <p>
              <strong>Everyone's got a story.</strong> And we don't stop till
              we've uncovered what makes yours matter.
            </p>
            <p>
              Street talents influence next generations. This isn't just a
              tagline for us—it's our operating principle. We invest in emerging
              voices, create platforms for underrepresented creators, and build
              systems that allow talent to rise regardless of background or
              privilege.
            </p>
            <p>
              Because the future matters. Our tomorrow is today. We need the
              youth at the table—not as an afterthought, but as architects of
              what's next. Stinginc is our commitment to making that possible.
            </p>
          </SectionContent>
        </Section>
      </AnimateOnScreen>
    </PageContainer>
  );
};

export default React.memo(AboutPage);
