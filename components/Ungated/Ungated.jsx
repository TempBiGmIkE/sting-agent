import React from 'react';
import Head from 'next/head';
import {
  ArtistCard,
  ArtistMeta,
  ArtistName,
  ChartLabel,
  ChartList,
  ChartRow,
  ChartTitle,
  Hero,
  HeroAside,
  HeroCopy,
  HeroKicker,
  HeroTitle,
  HeroVisual,
  Intro,
  IntroLabel,
  IntroTitle,
  JoinButton,
  Landing,
  ListenMark,
  NavLine,
  NavLink,
  Note,
  Number,
  Principles,
  Principle,
  PrincipleCopy,
  PrincipleHeading,
  PrincipleNumber,
  PrincipleTitle,
  SignalBar,
  SignalCard,
  SignalFooter,
  SignalHeader,
  SignalPill,
  Soundline,
  Story,
  StoryBody,
  StoryHeading,
  StoryIndex,
  StoryList,
  Wordmark,
} from './styles';

const discoveries = [
  {
    index: '01',
    name: 'Before the drop',
    genre: 'Unreleased / R&B',
    signal: 88,
  },
  {
    index: '02',
    name: 'No skips, just feeling',
    genre: 'Alt / Soul',
    signal: 74,
  },
  {
    index: '03',
    name: 'The one they missed',
    genre: 'Rap / Left-field',
    signal: 63,
  },
];

const principles = [
  {
    number: '01',
    title: 'Send it before it’s out',
    copy:
      'Put demos, rough cuts, and unreleased records in front of people who came to listen—not scroll past.',
  },
  {
    number: '02',
    title: 'Let real ears decide',
    copy:
      'Get thoughtful reactions from a community of 500+ superfans. No bought attention. No bot-made taste.',
  },
  {
    number: '03',
    title: 'Follow the human signal',
    copy:
      'See which songs are connecting and help shape discovery charts around what people actually love.',
  },
];

const Ungated = () => (
  <Landing>
    <Head>
      <title>UNGATED — Music discovery, by people</title>
      <meta
        name="description"
        content="Put unreleased music in front of real listeners. Meet UNGATED, an artist discovery community from Sting Studio."
      />
    </Head>

    <NavLine>
      <Wordmark href="/sting-studio">
        UNGATED<span>.</span>
      </Wordmark>
      <NavLink href="/sting-studio">
        A Sting Studio project <span aria-hidden="true">↗</span>
      </NavLink>
    </NavLine>

    <Hero>
      <HeroCopy>
        <HeroKicker>
          <i /> HUNTD — HUMAN-LED MUSIC DISCOVERY
        </HeroKicker>
        <HeroTitle>
          Your next fan
          <br />
          isn&apos;t an
          <br />
          <em>algorithm.</em>
        </HeroTitle>
        <HeroAside>
          <p>
            Unreleased tracks, human-led discovery charts, and a community of
            500+ superfans ready to hear what the algorithms miss.
          </p>
          <JoinButton href="#how-it-works">
            Find your people <span aria-hidden="true">↓</span>
          </JoinButton>
        </HeroAside>
      </HeroCopy>

      <HeroVisual aria-label="Illustration of the HUNTD human discovery chart">
        <Soundline aria-hidden="true">
          {Array.from({ length: 42 }, (_, index) => (
            <span key={index} />
          ))}
        </Soundline>
        <SignalCard>
          <SignalHeader>
            <div>
              <ChartLabel>THE HUNT / SAMPLE BOARD</ChartLabel>
              <ChartTitle>Worth a first listen.</ChartTitle>
            </div>
            <SignalPill>
              <i /> HUMAN PICKED
            </SignalPill>
          </SignalHeader>
          <ChartList>
            {discoveries.map(track => (
              <ChartRow key={track.index}>
                <Number>{track.index}</Number>
                <ArtistCard>
                  <ListenMark aria-hidden="true">▶</ListenMark>
                  <div>
                    <ArtistName>{track.name}</ArtistName>
                    <ArtistMeta>{track.genre}</ArtistMeta>
                  </div>
                </ArtistCard>
                <SignalBar $signal={track.signal}>
                  <span />
                </SignalBar>
              </ChartRow>
            ))}
          </ChartList>
          <SignalFooter>
            <span>NO PAY-TO-PLAY</span>
            <span>
              JUST PEOPLE + MUSIC <b>✳</b>
            </span>
          </SignalFooter>
        </SignalCard>
        <Note>MADE FOR MUSIC THAT HASN&apos;T HAD ITS MOMENT YET</Note>
      </HeroVisual>
    </Hero>

    <Intro id="how-it-works">
      <IntroLabel>THE INTERNET HAS ENOUGH NOISE.</IntroLabel>
      <IntroTitle>Make room for the music that finds you back.</IntroTitle>
      <Principles>
        {principles.map(item => (
          <Principle key={item.number}>
            <PrincipleNumber>{item.number}</PrincipleNumber>
            <PrincipleHeading>
              <PrincipleTitle>{item.title}</PrincipleTitle>
              <PrincipleCopy>{item.copy}</PrincipleCopy>
            </PrincipleHeading>
          </Principle>
        ))}
      </Principles>
    </Intro>

    <Story>
      <StoryIndex>THE POINT</StoryIndex>
      <StoryBody>
        <StoryHeading>
          Less chasing reach. More finding your people.
        </StoryHeading>
        <StoryList>
          <li>Give your unreleased sound a room full of first listeners.</li>
          <li>
            Get real feedback from people who love digging for what&apos;s next.
          </li>
          <li>
            No bought reach or AI-generated filler deciding what deserves
            attention.
          </li>
        </StoryList>
      </StoryBody>
    </Story>

    <JoinButton
      href="mailto:mgmt@thestinginc.com?subject=UNGATED%20artist%20access"
      $large
    >
      <span>Ready when you are.</span>
      <b>
        Tap in <span aria-hidden="true">↗</span>
      </b>
    </JoinButton>
  </Landing>
);

export default React.memo(Ungated);
