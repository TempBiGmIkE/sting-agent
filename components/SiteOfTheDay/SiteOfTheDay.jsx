/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import useStyledTheme from '../../hooks/useStyledTheme';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Container } from './styles';

const SiteOfTheDay = () => {
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container onMouseEnter={addCursorBorder} onMouseLeave={removeCursorBorder}>
      <Link href="https://www.thestinginc.com/store" passHref>
        <a target="_blank">
          <svg width="53.08" height="171.358" viewBox="0 0 53.08 171.358">
            <path fill={theme.text} d="M0 0h53.08v171.358H0z"></path>
            <g fill={theme.background}>
              <text
                x="26.54"
                y="85.679"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, sans-serif"
                fontSize="11"
                fontWeight="bold"
                writingMode="vertical-rl"
                transform="rotate(180 26.54 85.679)"
                letterSpacing="1"
              >
                STING STORE
              </text>
            </g>
          </svg>
        </a>
      </Link>
    </Container>
  );
};

export default SiteOfTheDay;
