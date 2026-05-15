import React from 'react';
import AnimateOnScreen from '../AnimateOnScreen';
import servicesItems from '../../utils/constants/services-items';
import teamMembers from '../../utils/constants/team-membahs';
import {
  PageContainer,
  HeroSection,
  HeroTitle,
  HeroIntro,
  ServiceGrid,
  ServiceColumn,
  ServiceHeading,
  ServiceItem,
  LogoMarquee,
  LogosTrack,
  LogoBadge,
  MediaBlock,
  SectionText,
  SectionGroup,
  TeamGrid,
  TeamColumn,
  GroupHeading,
  TeamMemberCard,
  TeamMemberName,
  TeamMemberRole,
  ContactSection,
  ContactHeading,
  ContactRow,
  ContactLabel,
  ContactLink,
} from './styles';

const AboutPage = () => {
  return (
    <PageContainer>
      <AnimateOnScreen>
        <HeroSection>
          <HeroTitle>
            Stinginc creates design solutions for brands driving the
            <br />
            new wave in entertainment, culture, and commerce.
          </HeroTitle>
          <HeroIntro>
            We&apos;re a multidisciplinary creative studio rooted in branding,
            digital, and visual design, delivering work across all mediums and
            platforms. With a team of creatives, engineers, and producers, we
            provide full-service solutions, from concept through execution.
          </HeroIntro>
        </HeroSection>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <ServiceGrid>
          {servicesItems.map(([heading, services]) => (
            <ServiceColumn key={heading}>
              <ServiceHeading>{heading}</ServiceHeading>
              {services.map(service => (
                <ServiceItem key={service}>{service}</ServiceItem>
              ))}
            </ServiceColumn>
          ))}
        </ServiceGrid>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <LogoMarquee>
          <LogosTrack>
            <LogoBadge>Paramount</LogoBadge>
            <LogoBadge>A24</LogoBadge>
            <LogoBadge>i-D</LogoBadge>
            <LogoBadge>WB</LogoBadge>
            <LogoBadge>Nike</LogoBadge>
            <LogoBadge>NEON</LogoBadge>
            <LogoBadge>Paramount</LogoBadge>
            <LogoBadge>A24</LogoBadge>
            <LogoBadge>i-D</LogoBadge>
            <LogoBadge>WB</LogoBadge>
            <LogoBadge>Nike</LogoBadge>
            <LogoBadge>NEON</LogoBadge>
          </LogosTrack>
        </LogoMarquee>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <MediaBlock />
      </AnimateOnScreen>

      <AnimateOnScreen>
        <SectionGroup>
          <SectionText>
            Based in Amsterdam & Los Angeles.
            <br />
            Working globally.
          </SectionText>
          <SectionText>
            Our work has been recognized by Cannes Lions, Webby Awards, Lovies,
            Awwwards, and FWA. Over a decade of it.
          </SectionText>
        </SectionGroup>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <TeamGrid>
          {teamMembers.map(group => (
            <TeamColumn key={group.group}>
              <GroupHeading>{group.group}</GroupHeading>
              {group.members.map(member => (
                <TeamMemberCard key={member.name} avatar={member.image}>
                  <TeamMemberName>{member.name}</TeamMemberName>
                  <TeamMemberRole>{member.role}</TeamMemberRole>
                </TeamMemberCard>
              ))}
            </TeamColumn>
          ))}
        </TeamGrid>
      </AnimateOnScreen>

      <AnimateOnScreen>
        <ContactSection>
          <ContactHeading>New inquiries:</ContactHeading>
          <ContactRow>
            <ContactLabel>General</ContactLabel>
            <ContactLink href="mailto:inquiries@stinginc.com">
              inquiries@stinginc.com
            </ContactLink>
          </ContactRow>
          <ContactRow>
            <ContactLabel>Jobs & Internship</ContactLabel>
            <ContactLink href="mailto:jobs@stinginc.com">
              jobs@stinginc.com
            </ContactLink>
          </ContactRow>
          <ContactRow>
            <ContactLabel>Locations</ContactLabel>
            <ContactLink href="#">Amsterdam & Los Angeles</ContactLink>
          </ContactRow>
        </ContactSection>
      </AnimateOnScreen>
    </PageContainer>
  );
};

export default React.memo(AboutPage);
