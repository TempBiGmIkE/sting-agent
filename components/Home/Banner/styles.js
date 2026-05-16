import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BannerSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-bottom: 305px;
  background: ${({ theme }) => theme.background};

  & canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 90px;
  `};
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 100%;

  & video {
    object-fit: cover;
  }
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -93px;
  left: -20px;
  font-size: 220px;
  pointer-events: none;
  line-height: 0.6714285714;
  max-width: calc(100% + 20px);

  & span {
    display: block;
    will-change: transform;
    white-space: normal;
    word-break: break-word;
  }

  ${({ theme }) => theme.breakpoints.small`
    left: -10px;
    bottom: -63px;
    font-size: 280px;
    font-size: 14.5rem;
    line-height: .6821428571;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    left: -6px;
    bottom: -36px;
    max-width: calc(100% + 6px);
    font-size: clamp(6rem, 18vw, 10rem);
    line-height: .72;
    overflow: hidden;
  `};

  ${({ theme }) => theme.breakpoints.mobile`
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0 12px;
    max-width: 100%;
    font-size: clamp(2rem, 12vw, 4rem);
    line-height: 0.9;
    overflow: hidden;
    white-space: normal;
    word-break: keep-all;
    overflow-wrap: normal;
    hyphens: none;
  `};
`;
