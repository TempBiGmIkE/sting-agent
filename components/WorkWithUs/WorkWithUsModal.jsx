import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  TabsContainer,
  Tab,
  TabContent,
  Section,
  SectionTitle,
  SectionDescription,
  ItemGrid,
  Card,
  CardTitle,
  CardDescription,
  List,
  ListItem,
  Milestone,
  MilestoneIcon,
  MilestoneContent,
  MilestoneTitle,
  MilestoneDescription,
  ManifestoBlock,
} from './styles';

const WorkWithUsModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('processes');

  if (!isOpen) return null;

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const tabVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <ModalOverlay
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContent
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>

        <ModalHeader>
          <ModalTitle>Work With Us</ModalTitle>
          <ModalSubtitle>
            Join us on our mission to create exceptional digital experiences
          </ModalSubtitle>
        </ModalHeader>

        <TabsContainer>
          <Tab active={activeTab === 'processes'} onClick={() => setActiveTab('processes')}>
            Processes
          </Tab>
          <Tab active={activeTab === 'capabilities'} onClick={() => setActiveTab('capabilities')}>
            Capabilities
          </Tab>
          <Tab active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>
            Projects
          </Tab>
          <Tab active={activeTab === 'milestones'} onClick={() => setActiveTab('milestones')}>
            Milestones
          </Tab>
          <Tab active={activeTab === 'roadmap'} onClick={() => setActiveTab('roadmap')}>
            Roadmap
          </Tab>
          <Tab active={activeTab === 'plans'} onClick={() => setActiveTab('plans')}>
            Plans
          </Tab>
          <Tab active={activeTab === 'manifesto'} onClick={() => setActiveTab('manifesto')}>
            Manifesto
          </Tab>
        </TabsContainer>

        <TabContent variants={tabVariants} initial="initial" animate="animate" exit="exit">
          {activeTab === 'processes' && (
            <>
              <SectionTitle>Our Working Processes</SectionTitle>
              <SectionDescription>
                We follow a structured, collaborative approach to every project we undertake.
              </SectionDescription>

              <ItemGrid>
                <Card>
                  <CardTitle>Discovery & Research</CardTitle>
                  <CardDescription>
                    We start by understanding your vision, goals, and target audience through
                    comprehensive research and stakeholder interviews.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Strategy & Planning</CardTitle>
                  <CardDescription>
                    Our team develops a detailed strategy that outlines the project scope,
                    timeline, deliverables, and success metrics.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Design & Prototyping</CardTitle>
                  <CardDescription>
                    We create compelling visual designs and interactive prototypes to bring
                    your ideas to life and gather feedback.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Development & Implementation</CardTitle>
                  <CardDescription>
                    Our developers build robust, scalable solutions using the latest
                    technologies and best practices.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Testing & QA</CardTitle>
                  <CardDescription>
                    Rigorous testing ensures your product is bug-free, performant, and
                    meets all quality standards.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Launch & Support</CardTitle>
                  <CardDescription>
                    We manage the launch process and provide ongoing support to ensure
                    success in the market.
                  </CardDescription>
                </Card>
              </ItemGrid>
            </>
          )}

          {activeTab === 'capabilities' && (
            <>
              <SectionTitle>Our Capabilities</SectionTitle>
              <SectionDescription>
                STING Collective brings together creative and technical expertise across
                multiple disciplines.
              </SectionDescription>

              <ItemGrid>
                <Card>
                  <CardTitle>Digital Strategy</CardTitle>
                  <List>
                    <ListItem>Brand positioning & messaging</ListItem>
                    <ListItem>Digital transformation roadmaps</ListItem>
                    <ListItem>Market analysis & competitive research</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Creative Design</CardTitle>
                  <List>
                    <ListItem>UI/UX Design</ListItem>
                    <ListItem>Branding & Identity</ListItem>
                    <ListItem>Motion & Animation</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Web Development</CardTitle>
                  <List>
                    <ListItem>Full-stack applications</ListItem>
                    <ListItem>Progressive Web Apps</ListItem>
                    <ListItem>E-commerce platforms</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Mobile Development</CardTitle>
                  <List>
                    <ListItem>iOS & Android apps</ListItem>
                    <ListItem>Cross-platform solutions</ListItem>
                    <ListItem>App optimization</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Video & Content</CardTitle>
                  <List>
                    <ListItem>Concept development</ListItem>
                    <ListItem>Production & cinematography</ListItem>
                    <ListItem>Post-production & editing</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Marketing & Growth</CardTitle>
                  <List>
                    <ListItem>Campaign strategy</ListItem>
                    <ListItem>Social media management</ListItem>
                    <ListItem>Analytics & optimization</ListItem>
                  </List>
                </Card>
              </ItemGrid>
            </>
          )}

          {activeTab === 'projects' && (
            <>
              <SectionTitle>Proposed Project Scopes</SectionTitle>
              <SectionDescription>
                We work on diverse projects ranging from startups to established enterprises.
              </SectionDescription>

              <ItemGrid>
                <Card>
                  <CardTitle>Brand Launch</CardTitle>
                  <CardDescription>
                    Complete brand identity, web presence, and marketing strategy for new
                    ventures.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Digital Transformation</CardTitle>
                  <CardDescription>
                    Modernizing legacy systems and processes with contemporary digital
                    solutions.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Product Development</CardTitle>
                  <CardDescription>
                    From concept to launch, we build innovative products that solve real
                    problems.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Campaign Execution</CardTitle>
                  <CardDescription>
                    Integrated marketing campaigns across digital and traditional channels
                    to maximize impact.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Experience Design</CardTitle>
                  <CardDescription>
                    Creating immersive digital experiences that engage and delight users
                    at every touchpoint.
                  </CardDescription>
                </Card>

                <Card>
                  <CardTitle>Optimization & Growth</CardTitle>
                  <CardDescription>
                    Analyzing, testing, and refining digital properties to drive growth
                    and achieve KPIs.
                  </CardDescription>
                </Card>
              </ItemGrid>
            </>
          )}

          {activeTab === 'milestones' && (
            <>
              <SectionTitle>Key Milestones</SectionTitle>
              <SectionDescription>
                Our journey of growth, innovation, and impact across the industry.
              </SectionDescription>

              <Milestone>
                <MilestoneIcon>2014</MilestoneIcon>
                <MilestoneContent>
                  <MilestoneTitle>STING Collective Founded</MilestoneTitle>
                  <MilestoneDescription>
                    Bringing together creative minds from across the continent to build
                    world-class digital experiences.
                  </MilestoneDescription>
                </MilestoneContent>
              </Milestone>

              <Milestone>
                <MilestoneIcon>2016</MilestoneIcon>
                <MilestoneContent>
                  <MilestoneTitle>50+ Successful Projects</MilestoneTitle>
                  <MilestoneDescription>
                    Established ourselves as leading creative agency delivering exceptional
                    results for clients.
                  </MilestoneDescription>
                </MilestoneContent>
              </Milestone>

              <Milestone>
                <MilestoneIcon>2018</MilestoneIcon>
                <MilestoneContent>
                  <MilestoneTitle>Global Expansion</MilestoneTitle>
                  <MilestoneDescription>
                    Opened studios in key markets and assembled teams across Africa and
                    the Diaspora.
                  </MilestoneDescription>
                </MilestoneContent>
              </Milestone>

              <Milestone>
                <MilestoneIcon>2021</MilestoneIcon>
                <MilestoneContent>
                  <MilestoneTitle>Industry Recognition</MilestoneTitle>
                  <MilestoneDescription>
                    Awarded numerous accolades for creativity, innovation, and excellence
                    in digital design.
                  </MilestoneDescription>
                </MilestoneContent>
              </Milestone>

              <Milestone>
                <MilestoneIcon>2024</MilestoneIcon>
                <MilestoneContent>
                  <MilestoneTitle>1000+ Lives Impacted</MilestoneTitle>
                  <MilestoneDescription>
                    Our work continues to drive meaningful change and create opportunities
                    for talent across the continent.
                  </MilestoneDescription>
                </MilestoneContent>
              </Milestone>
            </>
          )}

          {activeTab === 'roadmap' && (
            <>
              <SectionTitle>Sting Visions Roadmap</SectionTitle>
              <SectionDescription>
                Our strategic vision for the future of creative technology and digital
                innovation.
              </SectionDescription>

              <Section>
                <CardTitle>2024 - Consolidation & Excellence</CardTitle>
                <List>
                  <ListItem>Strengthen core creative and development capabilities</ListItem>
                  <ListItem>Expand our AI-powered design tools and automation</ListItem>
                  <ListItem>Build strategic partnerships with global tech leaders</ListItem>
                  <ListItem>Mentor next generation of digital creators</ListItem>
                </List>
              </Section>

              <Section>
                <CardTitle>2025 - Innovation & Scale</CardTitle>
                <List>
                  <ListItem>Launch proprietary digital products and platforms</ListItem>
                  <ListItem>Expand to 5 new markets across Africa and beyond</ListItem>
                  <ListItem>Double our team size with top talent acquisition</ListItem>
                  <ListItem>Establish thought leadership through research & publishing</ListItem>
                </List>
              </Section>

              <Section>
                <CardTitle>2026-2027 - Global Leadership</CardTitle>
                <List>
                  <ListItem>Become top 3 creative agencies in Africa and Diaspora</ListItem>
                  <ListItem>Lead industry standards for digital excellence</ListItem>
                  <ListItem>Create impact initiatives supporting African tech ecosystem</ListItem>
                  <ListItem>Develop innovative solutions for emerging markets</ListItem>
                </List>
              </Section>
            </>
          )}

          {activeTab === 'plans' && (
            <>
              <SectionTitle>Actionable Plans</SectionTitle>
              <SectionDescription>
                Concrete steps we're taking to turn our vision into reality.
              </SectionDescription>

              <ItemGrid>
                <Card>
                  <CardTitle>Talent Development</CardTitle>
                  <List>
                    <ListItem>Monthly training & workshops</ListItem>
                    <ListItem>Mentorship programs</ListItem>
                    <ListItem>Conference attendance & networking</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Client Success</CardTitle>
                  <List>
                    <ListItem>Dedicated account management</ListItem>
                    <ListItem>Quarterly business reviews</ListItem>
                    <ListItem>Proactive optimization & support</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Tech Innovation</CardTitle>
                  <List>
                    <ListItem>R&D investment in emerging tech</ListItem>
                    <ListItem>Internal tool development</ListItem>
                    <ListItem>Automation & efficiency gains</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Community Impact</CardTitle>
                  <List>
                    <ListItem>Free workshops for students</ListItem>
                    <ListItem>Pro bono projects for nonprofits</ListItem>
                    <ListItem>Industry knowledge sharing</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Strategic Partnerships</CardTitle>
                  <List>
                    <ListItem>Collaborate with tech platforms</ListItem>
                    <ListItem>Build agency partnerships</ListItem>
                    <ListItem>Create referral networks</ListItem>
                  </List>
                </Card>

                <Card>
                  <CardTitle>Operational Excellence</CardTitle>
                  <List>
                    <ListItem>Process optimization</ListItem>
                    <ListItem>Quality assurance systems</ListItem>
                    <ListItem>Performance metrics & KPIs</ListItem>
                  </List>
                </Card>
              </ItemGrid>
            </>
          )}

          {activeTab === 'manifesto' && (
            <>
              <SectionTitle>Our Manifesto</SectionTitle>

              <ManifestoBlock>
                <p>
                  We believe in the power of creative thinking to transform industries,
                  communities, and lives.
                </p>
                <p>
                  We are committed to excellence in everything we do—from the pixels on
                  screen to the processes behind the scenes.
                </p>
              </ManifestoBlock>

              <Section>
                <CardTitle>What We Stand For</CardTitle>
                <List>
                  <ListItem>
                    <strong>Authenticity</strong> - We create genuine, meaningful work
                    that resonates with audiences
                  </ListItem>
                  <ListItem>
                    <strong>Innovation</strong> - We constantly push boundaries and explore
                    new possibilities
                  </ListItem>
                  <ListItem>
                    <strong>Inclusivity</strong> - We celebrate diverse perspectives and
                    ensure everyone's voice is heard
                  </ListItem>
                  <ListItem>
                    <strong>Impact</strong> - We measure success by the positive change
                    we create
                  </ListItem>
                  <ListItem>
                    <strong>Excellence</strong> - We refuse to compromise on quality and
                    attention to detail
                  </ListItem>
                </List>
              </Section>

              <ManifestoBlock>
                <p>
                  We are storytellers, problem-solvers, and visionaries working at the
                  intersection of art and science.
                </p>
                <p>
                  Our goal is simple: to create work that matters, partnerships that
                  last, and futures that inspire.
                </p>
                <p>
                  Together, we're building the creative ecosystem Africa deserves and the
                  world needs.
                </p>
              </ManifestoBlock>
            </>
          )}
        </TabContent>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WorkWithUsModal;
